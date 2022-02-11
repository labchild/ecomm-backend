const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags (include associated products)
  Tag.findAll({
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    ]
  })
    .then(tag => res.json(tag))
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: err.message });
    });
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id` (include associated products)
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    ]
  })
    .then(tag => {
      if (!tag) {
        res.status(400).json({
          message: `No tag with id ${req.params.id}`
        });
        return;
      }
      res.json(tag);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: err.message });
    });
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({ tag_name: req.body.tag_name })
    .then(tag => {
      if (!tag) {
        res.status(400).json({ message: 'Request formatted incorrectly' });
        return;
      }
      res.json(tag);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: err.message });
    });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
