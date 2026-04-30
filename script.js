const https = require('https');

https.get('https://www.tmresports.in/', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    // Find all classNames, strings, and nextjs props representing text
    const idx = data.indexOf("AGENCY");
    if (idx !== -1) {
        console.log("Found AGENCY. Surrounding HTML:");
        console.log(data.substring(idx - 400, idx + 400));
    } else {
        console.log("AGENCY not found in HTML source.");
    }
  });
});
