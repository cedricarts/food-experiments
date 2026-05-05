const searchInput = document.getElementById('recipeSearch');
const recipeCards = Array.from(document.querySelectorAll('.recipe-card'));

if (!searchInput) {
  throw new Error('Missing #recipeSearch input for homepage filtering.');
}

const filterRecipes = () => {
  const query = searchInput.value.trim().toLowerCase();

  recipeCards.forEach((card) => {
    const title = card.querySelector('h3')?.textContent.toLowerCase() ?? '';
    const description = card.querySelector('p')?.textContent.toLowerCase() ?? '';
    const tags = card.dataset.tags?.toLowerCase() ?? '';
    const keywords = card.dataset.search?.toLowerCase() ?? '';

    const searchable = `${title} ${description} ${tags} ${keywords}`;
    const match = searchable.includes(query);
    card.style.display = match ? '' : 'none';
  });
};

searchInput.addEventListener('input', filterRecipes);
