import speedTest from "speedtest-net";

async function runSpeedTest() {
    try {
        console.log("Finding best server...");

        const result = await speedTest({ acceptLicense: true, acceptGdpr: true });

        const downloadSpeed = result.download.bandwidth * 8 / 1_000_000; // Mbps
        const uploadSpeed = result.upload.bandwidth * 8 / 1_000_000;     // Mbps
        const ping = result.ping.latency;

        console.log("\n--- Speed Test Results ---");
        console.log(`Ping: ${ping.toFixed(2)} ms`);
        console.log(`Download Speed: ${downloadSpeed.toFixed(2)} Mbps`);
        console.log(`Upload Speed: ${uploadSpeed.toFixed(2)} Mbps`);

    } catch (error) {
        console.error("Speed test failed:", error.message);
    }
}

runSpeedTest();
