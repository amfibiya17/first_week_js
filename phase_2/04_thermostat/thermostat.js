class Thermostat {

  constructor() {
    this.temperature = 20;
    this.powerSavingMode = true;
  }

  getTemperature() {
    return this.temperature;
  }

  up() {
    if (this.powerSavingMode === true && this.temperature < 25) {
      return this.temperature += 1;
    } else if (this.powerSavingMode === false && this.temperature < 32) {
      return this.temperature += 1;
    }
  }

  down() {
    if (this.temperature > 10) {
      return this.temperature -= 1;
    };
  }

  reset() {
    return this.temperature = 20
  }

  placePowerSavingMode(check) {
    return this.powerSavingMode = check;
  }

  currentEnergyUsage() {
    if (this.temperature < 18) {
      return 'low-usage';
    } else if (this.temperature <= 25) {
      return 'medium-usage';
    } else {
      return 'high-usage';
    }
  }

}

const thermostat = new Thermostat();

console.log(thermostat.getTemperature()); // <- 20
console.log(thermostat.up()); // <- 21
console.log(thermostat.up()); // <- 22
console.log(thermostat.getTemperature()); // <- 22
console.log(thermostat.down()); // <- 21
console.log(thermostat.getTemperature()); // <- 21
console.log(thermostat.placePowerSavingMode(true));

for (let i = 0 ; i < 10 ; i++) {
  thermostat.up();
}

console.log(thermostat.getTemperature()); // <- 25
console.log(thermostat.placePowerSavingMode(false)); 
console.log(thermostat.up()); // <- 26
console.log(thermostat.getTemperature()); // <- 26
console.log(thermostat.reset()); // <- 20
console.log(thermostat.getTemperature()); // <- 20

module.exports = Thermostat;
