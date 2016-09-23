export declare enum TapticEngineNotificationType {
    SUCCESS = 1,
    WARNING = 2,
    ERROR = 3,
}
export declare enum TapticEngineImpactStyle {
    LIGHT = 1,
    MEDIUM = 2,
    HEAVY = 3,
}
export interface TapticEngineNotificationOptions {
    type?: TapticEngineNotificationType;
}
export interface TapticEngineImpactOptions {
    style?: TapticEngineImpactStyle;
}
export declare class Common {
    constructor();
}
