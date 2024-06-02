  // Add interactivity on hover
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mouseover', () => {
      card.style.transform = 'scale(1.05)';
      card.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.15)';
    });
    card.addEventListener('mouseout', () => {
      card.style.transform = 'scale(1)';
      card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
  });