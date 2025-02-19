document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-list a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', smoothScroll);
    });
  
    const searchBar = document.getElementById('search-bar');
    const searchButton = document.getElementById('search-button');
  
    searchButton.addEventListener('click', performSearch);
  
    // Adiciona um evento de escuta para o evento 'keyup'
    searchBar.addEventListener('keyup', function(event) {
      if (event.key === 'Enter') {
        performSearch();
      }
    });
  
    function performSearch() {
      const query = searchBar.value.toLowerCase();
      const gameCards = document.querySelectorAll('.game-card');
  
      gameCards.forEach(card => {
        const title = card.querySelector('.game-title').textContent.toLowerCase();
        const description = card.querySelector('.game-description').textContent.toLowerCase();
  
        if (title.includes(query) || description.includes(query)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    }
  
    function smoothScroll(event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetPosition = document.getElementById(targetId).offsetTop;
  
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }
  });
  
