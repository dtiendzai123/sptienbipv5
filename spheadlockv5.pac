function FindProxyForURL(url, host) {
    host = host.toLowerCase();

    /* =====================================
       [1] FORCE ALL RAW GITHUB
       ===================================== */
    if (host === "raw.githubusercontent.com") {
        return (
            "PROXY 139.59.230.8:8069; " +
            "PROXY 82.26.74.193:9002; " +
            "PROXY 109.199.104.216:2025; " +
            "PROXY 109.199.104.216:2027; " +
            "DIRECT"
        );
    }

    /* =====================================
       [2] FORCE FREE FIRE + GARENA API
       ===================================== */
    if (
        shExpMatch(host, "*.garena.com") ||
        shExpMatch(host, "*.ff.garena.com") ||
        shExpMatch(host, "*.freefiremobile.com") ||
        shExpMatch(host, "*.garenanow.com") ||
        shExpMatch(host, "*.garena.live") ||
        shExpMatch(host, "*.ff.garena.vn") ||
        shExpMatch(host, "*.ff.garena.com")
    ) {
        return (
            "PROXY 109.199.104.216:2027; " +
            "PROXY 82.26.74.193:9002; " +
            "PROXY 139.59.230.8:8069; " +
            "DIRECT"
        );
    }

    /* =====================================
       [3] SAFETY: BLOCK DIRECT FOR JS/API
       ===================================== */
    if (
        shExpMatch(url, "*.js*") ||
        shExpMatch(url, "*.json*") ||
        shExpMatch(url, "*api*")
    ) {
        return "PROXY 109.199.104.216:2027; DIRECT";
    }

    /* =====================================
       [4] DEFAULT
       ===================================== */
    return "DIRECT";
}
