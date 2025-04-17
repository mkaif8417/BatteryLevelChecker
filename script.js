navigator.getBattery().then(function (battery) {
    function updateLevel() {
      const level = Math.floor(battery.level * 100);
      const levelDiv = document.getElementById('level');
      levelDiv.style.width = level + '%';

      // Color coding
      if (level <= 20) {
        levelDiv.style.backgroundColor = 'red';
      } else if (level <= 50) {
        levelDiv.style.backgroundColor = 'orange';
      } else {
        levelDiv.style.backgroundColor = 'green';
      }

      // Icon display
      const icon = battery.charging ? '<i class="fas fa-bolt"></i>' : '';
      document.getElementById('info').innerHTML = `Battery Level: ${level}% ${icon}`;

      // Alerts
      if (level <= 20) {
        alert("Battery level is low. Please charge your device.");
      } else if (level === 100) {
        alert("Battery Fully Charged");
      }
    }

    // Initial call
    updateLevel();

    // Live updates
    battery.addEventListener('levelchange', updateLevel);
    battery.addEventListener('chargingchange', updateLevel);
  });
