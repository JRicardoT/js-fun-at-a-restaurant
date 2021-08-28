function nameMenuItem(menuItemName) {
  return `Delicious ${menuItemName}`;
};

function createMenuItem(menuItemName, price, type) {
  var menuItem = {
    name: menuItemName,
    price: price,
    type: type
  }
  return menuItem;
};

function addIngredients(topping, ingredients) {
  if (ingredients.includes(topping)) {
    return topping
  } else {
    return ingredients.push(topping);
  }
};

function formatPrice(initialPrice) {
  return "$" + initialPrice;
};

function decreasePrice(decreasedPrice) {
  return decreasedPrice - (decreasedPrice * .10);
};

function createRecipe(title, ingredients, menuItemType) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType
  }
  return recipe;
};

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
