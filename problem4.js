//problem4.
function topRatedRestaurant(restaurants) {
    if (!Array.isArray(restaurants)) {
        return "Invalid";
    }

    if (restaurants.length === 0) {
        return "Invalid";
    }
    let topRestaurant = restaurants[0];

    for (let restaurant of restaurants) {
        if (restaurant.rating > topRestaurant.rating) {
            topRestaurant = restaurant;
        }
    }

    return topRestaurant.name.toUpperCase();
}


console.log(topRatedRestaurant([{name:"Chillox",rating:4.5},{name:"Sultan's Dine",rating:4.8}]))

console.log(topRatedRestaurant([{name:"KFC",rating:4.2},{name:"Pizza Hut",rating:4.6}]))

console.log(topRatedRestaurant([]))

console.log(topRatedRestaurant("restaurants"))