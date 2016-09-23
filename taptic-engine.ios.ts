export * from "./taptic-engine.common";

import {Common, TapticEngineNotificationOptions, TapticEngineNotificationType, TapticEngineImpactOptions, TapticEngineImpactStyle} from "./taptic-engine.common";

declare var AudioServicesPlaySystemSound,
    UISelectionFeedbackGenerator,
    UIImpactFeedbackGenerator, UIImpactFeedbackStyleLight, UIImpactFeedbackStyleMedium, UIImpactFeedbackStyleHeavy,
    UINotificationFeedbackGenerator, UINotificationFeedbackTypeSuccess, UINotificationFeedbackTypeWarning, UINotificationFeedbackTypeError;

export class TapticEngine extends Common {

  public notification(arg?: TapticEngineNotificationOptions): Promise<any> {
    return new Promise((resolve, reject) => {
      let generator = UINotificationFeedbackGenerator.new();
      if (generator === null) {
        reject ("Unsupported Operating System");
        return;
      }

      let feedbackType = UINotificationFeedbackTypeSuccess;
      if (arg) {
        if (arg.type === TapticEngineNotificationType.WARNING) {
          feedbackType = UINotificationFeedbackTypeWarning;
        } else if (arg.type === TapticEngineNotificationType.ERROR) {
          feedbackType = UINotificationFeedbackTypeError;
        }
      }
      generator.notificationOccurred(feedbackType);
      resolve();
    });
  }

  public impact(arg?: TapticEngineImpactOptions): Promise<any> {
    return new Promise((resolve, reject) => {
      let feedbackStyle = UIImpactFeedbackStyleMedium;
      if (arg) {
        if (arg.style === TapticEngineImpactStyle.LIGHT) {
          feedbackStyle = UIImpactFeedbackStyleLight;
        } else if (arg.style === TapticEngineImpactStyle.HEAVY) {
          feedbackStyle = UIImpactFeedbackStyleHeavy;
        }
      }

      let generator = UIImpactFeedbackGenerator.alloc().initWithStyle(feedbackStyle);
      if (generator === null) {
        reject ("Unsupported Operating System");
        return;
      }

      generator.impactOccurred();
      resolve();
    });
  }

  public selection(): Promise<any> {
    return new Promise((resolve, reject) => {
      let generator = UISelectionFeedbackGenerator.new();
      if (generator === null) {
        reject ("Unsupported Operating System");
        return;
      }

      generator.selectionChanged();
      resolve();
    });
  }
}

export class TapticEngineUnofficial extends Common {
  public weakBoom(): Promise<any> {
    return new Promise((resolve, reject) => {
      AudioServicesPlaySystemSound(1519);
      resolve();
    });
  };

  public strongBoom(): Promise<any> {
    return new Promise((resolve, reject) => {
      AudioServicesPlaySystemSound(1520);
      resolve();
    });
  };

  public burst(): Promise<any> {
    return new Promise((resolve, reject) => {
      AudioServicesPlaySystemSound(1521);
      resolve();
    });
  }
}