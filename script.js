document.addEventListener('DOMContentLoaded', function() {
  const surpriseButton = document.getElementById('surpriseButton');
  const surprise = document.getElementById('surprise');
  const heading = document.querySelector('h1');
  const heartEmoji = document.getElementById('heartEmoji');
  const loveSong = document.getElementById('loveSong');
  const finalMessage = document.createElement('h2');
  const countdownDisplay = document.getElementById('countdownDisplay');
  const heartPositions = [
      { top: '0%', left: '50%', transform: 'translate(-50%, 0)' },  // Center top
      { top: '0%', left: '0%', transform: 'translate(0, 0)' },      // Top left
      { top: '0%', right: '0%', transform: 'translate(0, 0)' },     // Top right
      { top: '50%', left: '0%', transform: 'translate(0, -50%)' },  // Middle left
      { top: '50%', right: '0%', transform: 'translate(0, -50%)' }, // Middle right
      { bottom: '0%', left: '50%', transform: 'translate(-50%, 0)' }, // Bottom center
      { bottom: '0%', left: '0%', transform: 'translate(0, 0)' },     // Bottom left
      { bottom: '0%', right: '0%', transform: 'translate(0, 0)' },    // Bottom right
      { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' } // Center
  ];

  let countdown;
  let isMoving = false;

  surpriseButton.addEventListener('click', function() {
      surpriseButton.style.display = 'none';
      heading.style.display = 'none';
      heartEmoji.style.display = 'block';
      surprise.style.display = 'block';
      loveSong.play();
      countdownDisplay.style.display = 'block';

      heartEmoji.style.position = 'absolute';
      heartEmoji.style.transition = 'all 0.5s ease';

      countdown = 98; 
      isMoving = true;

      // Display both messages
      const message1 = document.createElement('h2');
      message1.textContent = 'You make my heart race faster than you can catch it! 💓';
      surprise.appendChild(message1);

      const message2 = document.createElement('h2');
      message2.textContent = 'Catch my heart if you can!';
      surprise.appendChild(message2);

      // Start countdown
      const countdownInterval = setInterval(() => {
          countdownDisplay.textContent = `Time left: ${Math.floor(countdown / 60)}:${String(countdown % 60).padStart(2, '0')}`;
          if (countdown <= 0) {
              clearInterval(countdownInterval);
              heartEmoji.style.top = '0';
              heartEmoji.style.left = '50%';
              heartEmoji.style.transform = 'translate(-50%, 0)';

              // Hide both messages and countdown
              message1.style.display = 'none';
              message2.style.display = 'none';
              countdownDisplay.style.display = 'none';

              // Show final message
              finalMessage.textContent = 'Baby, my heart is all yours; you don’t need to catch it because Dhun Laagi Taari Dun Laagi.';
              surprise.appendChild(finalMessage);
              finalMessage.classList.add('fade-in');

              isMoving = false;
              loveSong.pause();
          }
          countdown--;
      }, 1000); // Countdown every second

      // Add click event to the heart emoji for moving it
      heartEmoji.addEventListener('click', function() {
          if (isMoving) {
              const randomPosition = heartPositions[Math.floor(Math.random() * heartPositions.length)];
              heartEmoji.style.top = randomPosition.top;
              heartEmoji.style.left = randomPosition.left;
              heartEmoji.style.transform = randomPosition.transform;
          }
      });
  });
});
