function FindProxyForURL(url, host) {
    host = host.toLowerCase();

    // =================================================
    // 1) FORCE SPECIFIC RAW FILE VIA PROXY POOL
    // =================================================
    if (
        shExpMatch(url, "https://raw.githubusercontent.com/dtiendzai123/cache_res_replace/main/cache_res_replace.js")
    ) {
        var PROXY1 = "PROXY 139.59.230.8:8069";
        var PROXY2 = "PROXY 82.26.74.193:9002";
        var PROXY3 = "PROXY 109.199.104.216:2025";
        var PROXY4 = "PROXY 109.199.104.216:2027";

        return PROXY1 + "; " +
               PROXY2 + "; " +
               PROXY3 + "; " +
               PROXY4 + "; DIRECT";
    }

    // =================================================
    // 2) LOCAL / SYSTEM
    // =================================================
    if (
        isPlainHostName(host) ||
        shExpMatch(host, "localhost") ||
        shExpMatch(host, "127.*") ||
        shExpMatch(host, "10.*") ||
        shExpMatch(host, "192.168.*") ||
        shExpMatch(host, "172.16.*")
    ) {
        return "DIRECT";
    }

    // =================================================
    // 3) GAME / FREE FIRE (DIRECT)
    // =================================================
    if (
        shExpMatch(host, "*.garena.com") ||
        shExpMatch(host, "*.ff.garena.com") ||
        shExpMatch(host, "*.freefiremobile.com") ||
        shExpMatch(host, "*.garenanow.com") ||
        shExpMatch(host, "*.akamaihd.net") ||
        shExpMatch(host, "*.cloudfront.net") ||
        shExpMatch(host, "*.fastly.net")
    ) {
        return "DIRECT";
    }

    // =================================================
    // 4) COMMON API (DIRECT)
    // =================================================
    if (
        shExpMatch(host, "*.googleapis.com") ||
        shExpMatch(host, "*.firebaseio.com") ||
        shExpMatch(host, "*.amazonaws.com") ||
        shExpMatch(host, "*.cloudflare.com")
    ) {
        return "DIRECT";
    }

    // =================================================
    // 5) DEFAULT
    // =================================================
    return "DIRECT";
}
