var env = process.env;
if (env.npm_package_name === 'pseudomap' && env.npm_lifecycle_script === 'test') {
    env.TEST_PSEUDOMAP = 'true'
}

if (typeof Map === 'function' && !env.TEST_PSEUDOMAP) {
  module.exports = Map
} else {
  module.exports = require('./pseudomap')
}
