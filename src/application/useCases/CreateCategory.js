const Category = require('../../domain/entities/Category');
 
class CreateCategory {
  constructor(categoryRepository) {
    this.categoryRepository = categoryRepository;
  }
 
  async execute(categoryData) {
    const category = new Category(categoryData);
    return await this.categoryRepository.create(category);
  }
}
 
module.exports = CreateCategory;