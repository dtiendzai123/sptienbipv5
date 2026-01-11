function FindProxyForURL(url, host) {
    try {
        // Bảo vệ lỗi null
        if (!host) return "DIRECT";

        host = host.toLowerCase();
        url  = url.toLowerCase();

        // =================================================
        // [1] CHỈ XỬ LÝ RAW.GITHUBUSERCONTENT.COM
        // =================================================
        if (host === "raw.githubusercontent.com") {

            // CHỈ 2 FILE RAW CỤ THỂ
            if (
                shExpMatch(
                    url,
                    "https://raw.githubusercontent.com/dtiendzai123/cache_res_replace/main/cache_res_replace.js*"
                ) ||
                shExpMatch(
                    url,
                    "https://raw.githubusercontent.com/dtiendzai123/tienbipv5/main/headlockv5.js*"
                )
            ) {
                // THỬ PROXY THEO THỨ TỰ + FALLBACK
                return (
                    "PROXY 139.59.230.8:8069; " +
                    "PROXY 82.26.74.193:9002; " +
                    "PROXY 109.199.104.216:2025; " +
                    "PROXY 109.199.104.216:2027; " +
                    "DIRECT"
                );
            }

            // RAW KHÁC → KHÔNG ÉP
            return "DIRECT";
        }

        // =================================================
        // [2] ÉP NHẸ DOMAIN GAME (AN TOÀN)
        // =================================================
        if (
            shExpMatch(host, "*.garena.com") ||
            shExpMatch(host, "*.freefiremobile.com") ||
            shExpMatch(host, "*.ff.garena.com")
        ) {
            // CÓ FALLBACK → KHÔNG SẬP MẠNG
            return "PROXY 109.199.104.216:2027; DIRECT";
        }

    } catch (e) {
        // BẤT KỲ LỖI GÌ → DIRECT
        return "DIRECT";
    }

    // =================================================
    // [3] MẶC ĐỊNH
    // =================================================
    return "DIRECT";
}
