const HydraExpressPlugin = require('hydra-express/plugin');

class HydraHLSPlugin extends HydraExpressPlugin {
  constructor(config = {}) {
    super('hydra-plugin-hls');
    this.config = config;
  }

  setHydraExpress(hydraExpress) {
    this.hydra = hydraExpress.getHydra();
    this.hydraExpress = hydraExpress;
    this.setHydra(hydra);
  }

  onServiceReady() {
    this.hydraExpress.log = require('./logger')(this.hydra, this.config);
  }
}

module.exports = {
  HydraHLSPlugin
};
