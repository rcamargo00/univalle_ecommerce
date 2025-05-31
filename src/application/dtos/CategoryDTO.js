class CategoryDTO {
  constructor(category) {
    this.id = category._id;
    this.name = category.name;
    this.description = category.description;
  }
}
 
module.exports = CategoryDTO;