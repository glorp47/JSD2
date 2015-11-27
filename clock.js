function Clock () {
}

Clock.TICK = 5000;

Clock.prototype.printTime = function () {
  // Format the time in HH:MM:SS
};

Clock.prototype.run = function () {
  // 1. Set the currentTime.
  // 2. Call printTime.
  // 3. Schedule the tick interval.
};

Clock.prototype._tick = function () {
  // 1. Increment the currentTime.
  // 2. Call printTime.
};

var clock = new Clock();
clock.run();
