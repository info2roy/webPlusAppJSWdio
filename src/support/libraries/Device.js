class Device {
  constructor() {
    this.device = 'desktop';
  }

  setDevice(newDevice) {
    if (newDevice.toLowerCase() !== 'desktop' &&
        newDevice.toLowerCase() !== 'mobileweb'
    ) {
      return false;
    }

    this.device = newDevice.toLowerCase();
    return this.device;
  }

  isDesktop() {
    return this.device === 'desktop';
  }

  isMobileWeb() {
    return this.device === 'mobileweb';
  }

  isWeb() {
    return (this.isMobileWeb() || this.isDesktop());
  }
}

module.exports = new Device();
