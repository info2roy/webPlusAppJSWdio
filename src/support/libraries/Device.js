class Device {
    constructor() {
      this.device = 'desktop'
    }
  
    setDevice(newDevice) {
      if (
        newDevice.toLowerCase() !== 'androidApp' &&
        newDevice.toLowerCase() !== 'iOSApp' &&
        newDevice.toLowerCase() !== 'desktop'
      ) {
        return false
      }
  
      this.device = newDevice.toLowerCase()
      return this.device
    }
  

    // getELement(locator) -- read object class from here 

    isAndroidApp() {
      return this.device === 'androidApp'
    }

    isiOSApp() {
      return this.device === 'iOSApp'
    }
  
    isDesktop() {
      return this.device === 'desktop'
    }
}
  

module.exports = new Device()
  