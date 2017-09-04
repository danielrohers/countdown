# countdown

Simple countdown

```js
  var date = new Date();
  date.setMonth(date.getMonth() + 1);

  // start countdown with end time
  var countdown = new Countdown(date.getTime());
  
  // populate template DOM with ids: day, hour, minute, second, clock
  countdown.populate();
  
  // callback executed at each iteration
  countdown.time(function (days, hours, minutes, seconds) {
    ...
  });
  
  // callback executed at the end of countdown
  countdown.done = function () {
    ...
  };
```

Example template:
```html
  <div id="clock">
      <span id="day"></span>
      <span id="hour"></span>
      <span id="minute"></span>
      <span id="second"></span>
  </div>
```
