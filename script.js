const speed = document.querySelector('.speed');
const bar = document.querySelector('.speed-bar');
const video = document.querySelector('.flex');

speed.addEventListener('mousemove', function(e) {
  const y = e.pageY - this.offsetTop;
  const percent = y / this.offsetHeight;

  const min = 0.4;
  const max = 4;
  const step = 0.2; 

  let playbackRate;

  if (percent <= 0.5) {
    playbackRate = min + (percent / 0.5) * (1 - min);
  } else {
    playbackRate = 1 + ((percent - 0.5) / 0.5) * (max - 1);
  }

  playbackRate = Math.round(playbackRate / step) * step;

  const height = Math.round(percent * 100) + '%';
  bar.style.height = height;
  bar.textContent = playbackRate.toFixed(1) + 'x';

  video.playbackRate = playbackRate;
});

