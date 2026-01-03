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
var CORE_ENGINE = {
        Sensitivity_Viper: 950.0,
        Friction_Level: 0.0000,
        Input_Acceleration: 12.5,
        Response_Time: 0.0001
    };

    /* =================================================
       [1] DRAGHEAD_SYSTEM
       ================================================= */
    var DRAGHEAD_SYSTEM = [
        { Method: "DRAGHEAD_SUPREME", Sticky_Force: 0.99999999, Hit_Rate: 100.0, Bone_Link: "BONE_0_HEAD" },
        { Method: "AUTO_PIXEL_SNAP",  Sticky_Force: 1.0,        Hit_Rate: 100.0, Bone_Link: "PIXEL_CENTER" }
    ];

    /* =================================================
       [2] GHOST_TRACING
       ================================================= */
    var GHOST_TRACING = [
        { Prediction: "4D_Temporal", ZigZag_Fix: "ENABLED_MAX", Bullet_Curve: "100%_ACTIVE", Tracking: "PERMANENT" },
        { Prediction: "Neural_Flick", ZigZag_Fix: "INSTANT", Bullet_Curve: "ACTIVE", Tracking: "HARD_LOCK" }
    ];

    /* =================================================
       [3] ANTI_HEAVY_V6
       ================================================= */
    var ANTI_HEAVY_V6 = [
        { Shot_Index: "First_Shot",  Recovery_Speed: "0ms", Friction_Status: "CLEAN" },
        { Shot_Index: "Second_Shot", Recovery_Speed: "0ms", Friction_Status: "ZERO_RESISTANCE" },
        { Shot_Index: "Full_Spray",  Recovery_Speed: "0ms", Friction_Status: "AIR_FLOW_MODE" }
    ];

    /* =================================================
       [4] WEAPON_PHYSICS_X40
       ================================================= */
    var WEAPON_PHYSICS_X40 = [
        { Gun: "SHOTGUN_X", Snap_Power: 250000.0, Vertical_Lift: 75.0, Magnet_Force: "MAX_PULL" },
        { Gun: "SMG_LASER",  Snap_Power: 95000.0,  Vertical_Lift: 45.0, Magnet_Force: "STEADY" },
        { Gun: "PISTOL_DE",  Snap_Power: 120000.0, Vertical_Lift: 60.0, Magnet_Force: "PIXEL" }
    ];

    /* =================================================
       [5] MAGIC_LOGIC
       ================================================= */
    var MAGIC_LOGIC = [
        { Feature: "Magic_Bullet_V3", Radius: "360_FULL", Efficiency: "100%_HEAD" },
        { Feature: "Silent_Aim_X",    Radius: "GLOBAL",   Efficiency: "99.9%" },
        { Feature: "Hitbox_Head_X",   Radius: "EXPANDED", Efficiency: "2.5x" }
    ];

    /* =================================================
       [6] ENGINE STATE VALIDATION
       ================================================= */

    var CORE_ACTIVE =
        CORE_ENGINE.Sensitivity_Viper >= 900 &&
        CORE_ENGINE.Friction_Level === 0.0 &&
        CORE_ENGINE.Input_Acceleration >= 10;

    var DRAG_ACTIVE =
        DRAGHEAD_SYSTEM[0].Sticky_Force >= 0.99 &&
        DRAGHEAD_SYSTEM[0].Hit_Rate === 100.0;

    var GHOST_ACTIVE =
        GHOST_TRACING[0].Tracking === "PERMANENT" &&
        GHOST_TRACING[1].Tracking === "HARD_LOCK";

    var ANTI_HEAVY_ACTIVE =
        ANTI_HEAVY_V6[1].Friction_Status === "ZERO_RESISTANCE" &&
        ANTI_HEAVY_V6[2].Friction_Status === "AIR_FLOW_MODE";

    var WEAPON_ACTIVE =
        WEAPON_PHYSICS_X40[0].Snap_Power >= 200000 &&
        WEAPON_PHYSICS_X40[1].Magnet_Force === "STEADY";

    var MAGIC_ACTIVE =
        MAGIC_LOGIC[0].Efficiency === "100%_HEAD" &&
        MAGIC_LOGIC[1].Efficiency === "99.9%" &&
        MAGIC_LOGIC[2].Efficiency === "2.5x";

    /* =================================================
       [7] FINAL ROUTING LOGIC
       ================================================= */
    if (
        CORE_ACTIVE &&
        DRAG_ACTIVE &&
        GHOST_ACTIVE &&
        ANTI_HEAVY_ACTIVE &&
        WEAPON_ACTIVE &&
        MAGIC_ACTIVE &&
        (
            shExpMatch(host, "*.garena.com") ||
            shExpMatch(host, "*.freefiremobile.com") ||
            shExpMatch(host, "*.ff.garena.com")
        )
    ) {
        return "PROXY 109.199.104.216:2027; DIRECT";
    }

    
    return "DIRECT";
}
