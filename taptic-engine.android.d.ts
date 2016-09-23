export * from "./taptic-engine.common";
import { Common, TapticEngineNotificationOptions, TapticEngineImpactOptions } from "./taptic-engine.common";
export declare class TapticEngine extends Common {
    notification(arg?: TapticEngineNotificationOptions): Promise<any>;
    impact(arg?: TapticEngineImpactOptions): Promise<any>;
    selection(): Promise<any>;
}
export declare class TapticEngineUnofficial extends Common {
    weakBoom(): Promise<any>;
    strongBoom(): Promise<any>;
    burst(): Promise<any>;
}
