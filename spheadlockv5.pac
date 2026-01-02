function FindProxyForURL(url, host) {
    host = host.toLowerCase();

    // =================================================
    // PROXY POOL (FAILOVER – ƯU TIÊN THEO ĐỘ ỔN ĐỊNH)
    // =================================================
    var PROXY_POOL =
        "PROXY 139.59.230.8:8069; " +
        "PROXY 82.26.74.193:9002; " +
        "PROXY 109.199.104.216:2025; " +
        "PROXY 109.199.104.216:2027; " +
        "DIRECT";

    // =================================================
    // 1) FORCE RAW GITHUB FILE (ĐÁNH RẤT MẠNH – CHÍNH XÁC)
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
    // 2) LOCAL / PRIVATE NETWORK (BỎ QUA PROXY – GIẢM LAG)
    // =================================================
    if (
        isPlainHostName(host) ||
        shExpMatch(host, "localhost") ||
        isInNet(host, "127.0.0.0", "255.0.0.0") ||
        isInNet(host, "10.0.0.0", "255.0.0.0") ||
        isInNet(host, "172.16.0.0", "255.240.0.0") ||
        isInNet(host, "192.168.0.0", "255.255.0.0")
    ) {
        return "DIRECT";
    }

    // =================================================
    // 3) FREE FIRE / GAME CDN (BẮT BUỘC DIRECT – TRÁNH BAN + LAG)
    // =================================================
    if (
        shExpMatch(host, "*.garena.com") ||
        shExpMatch(host, "*.garenanow.com") ||
        shExpMatch(host, "*.freefiremobile.com") ||
        shExpMatch(host, "*.ff.garena.com") ||
        shExpMatch(host, "*.akamaihd.net") ||
        shExpMatch(host, "*.cloudfront.net") ||
        shExpMatch(host, "*.fastly.net")
    ) {
        return "DIRECT";
    }

    // =================================================
    // 4) API PHỔ BIẾN – DIRECT ĐỂ KHÔNG LỖI APP
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
    // 5) DEFAULT – DIRECT (KHÔNG ÉP PROXY TOÀN MẠNG)
    // =================================================
    return "DIRECT";
}
