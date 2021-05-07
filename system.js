const System = require('systemic');
const { join } = require('path');

module.exports = () =>
  new System({ name: 'service-ecommerce-repository-metrics' })
  .bootstrap(join(__dirname, 'components'));

