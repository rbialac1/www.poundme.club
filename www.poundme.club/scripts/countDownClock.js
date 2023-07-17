const countDownClock = (number = 100, format = 'seconds') => {
  
    var destinationDate = new Date('March 31, 2023 23:59:59');

    const d = document;
    const daysElement = d.querySelector('.days');
    const hoursElement = d.querySelector('.hours');
    const minutesElement = d.querySelector('.minutes');
    const secondsElement = d.querySelector('.seconds');
    let countdown;
    convertFormat(format);
        
    function convertFormat(format) {
      switch(format) {
        case 'seconds':
          return timer(number);
        case 'minutes':
          return timer(number * 60);
          case 'hours':
          return timer(number * 60 * 60);
        case 'days':
          return timer(number * 60 * 60 * 24);             
      }
    }
  
    function timer(seconds) {
      const now = Date.now();
  
      countdown = setInterval(() => {
        const secondsLeft = Math.round((destinationDate - Date.now()) / 1000);
  
        if(secondsLeft <= 0) {
          clearInterval(countdown);
          return;
        };
  
        displayTimeLeft(secondsLeft);
  
      },1000);
    }
  
    function displayTimeLeft(seconds) {
      daysElement.textContent = Math.floor(seconds / 86400);
      hoursElement.textContent = Math.floor((seconds % 86400) / 3600);
      minutesElement.textContent = Math.floor((seconds % 86400) % 3600 / 60);
      secondsElement.textContent = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
    }
  }
  
  
  /*
    start countdown
    enter number and format
    days, hours, minutes or seconds
  */
    countDownClock();