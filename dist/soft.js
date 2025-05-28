  // Mobile sidebar toggle
  const hamburger = document.getElementById('hamburger');
  const sidebar = document.getElementById('sidebar');
  const closeSidebar = document.getElementById('closeSidebar');
  
  hamburger.addEventListener('click', () => {
    sidebar.classList.remove('-translate-x-full');
  });
  
  closeSidebar.addEventListener('click', () => {
    sidebar.classList.add('-translate-x-full');
  });
  
  // Services dropdown toggle in mobile sidebar
  const servicesDropdownBtn = document.getElementById('servicesDropdownBtn');
  const servicesDropdown = document.getElementById('servicesDropdown');
  
  servicesDropdownBtn.addEventListener('click', () => {
    servicesDropdown.classList.toggle('hidden');
    const icon = servicesDropdownBtn.querySelector('i');
    icon.classList.toggle('fa-chevron-down');
    icon.classList.toggle('fa-chevron-up');
  });

 document.addEventListener('DOMContentLoaded', function() {
  const cardsContainer = document.querySelector('.cards');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  const cards = document.querySelectorAll('.card1');
  
  let currentIndex = 0;
  const cardCount = cards.length;
  const cardWidth = cards[0].offsetWidth + 24; // width + gap
  
  // Clone first and last cards for seamless looping
  const firstCard = cards[0].cloneNode(true);
  const lastCard = cards[cardCount - 1].cloneNode(true);
  cardsContainer.appendChild(firstCard);
  cardsContainer.insertBefore(lastCard, cards[0]);
  
  // Update container width and position
  function updateSlider() {
    cardsContainer.style.width = `${(cardCount + 2) * cardWidth}px`;
    cardsContainer.style.transform = `translateX(${-cardWidth * (currentIndex + 1)}px)`;
  }
  
  // Move to previous card
  prevBtn.addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + cardCount) % cardCount;
    updateSlider();
  });
  
  // Move to next card
  nextBtn.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % cardCount;
    updateSlider();
  });
  
  // Initialize slider
  updateSlider();
  
  // Handle window resize
  window.addEventListener('resize', function() {
    const newCardWidth = cards[0].offsetWidth + 24;
    cardsContainer.style.transform = `translateX(${-newCardWidth * (currentIndex + 1)}px)`;
  });
});