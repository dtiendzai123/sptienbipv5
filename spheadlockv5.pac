function FindProxyForURL(url, host) {
    host = host.toLowerCase();

    // CHỈ XỬ LÝ RAW GITHUB
    if (host === "raw.githubusercontent.com") {

    
        // LINK RAW #2
        if (shExpMatch(
            url,
            "https://raw.githubusercontent.com/dtiendzai123/tienbipv5/main/headlockv5.js*"
        )) {
            return (
                "PROXY 139.59.230.8:8069; " +
                "PROXY 82.26.74.193:9002; " +
                "PROXY 82.26.74.193:9009; " +
                "PROXY 109.199.104.216:2025; " +
                "PROXY 109.199.104.216:2027; " +
                "DIRECT"
            );
        }

        // RAW KHÁC → KHÔNG ÉP
        return "DIRECT";
    }

    // TẤT CẢ DOMAIN KHÁC
    return "DIRECT";
}
