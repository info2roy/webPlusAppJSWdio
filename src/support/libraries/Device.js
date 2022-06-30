class Device {
  constructor() {
    this.device = 'desktop';
  }

  setDevice(newDevice) {
    if (
      newDevice.toLowerCase() !== 'androidapp' &&
        newDevice.toLowerCase() !== 'iosapp' &&
        newDevice.toLowerCase() !== 'desktop' &&
        newDevice.toLowerCase() !== 'mobileweb'
    ) {
      return false;
    }

    this.device = newDevice.toLowerCase();
    return this.device;
  }

  // getELement(locator) -- read object class from here

  isAndroidApp() {
    return this.device === 'androidapp';
  }

  isiOSApp() {
    return this.device === 'iosapp';
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
