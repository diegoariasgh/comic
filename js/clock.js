var clock = document.getElementById('clock');
var ctx = clock.getContext('2d');
var radius = clock.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.80;
var currentTime = {'hour': 6, 'minute': 30};
var scrollPos = 0;


function drawClock() {
    drawFace(ctx, radius);
}

function drawFace(ctx, radius) {
    var grad;

    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2*Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();

    grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
    grad.addColorStop(0, '#333');
    grad.addColorStop(0.5, 'white');
    grad.addColorStop(1, '#333');
    ctx.strokeStyle = grad;
    ctx.lineWidth = radius*0.1;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
    ctx.fillStyle = '#333';
    ctx.fill();
}


function drawHand(ctx, pos, length, width) {
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  ctx.moveTo(0, 0);
  ctx.rotate(pos);
  ctx.lineTo(0, -length);
  ctx.stroke();
  ctx.rotate(-pos);
}

function drawTime(ctx, radius, time) {
   //clear clock face
  ctx.save();
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, clock.width, clock.height);
  ctx.restore();

  hour = time.hour;
  minute = time.minute;

  hour = hour % 12;
  hour = (hour * Math.PI / 6) + (minute * Math.PI / (6 * 60));
  drawHand(ctx, hour, radius * 0.5, radius * 0.07);

  minute = (minute * Math.PI / 30);
  drawHand(ctx, minute, radius * 0.8, radius * 0.07);
}

function setTime(ctx, radius, final_time, completion_time) {
  var hour_diff = final_time.hour - currentTime.hour;
  var minute_diff = final_time.minute - currentTime.minute;
  var completion_ms = completion_time * 1000;
  var rotations = hour_diff * 60 + minute_diff;
  var interval = Math.abs(completion_ms / rotations);

  if (rotations < 0) {
    var backward = setInterval(backwardHelper, interval);
  } else {
    var forward = setInterval(forwardHelper, interval);
  }

  function forwardHelper() {
    if (currentTime.hour == final_time.hour
        && currentTime.minute == final_time.minute) {
        clearInterval(forward);
    } else {
      currentTime.minute += 1;
      if (currentTime.minute >= 60) {
        currentTime.minute = 0;
        currentTime.hour += 1;
      }
    }
    drawTime(ctx, radius, currentTime);
  }

  function backwardHelper() {
    if (currentTime.hour == final_time.hour
        && currentTime.minute == final_time.minute) {
        clearInterval(backward);
    } else {
      currentTime.minute -= 1;
      if (currentTime.minute <= 0) {
        currentTime.minute = 59;
        currentTime.hour -= 1;
      }
    }
    drawTime(ctx, radius, currentTime);
  }
}

drawTime(ctx, radius, currentTime);
setTime(ctx, radius, {'hour': 10, 'minute': 30}, 2);

//----------------------------------------------------------------------------




