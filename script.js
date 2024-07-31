// Initialize variables
let score = parseInt(localStorage.getItem('score')) || 0;
let autoClickerLevel = parseInt(localStorage.getItem('autoClickerLevel')) || 0;
let multiplierLevel = parseInt(localStorage.getItem('multiplierLevel')) || 0;
let clickPowerLevel = parseInt(localStorage.getItem('clickPowerLevel')) || 0;
let magicPowerLevel = parseInt(localStorage.getItem('magicPowerLevel')) || 0;
let specialItems = parseInt(localStorage.getItem('specialItems')) || 0;
let doubleScoreBoost = JSON.parse(localStorage.getItem('doubleScoreBoost')) || false;
let autoClickerSpeedBoost = JSON.parse(localStorage.getItem('autoClickerSpeedBoost')) || false;
let clickSpeedBoost = JSON.parse(localStorage.getItem('clickSpeedBoost')) || false;
let achievementPoints = parseInt(localStorage.getItem('achievementPoints')) || 0;

// Costs
const upgradeCost = 10;
const autoClickerCost = 50;
const multiplierCost = 100;
const clickPowerCost = 20;
const magicWandCost = 400;
const magicPotionCost = 250;
const specialItemCost = 500;
const newItemCost = 600;
const achievementUpgradeCost = 1000;

// UI elements
const scoreElem = document.getElementById('score');
const clicksPerSecondElem = document.getElementById('clicks-per-second');
const upgradeLevelElem = document.getElementById('upgrade-level');
const upgradeCostElem = document.getElementById('upgrade-cost');
const autoClickerLevelElem = document.getElementById('auto-clicker-level');
const autoClickerCostElem = document.getElementById('auto-clicker-cost');
const multiplierLevelElem = document.getElementById('multiplier-level');
const multiplierCostElem = document.getElementById('multiplier-cost');
const clickPowerLevelElem = document.getElementById('click-power-level');
const clickPowerCostElem = document.getElementById('click-power-cost');
const magicPowerLevelElem = document.getElementById('magic-power-level');
const magicWandCostElem = document.getElementById('magic-wand-cost');
const specialItemsElem = document.getElementById('special-items');
const specialItemCostElem = document.getElementById('special-item-cost');
const magicPotionCostElem = document.getElementById('magic-potion-cost');
const newItemCostElem = document.getElementById('new-item-cost');
const achievementPointsElem = document.getElementById('achievement-points');
const achievementUpgradeCostElem = document.getElementById('achievement-upgrade-cost');
const achievementMsg = document.getElementById('achievement-msg');
const missionMsg = document.getElementById('mission-msg');

// Update UI
function updateUI() {
    scoreElem.textContent = score;
    clicksPerSecondElem.textContent = autoClickerLevel + 1;
    upgradeLevelElem.textContent = autoClickerLevel;
    upgradeCostElem.textContent = upgradeCost;
    autoClickerLevelElem.textContent = autoClickerLevel;
    autoClickerCostElem.textContent = autoClickerCost * (autoClickerLevel + 1);
    multiplierLevelElem.textContent = multiplierLevel;
    multiplierCostElem.textContent = multiplierCost * (multiplierLevel + 1);
    clickPowerLevelElem.textContent = clickPowerLevel;
    clickPowerCostElem.textContent = clickPowerCost * (clickPowerLevel + 1);
    magicPowerLevelElem.textContent = magicPowerLevel;
    magicWandCostElem.textContent = magicWandCost;
    specialItemsElem.textContent = specialItems;
    specialItemCostElem.textContent = specialItemCost;
    magicPotionCostElem.textContent = magicPotionCost;
    newItemCostElem.textContent = newItemCost;
    achievementPointsElem.textContent = achievementPoints;
    achievementUpgradeCostElem.textContent = achievementUpgradeCost;
    achievementMsg.textContent = `Achievements: ${achievementPoints}`;
    missionMsg.textContent = `Missions: ${score}`;
}

// Click handler
document.getElementById('clicker').addEventListener('click', () => {
    let points = 1;
    if (clickSpeedBoost) {
        points *= 1.5; // Increase points with active boost
    }
    score += points * (doubleScoreBoost ? 2 : 1); // Double points with active boost
    localStorage.setItem('score', score);
    updateUI();
});

// Reset handler
document.getElementById('reset').addEventListener('click', () => {
    if (confirm('Are you sure you want to reset your progress?')) {
        score = 0;
        autoClickerLevel = 0;
        multiplierLevel = 0;
        clickPowerLevel = 0;
        magicPowerLevel = 0;
        specialItems = 0;
        doubleScoreBoost = false;
        autoClickerSpeedBoost = false;
        clickSpeedBoost = false;
        achievementPoints = 0;
        localStorage.clear();
        updateUI();
    }
});

// Upgrade handler
document.getElementById('upgrade').addEventListener('click', () => {
    if (score >= upgradeCost) {
        score -= upgradeCost;
        autoClickerLevel++;
        localStorage.setItem('score', score);
        localStorage.setItem('autoClickerLevel', autoClickerLevel);
        updateUI();
    } else {
        alert('Not enough points to buy upgrade!');
    }
});

