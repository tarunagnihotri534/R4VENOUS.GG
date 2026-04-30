"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function AnimationObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const observe = () => {
      const staggerGroups = document.querySelectorAll("[data-stagger]");
      staggerGroups.forEach((group) => {
        const step = Number(group.getAttribute("data-stagger-step") ?? "80");
        const children = group.querySelectorAll("[data-animate]:not([data-delay])");
        children.forEach((child, index) => {
          (child as HTMLElement).style.animationDelay = `${index * step}ms`;
        });
      });

      const elements = document.querySelectorAll("[data-animate]:not(.in-view)");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.15,
          rootMargin: "0px 0px -12% 0px",
        }
      );

      elements.forEach((el) => observer.observe(el));
      return observer;
    };

    // Run immediately
    let obs = observe();

    // Re-scan slightly after route change to ensure React has fully painted the new page
    const timeoutId = setTimeout(() => {
      obs.disconnect();
      obs = observe();
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      obs.disconnect();
    };
  }, [pathname]);

  return null;
}
