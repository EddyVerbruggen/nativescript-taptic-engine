export * from "./taptic-engine.common";

import {
  TapticEngine as TapticEngineBase,
  TapticEngineImpactOptions,
  TapticEngineImpactStyle,
  TapticEngineNotificationOptions,
  TapticEngineNotificationType,
  TapticEngineUnofficial as TapticEngineUnofficialBase
} from "./taptic-engine.common";

declare const AudioServicesPlaySystemSound, UISelectionFeedbackGenerator,
    UIImpactFeedbackGenerator, UINotificationFeedbackGenerator;

export class TapticEngine implements TapticEngineBase {

  public notification(arg?: TapticEngineNotificationOptions): Promise<any> {
    return new Promise((resolve, reject) => {
      const generator = UINotificationFeedbackGenerator.new();
      if (generator === null) {
        reject("Unsupported Operating System");
        return;
      }

      let feedbackType = UINotificationFeedbackType.Success;
      if (arg) {
        if (arg.type === TapticEngineNotificationType.WARNING) {
          feedbackType = UINotificationFeedbackType.Warning;
        } else if (arg.type === TapticEngineNotificationType.ERROR) {
          feedbackType = UINotificationFeedbackType.Error;
        }
      }
      generator.notificationOccurred(feedbackType);
      resolve();
    });
  }

  public impact(arg?: TapticEngineImpactOptions): Promise<any> {
    return new Promise((resolve, reject) => {
      let feedbackStyle = UIImpactFeedbackStyle.Medium;
      if (arg) {
        if (arg.style === TapticEngineImpactStyle.LIGHT) {
          feedbackStyle = UIImpactFeedbackStyle.Light;
        } else if (arg.style === TapticEngineImpactStyle.HEAVY) {
          feedbackStyle = UIImpactFeedbackStyle.Heavy;
        }
      }

      const generator = UIImpactFeedbackGenerator.alloc().initWithStyle(feedbackStyle);
      if (generator === null) {
        reject("Unsupported Operating System");
        return;
      }

      generator.impactOccurred();
      resolve();
    });
  }

  public selection(): Promise<any> {
    return new Promise((resolve, reject) => {
      const generator = UISelectionFeedbackGenerator.new();
      if (generator === null) {
        reject("Unsupported Operating System");
        return;
      }

      generator.selectionChanged();
      resolve();
    });
  }
}

export class TapticEngineUnofficial implements TapticEngineUnofficialBase {
  public weakBoom(): Promise<any> {
    return new Promise((resolve, reject) => {
      AudioServicesPlaySystemSound(1519);
      resolve();
    });
  }

  public strongBoom(): Promise<any> {
    return new Promise((resolve, reject) => {
      AudioServicesPlaySystemSound(1520);
      resolve();
    });
  }

  public burst(): Promise<any> {
    return new Promise((resolve, reject) => {
      AudioServicesPlaySystemSound(1521);
      resolve();
    });
  }
}