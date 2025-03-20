// This script applies the card style to all card-like elements
export function applyCardStyles() {
  // Apply rounded corners to all cards, sections with bg colors, and interactive elements
  const cardElements = document.querySelectorAll('.card, section > div, .event-card, .core-value-card, .country-card, .nav-menu');
  cardElements.forEach(element => {
    element.classList.add('card');
  });
  
  // Apply rounded corners to all mobile menus
  const mobileMenus = document.querySelectorAll('.mobile-menu, [class*="mobile-nav"]');
  mobileMenus.forEach(element => {
    element.classList.add('card');
  });
}