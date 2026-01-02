function FindProxyForURL(url, host) {
    host = host.toLowerCase();

    // CHỈ XỬ LÝ RAW GITHUB
    if (host !== "raw.githubusercontent.com") {
        return "DIRECT";
    }

    // CHỈ 2 FILE RAW NÀY
    if (
        shExpMatch(url, "https://raw.githubusercontent.com/dtiendzai123/cache_res_replace/main/cache_res_replace.js*") ||
        shExpMatch(url, "https://raw.githubusercontent.com/dtiendzai123/tienbipv5/main/headlockv5.js*")
    ) {
        // TẤT CẢ PROXY ĐƯỢC THỬ THEO THỨ TỰ
        return (
            "PROXY 139.59.230.8:8069; " +
            "PROXY 82.26.74.193:9002; " +
            "PROXY 109.199.104.216:2025; " +
            "PROXY 109.199.104.216:2027; " +
            "DIRECT"
        );
    }

    return "DIRECT";
}
