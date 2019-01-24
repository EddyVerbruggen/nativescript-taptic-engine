export * from "./taptic-engine.common";

import {
  TapticEngine as TapticEngineBase,
  TapticEngineImpactOptions,
  TapticEngineNotificationOptions,
  TapticEngineUnofficial as TapticEngineUnofficialBase
} from "./taptic-engine.common";

export class TapticEngine implements TapticEngineBase {

  public notification(arg?: TapticEngineNotificationOptions): Promise<any> {
    return new Promise((resolve, reject) => {
      reject();
    });
  }

  public impact(arg?: TapticEngineImpactOptions): Promise<any> {
    return new Promise((resolve, reject) => {
      reject();
    });
  }

  public selection(): Promise<any> {
    return new Promise((resolve, reject) => {
      reject();
    });
  }
}

export class TapticEngineUnofficial implements TapticEngineUnofficialBase {

  public weakBoom(): Promise<any> {
    return new Promise((resolve, reject) => {
      reject();
    });
  }

  public strongBoom(): Promise<any> {
    return new Promise((resolve, reject) => {
      reject();
    });
  }

  public burst(): Promise<any> {
    return new Promise((resolve, reject) => {
      reject();
    });
  }
}