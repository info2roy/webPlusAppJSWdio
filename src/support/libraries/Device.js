class Device {
    constructor() {
      this.device = 'desktop'
    }
  
    setDevice(newDevice) {
      if (
        newDevice.toLowerCase() !== 'mobile' &&
        newDevice.toLowerCase() !== 'desktop'
      ) {
        return false
      }
  
      this.device = newDevice.toLowerCase()
      return this.device
    }
  

    // getELement(locator) -- read object class from here 

    isMobile() {
      return this.device === 'mobile'
    }
  
    isDesktop() {
      return this.device === 'desktop'
    }
}
  

// const device = new Device()
// export default device
module.exports = new Device()
  