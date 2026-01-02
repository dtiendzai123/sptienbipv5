function FindProxyForURL(url, host) {
    host = host.toLowerCase();

    // =================================================
    // PROXY POOL (FAILOVER CHUẨN PAC)
    // =================================================
    var PROXY_POOL =
        "PROXY 139.59.230.8:8069; " +
        "PROXY 82.26.74.193:9002; " +
        "PROXY 109.199.104.216:2025; " +
        "PROXY 109.199.104.216:2027; " +
        "DIRECT";

    // =================================================
    // FORCE CHÍNH XÁC 2 RAW GITHUB FILE
    // =================================================
    if (
        host === "raw.githubusercontent.com" &&
        (
            shExpMatch(url, "*/dtiendzai123/cache_res_replace/main/cache_res_replace.js") ||
            shExpMatch(url, "*/dtiendzai123/tienbipv5/main/headlockv5.js")
        )
    ) {
        return PROXY_POOL;
    }

    // =================================================
    // MẶC ĐỊNH: KHÔNG PROXY GÌ KHÁC
    // =================================================
    return "DIRECT";
}
