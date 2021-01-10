const Item = require('../models/Item');

module.exports = function(app)
{
     app.get('/',function(req,res){
        res.render('index.html');
     });

      app.post('/items', (req, res) => {
         const item = new Item(req.body);
         item.save((err, doc) => {
            if(err) return res.json({success: false, err});
            return res.status(200).json({success: true});
         });
      });
      
      app.get('/items', (req, res) => {
         Item.find((err, data) => {
            if(err) return res.status(500).send({error: 'database failure'});
            res.json(data);
         })
      });
}