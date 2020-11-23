const { Category } = require('../models/category');

Category.bulkCreate([
    { name: 'Pick up/ Delivery' },
    { name: 'Maintenance' },
    { name: 'Lend' },
    { name: 'Other Service' }
])
