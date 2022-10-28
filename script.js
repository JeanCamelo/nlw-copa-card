let isIgnite = true;
function changeCard(event) {
  const clickCard = event.target;
  const bg = isIgnite ? "explorer" : "ignite";
  isIgnite = !isIgnite;
clickCard.style.backgroundImage = `url(./assets/bg-${bg}.svg)`
}
