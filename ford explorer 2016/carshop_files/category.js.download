function filterCategory(category) {
    var itemCards = document.querySelectorAll('.item-card');
    var priceMin = parseFloat(document.getElementById('priceMin').value);
    var priceMax = parseFloat(document.getElementById('priceMax').value);

    itemCards.forEach(function(card) {
      var cardCategory = card.classList[1];
      var cardPrice = parseFloat(card.querySelector('.item-price').textContent.replace('$', ''));

      var categoryMatch = category === 'all' || cardCategory === category;
      var priceMatch = isNaN(priceMin) || isNaN(priceMax) || (cardPrice >= priceMin && cardPrice <= priceMax);

      if (categoryMatch && priceMatch) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }

  function applyFilters() {
    var activeTag = document.querySelector('.filter-tag.active');
    var activeCategory = activeTag ? activeTag.textContent.toLowerCase() : 'all';

    filterCategory(activeCategory);
  }