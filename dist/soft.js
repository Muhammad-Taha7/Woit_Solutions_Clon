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

  


    const cardsContainer = document.querySelector('.cards');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  const cards = document.querySelectorAll('.card1');

  function getStep() {
    const style = getComputedStyle(cards[0]);
    const cardWidth = parseFloat(style.width);
    const containerStyle = getComputedStyle(cardsContainer);
    const gap = parseFloat(containerStyle.gap);
    return cardWidth + gap;
  }

  const step = getStep();
  const visibleCards = 2;

  // Start index at 1 because 0 is duplicate last card
  let currentIndex = 1;

  function updateSlider(withTransition = true) {
    if (withTransition) {
      cardsContainer.style.transition = 'transform 0.5s ease';
    } else {
      cardsContainer.style.transition = 'none';
    }
    const translateX = -currentIndex * step;
    cardsContainer.style.transform = `translateX(${translateX}px)`;
  }

  nextBtn.addEventListener('click', () => {
    if (currentIndex >= cards.length - visibleCards) return; // prevent extra clicks

    currentIndex++;
    updateSlider();

    // If we moved to duplicate first card (last element), reset to original first card (index=1) instantly
    if (currentIndex === cards.length - visibleCards) {
      setTimeout(() => {
        currentIndex = 1;
        updateSlider(false);
      }, 500); // after transition ends
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentIndex <= 0) return;

    currentIndex--;
    updateSlider();

    // If we moved to duplicate last card (first element), reset to original last card (index=cards.length - visibleCards -1)
    if (currentIndex === 0) {
      setTimeout(() => {
        currentIndex = cards.length - visibleCards - 1;
        updateSlider(false);
      }, 500);
    }
  });

  // Initialize slider position to 1 (original first card)
  updateSlider(false);