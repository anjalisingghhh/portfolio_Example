document.addEventListener('DOMContentLoaded', () => {
    const timeElement = document.createElement('p');
    const aboutSection = document.querySelector('#about');
    
    // Dynamic counter
    const startTime = new Date('2020-01-01T00:00:00');
    const updateTime = () => {
      const now = new Date();
      const elapsedSeconds = Math.floor((now - startTime) / 1000);
      timeElement.textContent = `I've been coding for ${elapsedSeconds} seconds!`;
    };
  
    setInterval(updateTime, 1000);
    aboutSection.appendChild(timeElement);
  });
  