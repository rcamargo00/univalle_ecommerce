const CreateCategory = require('../../application/useCases/CreateCategory');
const CategoryDTO = require('../../application/dtos/CategoryDTO');
 
class CategoryController {
  constructor(categoryRepository) {
    this.categoryRepository = categoryRepository;
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

  async getAll(req, res) {
    try {
      const categories = await this.categoryRepository.getAll();
      res.status(200).json(categories);
    } catch (err) {
      res.status(500).json({ message: 'Error retrieving categories'});
    }
  }
}
 
module.exports = CategoryController;