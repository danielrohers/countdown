/*
 * countdown - v1.0.0
 * @danielrohers
*/
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(function () {
      return factory(root);
    });
  } else if (typeof exports === 'object') {
    module.exports = factory;
  } else {
    root.Countdown = factory(root);
  }
})(this, function (root) {

  'use strict';

  function Countdown(end_time) {
    if (typeof end_time !== 'number') {
      this.end_time = Date.parse(end_time)
    } else {
      this.end_time = end_time;
    }
  }

  function _time(end_time, cb) {
    var clear = setInterval(function () {
      var start = Date.parse(new Date());
      var diff = end_time - start;

      var days = Math.floor(diff / (1000 * 60 * 60 * 24));
      var hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      var minutes = Math.floor((diff / 1000 / 60) % 60);
      var seconds = Math.floor((diff / 1000) % 60);

      if (diff < 0) {
        clearInterval(clear);
      }

      cb(days, hours, minutes, seconds);
    }, 1000);
  }

  Countdown.prototype.time = function (cb) {
    _time(this.end_time, cb);
  };

  Countdown.prototype.populate = function () {
    var day = document.getElementById('day');
    var hour = document.getElementById('hour');
    var minute = document.getElementById('minute');
    var second = document.getElementById('second');
    var clock = document.getElementById('clock');
    clock.style.display = 'block';
    var self = this;
    _time(this.end_time, function (days, hours, minutes, seconds) {
      day.innerHTML = days;
      hour.innerHTML = hours;
      minute.innerHTML = minutes;
      second.innerHTML = seconds;
      if (days < 0) {
        clock.style.display = 'none';
        self.done();
      }
    });
  };

  Countdown.prototype.done = function () { };

  return Countdown;

});