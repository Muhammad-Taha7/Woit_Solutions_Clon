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