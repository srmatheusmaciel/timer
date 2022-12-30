function myTimer() {

  function createDateFromSeconds(seconds) {
    const date = new Date(seconds * 1000);
    return date.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    });
  }

  const clock = document.querySelector('.clock');

  let seconds = 0;
  let timer;

  function startClock() {
    timer = setInterval(() => {
      seconds++;
      clock.innerHTML = createDateFromSeconds(seconds);
    }, 1000);
  }

  document.addEventListener('click', (e) => {
    const element = e.target;

    if (element.classList.contains('reset')) {
      clock.classList.remove('paused');
      clearInterval(timer);
      clock.innerHTML = '00:00:00';
      seconds = 0;
    }

    if (element.classList.contains('start')) {
      clock.classList.remove('paused');
      clearInterval(timer);
      startClock();
    }

    if (element.classList.contains('pause')) {
      clearInterval(timer);
      clock.classList.add('paused');
    }
  });
}
myTimer();