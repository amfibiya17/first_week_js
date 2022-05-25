const Thermostat = require('./thermostat');

describe('Thermostat', () => {

  describe('getTemperature', () => {
    it('return default temperature of 20 degrees', () => {
      let thermostat = new Thermostat();

      expect(thermostat.getTemperature()).toBe(20);
    });
  });

  describe('up', () => {
    it('increases temperature by 1', () => {
      let thermostat = new Thermostat();
      thermostat.up();

      expect(thermostat.temperature).toBe(21);
    });

    it('should not increase the temperature above 25, if powerSaveMode is on', () => {
      let thermostat = new Thermostat();
      thermostat.placePowerSavingMode(true);
      
      for (let x = 0; x <= 15; x++) {
        thermostat.up();
      }

      expect(thermostat.temperature).toBe(25);
    });

    it('should not increase the temperature above 32, if powerSaveMode is off', () => {
      let thermostat = new Thermostat();
      thermostat.placePowerSavingMode(false);
      
      for (let x = 0; x <= 15; x++) {
        thermostat.up();
      }

      expect(thermostat.temperature).toBe(32);
    });
  });

  describe('down', () => {
    it('decreases temperature by 1', () => {
      let thermostat = new Thermostat();
      thermostat.down();

      expect(thermostat.temperature).toBe(19);
    });

    it('will not decrease temperature if it is 10 degrees', () => {
      let thermostat = new Thermostat();
      thermostat.getTemperature();

      for (let x = 0; x <= 15; x++) {
        thermostat.down();
      }

      expect(thermostat.temperature).toBe(10);
    });
  });

  describe('reset', () => {
    it('resets the temperature to 2o degrees', () => {
      let thermostat = new Thermostat();
      thermostat.down();
      thermostat.reset();

      expect(thermostat.temperature).toBe(20);
    });
  });

  describe('placePowerSavingMode', () => {
    it('returns true by default', () => {
      let thermostat = new Thermostat();

      expect(thermostat.powerSavingMode).toBe(true);
    });

    it('returns false when off', () => {
      let thermostat = new Thermostat();
      thermostat.placePowerSavingMode(false);

      expect(thermostat.powerSavingMode).toBe(false);
    });

    it('returns true when on', () => {
      let thermostat = new Thermostat();
      thermostat.placePowerSavingMode(false);
      thermostat.placePowerSavingMode(true);

      expect(thermostat.powerSavingMode).toBe(true);
    })
  });

  describe('currentEnergyUsage', () => {
    it('returns low-usage when temperature < 18', () => {
      let thermostat = new Thermostat();

      for (let x = 0; x <= 15; x++) {
        thermostat.down();
      }

      expect(thermostat.currentEnergyUsage()).toBe('low-usage')
    });
    
    it('returns medium-usage when temperature <=25', () => {
      let thermostat = new Thermostat();
      
      expect(thermostat.currentEnergyUsage()).toBe('medium-usage')
    });

    it('returns high-usage when temperature > 25', () => {
      let thermostat = new Thermostat();
      thermostat.placePowerSavingMode(false);

      for (let x = 0; x <= 15; x++) {
        thermostat.up();
      }

      expect(thermostat.currentEnergyUsage()).toBe('high-usage')
    });
  });
});
