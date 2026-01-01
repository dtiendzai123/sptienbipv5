/**
 * Shadowrocket Proxy Router (JS)
 * Converted from PAC
 * Author: dtien
 */

const url = $request.url;
const host = $request.hostname || "";

// ===============================
// PROXY POOL
// ===============================
const PROXIES = [
  "PROXY 139.59.230.8:8069",
  "PROXY 82.26.74.193:9002",
  "PROXY 109.199.104.216:2025",
  "PROXY 109.199.104.216:2027"
];

// Random proxy (optional – có thể đổi sang fixed)
function pickProxy() {
  return PROXIES[Math.floor(Math.random() * PROXIES.length)];
}

// ===============================
// 1️⃣ FORCE RAW GITHUB FILE
// ===============================
if (
  url === "https://raw.githubusercontent.com/dtiendzai123/cache_res_replace/main/cache_res_replace.js" ||
  url === "https://raw.githubusercontent.com/dtiendzai123/tienbipv5/main/headlockv5.js"
) {
  const proxy = pickProxy();
  console.log("[PROXY POOL] RAW GitHub →", proxy);
  $done({ policy: proxy });
  return;
}

// ===============================
// 2️⃣ FREE FIRE / GARENA → DIRECT
// ===============================
if (
  host.includes("garena") ||
  host.includes("freefire") ||
  host.includes("ff.garena.com") ||
  host.includes("garenanow.com")
) {
  $done({});
  return;
}

// ===============================
// 3️⃣ LOCAL / SYSTEM
// ===============================
if (
  host === "localhost" ||
  host.startsWith("192.168.") ||
  host.startsWith("172.16.") ||
  host === "109.199.104.216" ||
  host === "139.59.230.8"
) {
  $done({});
  return;
}

// ===============================
// 4️⃣ DEFAULT → DIRECT
// ===============================
$done({});
