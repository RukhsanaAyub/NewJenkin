const nxPreset = require('@nrwl/jest/preset').default;


module.exports = {
  ...nxPreset,
  coverageReporters: ["json", "text", "lcov", "clover", "cobertura"],
  coverageProvider: "v8",
  collectCoverage: true
};
