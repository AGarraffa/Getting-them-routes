// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Product/Category relationship
Product.belongsTo(Category, {
  foraeignKey: 'category_id'
});

Category.hasMany(Product, {
  foreignKey: 'category_id'
});


// Product/Tag relationship
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'product_tags'
})

Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'tagged_products'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
