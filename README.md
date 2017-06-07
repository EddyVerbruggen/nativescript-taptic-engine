# NativeScript Taptic Engine plugin

[![Build Status][build-status]][build-url]
[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]
[![Twitter Follow][twitter-image]][twitter-url]

[build-status]:https://travis-ci.org/EddyVerbruggen/nativescript-taptic-engine.svg?branch=master
[build-url]:https://travis-ci.org/EddyVerbruggen/nativescript-taptic-engine
[npm-image]:http://img.shields.io/npm/v/nativescript-taptic-engine.svg
[npm-url]:https://npmjs.org/package/nativescript-taptic-engine
[downloads-image]:http://img.shields.io/npm/dm/nativescript-taptic-engine.svg
[twitter-image]:https://img.shields.io/twitter/follow/eddyverbruggen.svg?style=social&label=Follow%20me
[twitter-url]:https://twitter.com/eddyverbruggen

<img src="https://raw.githubusercontent.com/EddyVerbruggen/nativescript-taptic-engine/master/taptic-6s-plus.jpg" width="541px" height="350px"/>

## Supported platforms
* Official API: iPhone 7 / 7 Plus or newer
* Unofficial API: iPhone 6s / 6s Plus or newer
* Requires Xcode 8 to build

## Installation
From the command prompt go to your app's root folder and execute:

```
tns plugin add nativescript-taptic-engine
```

## Demo app
Want to dive in quickly? Check out [the demo app](demo)! Otherwise, continue reading.

You can run the demo app from the root of the project by typing `npm run demo.ios.device` and you'll see this:

<img src="https://raw.githubusercontent.com/EddyVerbruggen/nativescript-taptic-engine/master/demo-app.png" width="375px"/>


## Official API (requires at least iPhone 7)
It's recommended to use this API, but you're limited to iPhone 7 and higher.
As per [Apples guidelines](https://developer.apple.com/reference/uikit/uifeedbackgenerator)
there's no runtime way to determine if the device is capable of providing haptic feedback,
so the Promise can largely be ignored so I'm not even showing them here.

The API names are modeled after what [Apple has called them](https://developer.apple.com/reference/uikit/uifeedbackgenerator):

### `selection`
Use selection feedback generators to indicate a change in selection.

##### TypeScript
```js
// require the plugin
import {TapticEngine} from "nativescript-taptic-engine";

// instantiate the plugin
let tapticEngine = new TapticEngine();

tapticEngine.selection();
```

##### JavaScript
```js
// require the plugin
var TapticEngine = require("nativescript-taptic-engine").TapticEngine;

// instantiate the plugin
var tapticEngine = new TapticEngine();

tapticEngine.selection();
```

### `notification`
Use notification feedback generators to indicate successes, failures, and warnings.

There are 3 notification types: `TapticEngineNotificationType.SUCCESS` (default), `.WARNING`, and `.ERROR`.

##### TypeScript
```js
// require the plugin
import {TapticEngine, TapticEngineNotificationType} from "nativescript-taptic-engine";

// instantiate the plugin
let tapticEngine = new TapticEngine();

tapticEngine.notification({
  type: TapticEngineNotificationType.ERROR
});
```

### `impact`
Use impact feedback generators to indicate that an impact has occurred.
For example, you might trigger impact feedback when a user interface object
collides with something or snaps into place.

There are 3 impact styles: `TapticEngineImpactStyle.LIGHT`, `.MEDIUM` (default), and `.HEAVY`.

##### TypeScript
```js
// require the plugin
import {TapticEngine, TapticEngineImpactStyle} from "nativescript-taptic-engine";

// instantiate the plugin
let tapticEngine = new TapticEngine();

tapticEngine.impact({
  type: TapticEngineImpactStyle.HEAVY
});
```


## Unofficial API (requires at least iPhone 6s)
__BEWARE__ This uses an undocumented feature which may get your app rejected when reviewed by Apple.
[People have used this approach __without problems__ though.](http://stackoverflow.com/questions/32526868/taptic-in-ios-9)

### `weakBoom`
This triggers the same effect as the 'Peek' in 'Peek & Pop', a very brief vibration.

##### TypeScript
```js
// require the plugin
import {TapticEngineUnofficial} from "nativescript-taptic-engine";

// instantiate the plugin
let tapticEngineUnofficial = new TapticEngineUnofficial();

tapticEngineUnofficial.weakBoom().then(() => {
  // note that unsupported iOS devices like the simulator also end up here
}, (err) => {
  console.log("You're running on Android. Meh.");
});
```

##### JavaScript
```js
// require the plugin
var TapticEngineUnofficial = require("nativescript-taptic-engine").TapticEngineUnofficial;

// instantiate the plugin
var tapticEngineUnofficial = new TapticEngineUnofficial();

tapticEngineUnofficial.weakBoom().then(
  function() {
    // note that unsupported iOS devices like the simulator also end up here
    console.log("Boomed weakly, if available.");
  }, function () {
    console.log("You're running on Android. Meh.");
  }
);
```

### `strongBoom`
This triggers the 'Pop' effect of 'Peek & Pop', which is a bit more profound than the 'Peek' effect.

Codewise this is exactly the same as `weakBoom`, except for the function name of course.


### `burst`
This triggers the 'Nope' effect you get when fi. force touching a home icon which doesn't have any action. It's a short burst of 3-ish 'weak booms'.

Codewise this is exactly the same as `weakBoom` and `strongBoom`, except for the function name of course.

## Changelog
* 2.0.0  Added official API for iPhone 7. Moved the old API to TapticEngineUnofficial.*. Requires Xcode 8 to build.
* 1.0.0  Initial release, unofficial API only. Compatible with any Xcode version.
