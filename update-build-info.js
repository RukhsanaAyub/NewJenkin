const appVersion = require('./package.json').version
const fs = require('fs');


try {
  fs.writeFileSync('./apps/shell/src/assets/build-info.json', JSON.stringify({
    buildVersion: appVersion,
    buildTime: new Date()
  }, undefined, 2))
}
catch (error) {
  console.error('Error occurred:', error);
}
