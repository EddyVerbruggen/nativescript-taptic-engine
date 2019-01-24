export enum TapticEngineNotificationType {
  SUCCESS = 1,
  WARNING,
  ERROR
}

export enum TapticEngineImpactStyle {
  LIGHT = 1,
  MEDIUM,
  HEAVY
}

export interface TapticEngineNotificationOptions {
  /**
   * Pick a fitting TapticEngineNotificationType.
   * Default: TapticEngineNotificationType.SUCCESS
   */
  type?: TapticEngineNotificationType;
}

export interface TapticEngineImpactOptions {
  /**
   * Pick a fitting TapticEngineImpactStyle.
   * Default: TapticEngineImpactStyle.MEDIUM
   */
  style?: TapticEngineImpactStyle;
}

export declare class TapticEngine {
  notification(arg?: TapticEngineNotificationOptions): Promise<any>;

  impact(arg?: TapticEngineImpactOptions): Promise<any>;

  selection(): Promise<any>;
}

export declare class TapticEngineUnofficial {
  weakBoom(): Promise<any>;

  strongBoom(): Promise<any>;

  burst(): Promise<any>;
}
