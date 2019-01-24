<template>
  <Page>
    <ActionBar title="Feedback Plugin demo"></ActionBar>

    <StackLayout class="wrapper">

      <GridLayout columns="*, 96, 84" rows="auto">
        <Button col="0" text="notification: success" @tap="doNotificationSuccess"
                class="button button-notification-success"></Button>
        <Button col="1" text="warn" @tap="doNotificationWarning" class="button button-notification-warning"></Button>
        <Button col="2" text="error" @tap="doNotificationError" class="button button-notification-error"></Button>
      </GridLayout>

      <GridLayout columns="*, 96, 84" rows="auto">
        <Button col="0" text="impact: light" @tap="doImpactLight" class="button button-impact-light"></Button>
        <Button col="1" text="medium" @tap="doImpactMedium" class="button button-impact-medium"></Button>
        <Button col="2" text="heavy" @tap="doImpactHeavy" class="button button-impact-heavy"></Button>
      </GridLayout>

      <Button text="selection" @tap="doSelection" class="button button-selection"></Button>

      <StackLayout class="m-x-30">
        <Label text="Default Slider behavior"></Label>
        <Label :text="defaultSliderValue" class="slider-value"></Label>
        <Slider minValue="0" maxValue="10" @valueChange="onDefaultSliderValueChanged"></Slider>

        <Label text="Enhanced Slider behavior"></Label>
        <Label :text="enhancedSliderValue" class="slider-value"></Label>
        <Slider minValue="0" maxValue="10" @valueChange="onEnhancedSliderValueChanged"></Slider>
      </StackLayout>

    </StackLayout>
  </Page>
</template>

<script>
  import {
    TapticEngine,
    TapticEngineNotificationType,
    TapticEngineImpactStyle
  } from "nativescript-taptic-engine";

  const tapticEngine = new TapticEngine();

  let lastSliderValueFeedback = 0;

  export default {
    data() {
      return {
        defaultSliderValue: 0,
        enhancedSliderValue: 0
      }
    },

    methods: {

      onDefaultSliderValueChanged(e) {
        this.defaultSliderValue = Math.round(e.object.value);
      },

      onEnhancedSliderValueChanged(e) {
        // give feedback every increment
        const currentValue = Math.round(e.object.value);
        this.enhancedSliderValue = currentValue;
        if (currentValue !== lastSliderValueFeedback) {
          lastSliderValueFeedback = currentValue;
          this.doSelection();
        }
      },

      doNotificationSuccess() {
        tapticEngine.notification({type: TapticEngineNotificationType.SUCCESS})
            .then(() => console.log("Notification (success) done, if avail"))
            .catch(err => console.log("This is Android / iOS sim / iOS < 10, err: " + err))
      },

      doNotificationWarning() {
        tapticEngine.notification({type: TapticEngineNotificationType.WARNING})
            .then(() => console.log("Notification (warning) done, if avail"))
            .catch(err => console.log("This is Android / iOS sim / iOS < 10, err: " + err))
      },

      doNotificationError() {
        tapticEngine.notification({type: TapticEngineNotificationType.ERROR})
            .then(() => console.log("Notification (error) done, if avail"))
            .catch(err => console.log("This is Android / iOS sim / iOS < 10, err: " + err))
      },

      doImpactLight() {
        tapticEngine.impact({style: TapticEngineImpactStyle.LIGHT})
            .then(() => console.log("Impact (light) done, if avail"))
            .catch(err => console.log("This is Android / iOS sim / iOS < 10, err: " + err))
      },

      doImpactMedium() {
        tapticEngine.impact({style: TapticEngineImpactStyle.MEDIUM})
            .then(() => console.log("Impact (medium) done, if avail"))
            .catch(err => console.log("This is Android / iOS sim / iOS < 10, err: " + err))
      },

      doImpactHeavy() {
        tapticEngine.impact({style: TapticEngineImpactStyle.HEAVY})
            .then(() => console.log("Impact (heavy) done, if avail"))
            .catch(err => console.log("This is Android / iOS sim / iOS < 10, err: " + err))
      },

      doSelection() {
        tapticEngine.selection()
            .then(() => console.log("Selection done, if avail"))
            .catch(err => console.log("This is Android / iOS sim / iOS < 10, err: " + err))
      }

    }
  }
</script>

<style scoped>
  ActionBar {
    background-color: #53ba82;
    color: #ffffff;
  }

  .wrapper {
    margin: 12;
  }

  Label {
    font-size: 14;
    color: #333333;
    margin-top: 50;
  }

  Label.slider-value {
    margin-top: 12;
    color: #53ba82;
    text-align: center;
  }

  Slider {
    color: #53ba82;
    background-color: #53ba82;
  }

  Button {
    font-size: 14;
    border-radius: 3;
    border-width: 2;
    border-color: #63d4a5;
    color: #63d4a5;
    padding: 12 0;
    margin: 12 6;
  }
</style>
