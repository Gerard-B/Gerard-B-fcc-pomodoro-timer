// See TO-DO's in "index.html"
$(document).ready(function () {
  //set default session on 25 from html
  var sessioncount = parseInt($("#session-length").html());
  var sessioncountseconds = sessioncount * 60;
  var session = parseInt($("#session-length").html()) * 60;
  //set default break on 5 from html
  var breakcount = parseInt($("#break-length").html());
  var breakcountseconds = breakcount * 60;
  var pause = true;
  var mode = "Session";
  var seconds;
  var interval;

  console.log("page refreshed!");

  function timeKeeping() {
    console.log("timeKeeping function executes");
    session = parseInt($("#session-length").html()) * 60;
    sessioncountseconds = parseInt($("#session-length").html()) * 60;
    breakcount = parseInt($("#break-length").html());
    breakcountseconds = parseInt($("#break-length").html()) * 60;
    $("#timer-label").html(mode);
  }

  function secondsTimeSpanToMS(seconds) {
    console.log("time-converter function executing");
    var minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;
    return (
      (minutes < 10 ? "0" + minutes : minutes) +
      ":" +
      (seconds < 10 ? "0" + seconds : seconds)
    );
  }

  $("#test-settings").click(function () {
    $("#time-left").effect("highlight", { color: "rgba(0, 0, 0, 0.25)" }, 2500);
    $("#session-length").effect(
      "highlight",
      { color: "rgba(0, 0, 0, 0.25)" },
      2500
    );
    $("#break-length").effect(
      "highlight",
      { color: "rgba(0, 0, 0, 0.25)" },
      2500
    );

    sessioncount = 1;
    sessioncountseconds = sessioncount;
    $("#session-length").html(sessioncount + " min");
    breakcountseconds = breakcount;
    $("#break-length").html(sessioncount + " min");
    $("#time-left").html(sessioncount);
    timeKeeping();
  });

  $("#time-left").html(sessioncount + ":" + "00");

  $("#break-decrement").click(function () {
    if (breakcount > 1) {
      breakcount--;
      $("#break-length").html(breakcount);
      console.log("decreasing break to " + breakcount);
      timeKeeping();
    } else {
      console.log("break already minimum of 0");
      return;
    }
  });

  $("#break-increment").click(function () {
    if (breakcount < 60) {
      breakcount++;
      $("#break-length").html(breakcount);
      console.log("increasing break to " + breakcount);
      timeKeeping();
    } else {
      console.log("break already maximum of 60");
      return;
    }
  });

  $("#session-decrement").click(function () {
    if (sessioncount > 1) {
      sessioncount--;
      session = sessioncount * 60;
      $("#session-length").html(sessioncount);
      console.log("decreasing session to " + sessioncount);
      $("#time-left").html(sessioncount + ":" + "00");
      //why is there no timeKeeping function here?
    } else {
      console.log("session already minimum of 1");
      return;
    }
  });

  $("#session-increment").click(function () {
    if (sessioncount < 60) {
      sessioncount++;
      session = sessioncount * 60;

      $("#session-length").html(sessioncount);
      console.log("increasing session to " + sessioncount);
      $("#time-left").html(sessioncount + ":" + "00");
      //why is there no timeKeeping function here?
    } else {
      console.log("session already maximum of 60");
      return;
    }
  });

  $("#start_stop").click(function () {
    $("#session-decrement").hide();
    $("#session-increment").hide();
    $("#break-decrement").hide();
    $("#break-increment").hide();

    if (pause) {
      console.log("start stop -pause=true- executed");
      pause = false;
      timer(session);
      $("#start_stop").html("Pause");
      // $("#timer-label").html("Session begun");
    } else {
      console.log("start stop -pause=false- executed");
      clearInterval(interval);
      session = seconds;
      pause = true;
      $("#start_stop").html("Start");
      console.log("timer paused. Sessioncount: " + sessioncount);
    }
  });

  $("#reset").click(function () {
    clearInterval(interval);
    console.log("resetting values");
    mode = "Session";
    pause = true;
    sessioncount = 25;
    console.log("sessioncount is: " + sessioncount);
    $("#session-length").html(sessioncount);
    sessioncountseconds = sessioncount * 60;
    console.log("sessioncountseconds is: " + sessioncountseconds);
    seconds = sessioncount * 60;
    console.log("seconds after reset " + seconds);
    $("#break-length").html((breakcount = 5));
    breakcountseconds = breakcount * 60;
    console.log(breakcount);
    $("#time-left").html(sessioncount + ":" + "00");
    $("#timer-label").html("Session");
    $("#start_stop").html("Start");
    $("#beep")[0].currentTime = 0;
    $("#beep")[0].pause();
    timeKeeping();
    $("#session-decrement").show();
    $("#session-increment").show();
    $("#break-decrement").show();
    $("#break-increment").show();
  });

  function timer(time) {
    seconds = time;
    console.log(
      "timer thinks 1. seconds and 2. session: " +
        seconds +
        " Sessioncount " +
        sessioncount
    );
    interval = setInterval(function () {
      if (seconds > 0) {
        seconds--;
      }
      $("#time-left").html(secondsTimeSpanToMS(seconds));
      $(".maintimer").css("background-color", "rgba(0, 0, 0, 0.15)");
      //old one: $("#time-left").html(Math.floor(seconds / 60) + ":" + (seconds % 60));
      console.log("timer is going! " + seconds);

      if (seconds === 0) {
        $(".maintimer").css("background-color", "rgba(255, 15, 15, 0.25)");
        $("#beep")[0].play();
        clearInterval(interval);
        console.log(
          "timer reached zero, clearing interval & playing beep sound"
        );
        if (mode === "Session") {
          console.log("mode is changing from session to break");
          timer(breakcountseconds + 1);
          mode = "Break";
          timeKeeping();
        } else {
          console.log("mode is changing from break to session");
          timer(sessioncountseconds + 1);
          mode = "Session";
          timeKeeping();
        }
      }
    }, 1000);
  }
});
