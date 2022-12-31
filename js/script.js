

// TweenLite.set("#leavesContainer");

// const total = 60;
// const animate = (elm) => {
//   TweenMax.to(elm, R(6, 15), { y: h + 100, ease: Linear.easeNone, repeat: -1, delay: -15, opacity: 1 });
//   TweenMax.to(elm, R(4, 8), { x: '+=100', rotationZ: R(0, 180), repeat: -1, yoyo: true, ease: Sine.easeInOut, opacity: 0 },);
//   TweenMax.to(elm, R(2, 8), { rotationX: R(0, 360), rotationY: R(0, 360), repeat: -1, yoyo: true, ease: Sine.easeInOut, delay: -5, opacity: 0 }, "+=1");
// }

// const R = (min, max) => min + Math.random() * (max - min);
// const container = document.getElementById("leavesContainer"), w = window.innerWidth, h = window.innerHeight;
// for (i = 0; i < total; i++) {
//   const Div = document.createElement('div');
//   TweenLite.set(Div, { attr: { class: 'dot' }, x: R(0, `${w - 100}`), y: R(-200, -150), z: R(-200, 200) });
//   container.appendChild(Div);
//   animate(Div);
// }




$(document).on('click', function () {
  document.getElementById('my_audio').play();
});


// Set the date we're counting down to
const countDownDate = new Date('2023-01-02T06:00:00.000Z').getTime();

// Update the count down every 1 second
const x = setInterval(() => {

  // Get todays date and time
  const now = new Date().getTime();

  // Find the distance between now and the count down date
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  const pluralize = (time, interval) => (time > 1 ? `${interval}s` : interval);

  const counterHtml = `<div class="countdown">
    <div class="container-day">
      <h3 class="day">${days}</h3>
      <span>${pluralize(days, 'Day')}</span>
    </div>
    <div class="container-hour">
      <h3 class="hour">${hours}</h3>
      <span>${pluralize(hours, 'Hour')}</span>
    </div>
    <div class="container-minute">
      <h3 class="minute">${minutes}</h3>
      <span>${pluralize(minutes, 'Minute')}</span>
    </div>
    <div class="container-second">
      <h3 class="second">${seconds}</h3>
      <span>${pluralize(seconds, 'Second')}</span>
    </div>
  </div>`
  // Output the result in an element with id="demo"
  document.getElementById("time").innerHTML = counterHtml;

  // If the count down is over, write some text 
  if (distance <= 0) {
    clearInterval(x);
    document.getElementById("time").innerHTML = "بارك الله لكما و بارك عليكما و جمع بينكما في خير";
    document.getElementById("time").classList.add('arabic');
    document.getElementById("time").classList.add('dua');
  }
}, 1000);