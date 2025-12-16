function FindProxyForURL(url, host) {
    host = host.toLowerCase();

    // ===== LOCAL =====
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

    // ===== GAME / SERVICE (BẮT BUỘC DIRECT) =====
    if (
        shExpMatch(host, "*.garena.com") ||
        shExpMatch(host, "*.ff.garena.com") ||
        shExpMatch(host, "*.freefiremobile.com") ||
        shExpMatch(host, "*.game-api.*")
    ) {
        return "DIRECT";
    }

    // ===== CONFIG API (ÉP QUA PROXY) =====
    if (
        shExpMatch(host, "raw.githubusercontent.com") ||
        shExpMatch(host, "*.githubusercontent.com")
    ) {
        return "PROXY 139.59.230.8:8069; PROXY 82.26.74.193:9002; PROXY 109.199.104.216:2025"; PROXY 109.199.104.216:2027"; DIRECT";
    }

    // ===== COMMON API (DIRECT) =====
    if (
        shExpMatch(host, "*.googleapis.com") ||
        shExpMatch(host, "*.firebaseio.com") ||
        shExpMatch(host, "*.amazonaws.com") ||
        shExpMatch(host, "*.cloudflare.com")
    ) {
        return "DIRECT";
    }

    return "DIRECT";
}
