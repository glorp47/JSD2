function Clock () {
}

var TICK = 1000;

Clock.prototype.printTime = function (time) {
  // Format the time in HH:MM:SS
  var hours = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();
  console.log(hours + ":" + minutes + ":" + seconds );
};

Clock.prototype.run = function () {
  // 1. Set the currentTime.
  var time = new Date();
  // 2. Call printTime.
 this.printTime(time);
  // 3. Schedule the tick interval.

  var clockTick = this._tick.bind(this, time);

  setInterval(clockTick, TICK);
};

Clock.prototype._tick = function (time) {
  // 1. Increment the currentTime.
  time.setMilliseconds(time.getMilliseconds() + TICK);
  // 2. Call printTime.
  this.printTime(time);
};

var clock = new Clock();
clock.run();
