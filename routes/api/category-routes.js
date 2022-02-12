const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories and associated products
  Category.findAll({
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock']
      }
    ]
  })
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: err.message });
    });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value and associated Products
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock']
      }
    ]
  })
    .then(category => {
      // if no changes were made, tell user they messed up req
      if (!category) {
        res.status(400).json({
          message: `No category with id ${req.params.id}`
        });
        return;
      }
      // return category
      res.json(category);
    })
    .catch(err => {
      // console.log(err);
      res.status(500).json({ message: err.message });
    });
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({ category_name: req.body.category_name })
    .then(category => {
      res.json({
        message: 'Category added',
        data: category
      });
    })
    .catch(err => {
      // console.log(err);
      res.status(400).json({ message: err.message });
    });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update({
    category_name: req.body.category_name
  },
    {
      where: {
        id: req.params.id
      }
    })
    .then(result => {
      // if no changes were made, tell user they messed up req
      if (!result[0]) {
        res.status(400).json({
          message: `No category with id ${req.params.id}`
        });
        return;
      }
      // tell user changes are success
      res.json({
        message: `Category with id ${req.params.id} updated`,
        changes: result
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: err.message });
    });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(result => {
    if (!result) {
      // if no changes were made, tell user they messed up req
      res.status(400).json({ 
        message: `No category with id ${req.params.id}`
      });
      return;
    }
    // tell user changes are success
    res.json({
      message: `Category with id ${req.params.id} deleted`,
      changes: result
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ message: err.message });
  });
});

module.exports = router;
