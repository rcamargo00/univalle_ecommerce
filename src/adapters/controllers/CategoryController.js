const CreateCategory = require('../../application/useCases/CreateCategory');
const CategoryDTO = require('../../application/dtos/CategoryDTO');
 
class CategoryController {
  constructor(categoryRepository) {
    this.createCategory = new CreateCategory(categoryRepository);
  }
 
  async create(req, res) {
    try {
      const category = await this.createCategory.execute(req.body);
      res.status(201).json(new CategoryDTO(category));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}
 
module.exports = CategoryController;