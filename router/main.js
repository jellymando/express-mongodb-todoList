const Item = require('../models/Item');

module.exports = function (app) {
  app.get('/', function (req, res) {
    res.render('index.html');
  });

  app.post('/create', (req, res) => {
    const item = new Item(req.body);
    item.save((err, doc) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).json({ success: true });
    });
  });

  app.get('/items', (req, res) => {
    Item.find((err, data) => {
      if (err) return res.status(500).send({ error: 'database failure' });
      res.json(data);
    });
  });

  app.post('/search', (req, res) => {
    Item.find({ title: req.body.title }, (err, data) => {
      if (err) return res.status(500).send({ error: 'database failure' });
      res.json(data);
    });
  });

  app.delete('/items/:_id', (req, res) => {
    Item.deleteOne({ _id: req.params._id }, (err, data) => {
      if (err) return res.status(500).send({ error: 'database failure' });
      res.json(data);
    });
  });
};
