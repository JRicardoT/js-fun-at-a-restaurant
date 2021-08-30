function createRestaurant(name) {
  pizzaRestaurant = {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    }
  }
  return pizzaRestaurant;
};

 function addMenuItem(pizzaRestaurant, item) {
    if (pizzaRestaurant.menus.breakfast.includes(item)) {
      return;
    } else if (item.type === "breakfast") {
      return pizzaRestaurant.menus.breakfast.push(item);
    } else if (item.type === "lunch") {
      return pizzaRestaurant.menus.lunch.push(item);
    } else {
      return pizzaRestaurant.menus.dinner.push(item);
    }
 };

  function removeMenuItem (pizzaRestaurant, itemName, itemType) {
    for (var i = 0; i < pizzaRestaurant.menus[itemType].length; i++) {
      if (pizzaRestaurant.menus[itemType][i].name === itemName) {
      pizzaRestaurant.menus[itemType].splice(i,1)
      return `No one is eating our ${itemName} - it has been removed from the ${itemType} menu!`
    }
   }
   return `Sorry, we don't sell ${itemName}, try adding a new recipe!`
  };





module.exports = {
   createRestaurant,
   addMenuItem,
   removeMenuItem
}
