const facts = [
    "Bananas are berries, but strawberries aren't.",
    "Octopuses have three hearts.",
    "Honey never spoils.",
    "A day on Venus is longer than a year on Venus.",
    "The Eiffel Tower can grow taller in summer."
  ];
  
  function flipCard() {
    const card = document.querySelector('.card');
    const backContent = document.getElementById('backContent');
  
    card.classList.toggle('flipped');
  
    const randomIndex = Math.floor(Math.random() * facts.length);
    backContent.textContent = facts[randomIndex];
  }
  