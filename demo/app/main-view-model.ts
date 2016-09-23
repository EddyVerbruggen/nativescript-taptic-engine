import {Observable} from "data/observable";
import {TapticEngine, TapticEngineUnofficial, TapticEngineNotificationType, TapticEngineImpactStyle} from "nativescript-taptic-engine";

export class HelloWorldModel extends Observable {
  public message: string;
  private tapticEngine: TapticEngine;
  private tapticEngineUnofficial: TapticEngineUnofficial;

  constructor() {
    super();
    this.tapticEngine = new TapticEngine();
    this.tapticEngineUnofficial = new TapticEngineUnofficial();
  }

  public doNotificationSuccess() {
    this.tapticEngine.notification({
      type: TapticEngineNotificationType.SUCCESS
    }).then(() => {
      console.log("Notification (success) done, if avail");
    }, (err) => {
      console.log("This is Android / iOS sim / iOS < 10");
    });
  }

  public doNotificationWarning() {
    this.tapticEngine.notification({
      type: TapticEngineNotificationType.WARNING
    }).then(() => {
      console.log("Notification (warning) done, if avail");
    }, (err) => {
      console.log("This is Android / iOS sim / iOS < 10");
    });
  }

  public doNotificationError() {
    this.tapticEngine.notification({
      type: TapticEngineNotificationType.ERROR
    }).then(() => {
      console.log("Notification (error) done, if avail");
    }, (err) => {
      console.log("This is Android / iOS sim / iOS < 10");
    });
  }

  public doSelection() {
    this.tapticEngine.selection().then(() => {
      console.log("Selection done, if avail");
    }, (err) => {
      console.log("This is Android / iOS sim / iOS < 10");
    });
  }

  public doImpactLight() {
    this.tapticEngine.impact({
      style: TapticEngineImpactStyle.LIGHT
    }).then(() => {
      console.log("Impact (light) done, if avail");
    }, (err) => {
      console.log("This is Android / iOS sim / iOS < 10");
    });
  }

  public doImpactMedium() {
    this.tapticEngine.impact({
      style: TapticEngineImpactStyle.MEDIUM
    }).then(() => {
      console.log("Impact (medium) done, if avail");
    }, (err) => {
      console.log("This is Android / iOS sim / iOS < 10");
    });
  }

  public doImpactHeavy() {
    this.tapticEngine.impact({
      style: TapticEngineImpactStyle.HEAVY
    }).then(() => {
      console.log("Impact (heavy) done, if avail");
    }, (err) => {
      console.log("This is Android / iOS sim / iOS < 10");
    });
  }

  public doWeakBoom() {
    this.tapticEngineUnofficial.weakBoom().then(() => {
      console.log("Boomed weakly, if avail");
    }, (err) => {
      console.log("U on Android? :)");
    });
  }

  public doStrongBoom() {
    this.tapticEngineUnofficial.strongBoom().then(() => {
      console.log("Boomed strongly, if avail");
    }, (err) => {
      console.log("U on Android? :)");
    });
  }

  public doBurst() {
    this.tapticEngineUnofficial.burst().then(() => {
      console.log("Bursted, if avail");
    }, (err) => {
      console.log("U on Android? :)");
    });
  }

}