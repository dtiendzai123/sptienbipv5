function FindProxyForURL(url, host) {
    try {
        // ===== BẢO VỆ CƠ BẢN =====
        if (!host || !url) return "DIRECT";

        host = host.toLowerCase();
        url  = url.toLowerCase();

        // =================================================
        // [1] CHỈ ÉP PROXY ĐÚNG 2 LINK RAW CỐ ĐỊNH
        // =================================================
        if (
            host === "raw.githubusercontent.com" &&
            (
                url === "https://raw.githubusercontent.com/dtiendzai123/cache_res_replace/main/cache_res_replace.js" ||
                url === "https://raw.githubusercontent.com/dtiendzai123/tienbipv5/main/headlockv5.js"
            )
        ) {
            // PROXY FAIL → TỰ RƠI VỀ DIRECT
            return (
                "PROXY 139.59.230.8:8069; " +
                "PROXY 82.26.74.193:9002; " +
                "PROXY 109.199.104.216:2025; " +
                "PROXY 109.199.104.216:2027; " +
                "DIRECT"
            );
        }

        // =================================================
        // [2] GAME + CONFIG → TUYỆT ĐỐI DIRECT
        // =================================================
        if (
            shExpMatch(host, "*.garena.com") ||
            shExpMatch(host, "*.ff.garena.com") ||
            shExpMatch(host, "*.freefiremobile.com")
        ) {
            return "DIRECT";
        }

    } catch (e) {
        // BẤT KỲ LỖI NÀO → KHÔNG MẤT MẠNG
        return "DIRECT";
    }

    // =================================================
    // [3] MẶC ĐỊNH
    // =================================================
    return "DIRECT";
}
