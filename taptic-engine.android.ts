export * from "./taptic-engine.common";

import {Common, TapticEngineNotificationOptions, TapticEngineImpactOptions} from "./taptic-engine.common";

export class TapticEngine extends Common {

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

export class TapticEngineUnofficial extends Common {

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