document.getElementById("yes").addEventListener("click", function() {
  const response = document.getElementById("response");
  const heart = document.getElementById("heart");

  response.style.visibility = "visible";
  response.style.opacity = "1";
  response.innerHTML = "Yeee nii coklatnya! 🍫";

  heart.style.visibility = "visible";
  heart.style.opacity = "1";
  heart.style.animation = "float 2s ease-in-out infinite";

  createConfetti();
});

document.getElementById("no").addEventListener("mouseover", function() {
  const button = this;
  const maxX = window.innerWidth - button.offsetWidth;
  const maxY = window.innerHeight - button.offsetHeight;

  const newX = Math.random() * maxX;
  const newY = Math.random() * maxY;

  button.style.position = "fixed";
  button.style.left = newX + "px";
  button.style.top = newY + "px";
});

function createConfetti() {
  const images = [
    '6156630422914712379.jpg',
    '6156630422914712380.jpg',
    '6156630422914712381.jpg',
    '6156630422914712382.jpg',
    '6156630422914712383.jpg',
    '6156630422914712384.jpg',
    '6156630422914712385.jpg',
    '6156630422914712386.jpg',
    '6156630422914712387.jpg',
    '6156630422914712388.jpg'
  ];
  
  function createParticle() {
    // Create photo element
    const photo = document.createElement('img');
    photo.src = 'assets/' + images[Math.floor(Math.random() * images.length)];
    photo.style.position = 'fixed';
    photo.style.width = '50px';
    photo.style.height = '50px';
    photo.style.left = Math.random() * window.innerWidth + 'px';
    photo.style.top = '-50px';
    photo.style.objectFit = 'cover';
    photo.classList.add('heart-shape');
    photo.style.animation = `fall ${Math.random() * 3 + 2}s linear`;
    photo.style.transform = `scale(${Math.random() * 0.5 + 0.5})`;
    document.body.appendChild(photo);

    // Create heart emoji
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'fixed';
    heart.style.fontSize = '30px';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = '-30px';
    heart.style.animation = `fall ${Math.random() * 3 + 2}s linear`;
    document.body.appendChild(heart);

    setTimeout(() => {
      photo.remove();
      heart.remove();
    }, 5000);
  }

  // Initial particles
  for (let i = 0; i < 25; i++) {
    createParticle();
  }

  // Continue creating particles
  setInterval(createParticle, 200);
}

const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  @keyframes fall {
    to {
      transform: translateY(${window.innerHeight}px) rotate(360deg);
      opacity: 0;
    }
  }
`, styleSheet.cssRules.length);
