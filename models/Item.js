const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
  title: {
      type: String
  }
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;