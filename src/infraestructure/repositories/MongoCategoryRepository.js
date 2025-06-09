const CategoryRepository = require('../../domain/repositories/CategoryRepository');
const CategoryModel = require('../database/models/CategoryModel');
const Category = require('../../domain/entities/Category');

class MongoCategoryRepository extends CategoryRepository {
  async getAll() {
    const categories = await CategoryModel.find();
    return categories.map(c => new Category(c.toObject()));
  }

  async create(category) {
    const newCategory = await CategoryModel.create(category);
    return new Category(newCategory.toObject());
  }
}

module.exports = MongoCategoryRepository;