// Auto-clicker handler
document.getElementById('buy-auto-clicker').addEventListener('click', () => {
    const cost = autoClickerCost * (autoClickerLevel + 1);
    if (score >= cost) {
        score -= cost;
        autoClickerLevel++;
        localStorage.setItem('score', score);
        localStorage.setItem('autoClickerLevel', autoClickerLevel);
        updateUI();
    } else {
        alert('Not enough points to buy auto-clicker!');
    }
});

// Multiplier handler
document.getElementById('buy-multiplier').addEventListener('click', () => {
    const cost = multiplierCost * (multiplierLevel + 1);
    if (score >= cost) {
        score -= cost;
        multiplierLevel++;
        localStorage.setItem('score', score);
        localStorage.setItem('multiplierLevel', multiplierLevel);
        updateUI();
    } else {
        alert('Not enough points to buy multiplier!');
    }
});

// Click power handler
document.getElementById('buy-click-power').addEventListener('click', () => {
    const cost = clickPowerCost * (clickPowerLevel + 1);
    if (score >= cost) {
        score -= cost;
        clickPowerLevel++;
        localStorage.setItem('score', score);
        localStorage.setItem('clickPowerLevel', clickPowerLevel);
        updateUI();
    } else {
        alert('Not enough points to buy click power!');
    }
});

// Magic wand handler
document.getElementById('buy-magic-wand').addEventListener('click', () => {
    const cost = magicWandCost;
    if (score >= cost) {
        score -= cost;
        magicPowerLevel++;
        localStorage.setItem('score', score);
        localStorage.setItem('magicPowerLevel', magicPowerLevel);
        updateUI();
    } else {
        alert('Not enough points to buy magic wand!');
    }
});

// Magic potion handler
document.getElementById('buy-magic-potion').addEventListener('click', () => {
    const cost = magicPotionCost;
    if (score >= cost) {
        score -= cost;
        magicPowerLevel++;
        localStorage.setItem('score', score);
        localStorage.setItem('magicPowerLevel', magicPowerLevel);
        updateUI();
    } else {
        alert('Not enough points to buy magic potion!');
    }
});

// Special item handler
document.getElementById('buy-special-item').addEventListener('click', () => {
    const cost = specialItemCost;
    if (score >= cost) {
        score -= cost;
        specialItems++;
        localStorage.setItem('score', score);
        localStorage.setItem('specialItems', specialItems);
        updateUI();
    } else {
        alert('Not enough points to buy special item!');
    }
});

// New item handler
document.getElementById('buy-new-item').addEventListener('click', () => {
    const cost = newItemCost;
    if (score >= cost) {
        score -= cost;
        localStorage.setItem('score', score);
        updateUI();
    } else {
        alert('Not enough points to buy new item!');
    }
});

// Double score boost handler
document.getElementById('buy-double-score').addEventListener('click', () => {
    const cost = 200;
    if (score >= cost) {
        score -= cost;
        doubleScoreBoost = true;
        localStorage.setItem('score', score);
        localStorage.setItem('doubleScoreBoost', doubleScoreBoost);
        updateUI();
    } else {
        alert('Not enough points to buy double score boost!');
    }
});

// Auto-clicker speed boost handler
document.getElementById('buy-auto-clicker-speed').addEventListener('click', () => {
    const cost = 300;
    if (score >= cost) {
        score -= cost;
        autoClickerSpeedBoost = true;
        localStorage.setItem('score', score);
        localStorage.setItem('autoClickerSpeedBoost', autoClickerSpeedBoost);
        updateUI();
    } else {
        alert('Not enough points to buy auto-clicker speed boost!');
    }
});

// Click speed boost handler
document.getElementById('buy-click-speed').addEventListener('click', () => {
    const cost = 150;
    if (score >= cost) {
        score -= cost;
        clickSpeedBoost = true;
        localStorage.setItem('score', score);
        localStorage.setItem('clickSpeedBoost', clickSpeedBoost);
        updateUI();
    } else {
        alert('Not enough points to buy click speed boost!');
    }
});

// Achievement upgrade handler
document.getElementById('buy-achievement-upgrade').addEventListener('click', () => {
    const cost = achievementUpgradeCost;
    if (score >= cost) {
        score -= cost;
        achievementPoints++;
        localStorage.setItem('score', score);
        localStorage.setItem('achievementPoints', achievementPoints);
        updateUI();
    } else {
        alert('Not enough points to buy achievement upgrade!');
    }
});

// Shop tab switch handler
document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        document.querySelectorAll('.shop-items').forEach(item => {
            item.style.display = 'none';
        });
        document.getElementById(`shop-${category}`).style.display = 'block';
    });
});

// Auto-click function
function autoClick() {
    if (autoClickerLevel > 0) {
        let autoClickPoints = autoClickerLevel * (doubleScoreBoost ? 2 : 1);
        if (autoClickerSpeedBoost) {
            autoClickPoints *= 2; // Increase points with active speed boost
        }
        score += autoClickPoints;
        localStorage.setItem('score', score);
        updateUI();
    }
}

// Auto-click interval
setInterval(autoClick, autoClickerSpeedBoost ? 500 : 1000);

// Update UI on page load
updateUI();
