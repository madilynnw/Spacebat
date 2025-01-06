// Ship class
class Ship {
  constructor(name, hull, firepower) {
    this.name = name;
    this.hull = hull;
    this.firepower = firepower;
  }

  takeDamage(damage) {
    this.hull = Math.max(0, this.hull - damage);
  }
}

// Create ships
const ussAssembly = new Ship("USS Assembly", 100, 30);
const alienInvader = new Ship("Alien Invader", 80, 20);

// Update the ship status on the page
function updateShipStatus() {
  document.getElementById("uss-hull").textContent = ussAssembly.hull;
  document.getElementById("alien-hull").textContent = alienInvader.hull;
}

// Attack action
document.getElementById("attack-btn").addEventListener("click", () => {
  if (alienInvader.hull > 0) {
    alienInvader.takeDamage(ussAssembly.firepower);
    updateShipStatus();
    document.getElementById(
      "battle-result"
    ).textContent = `${ussAssembly.name} attacks!`;

    if (alienInvader.hull === 0) {
      document.getElementById(
        "battle-result"
      ).textContent += ` ${alienInvader.name} has been defeated!`;
    }
  }
});
