// Coffee Shop Program

class CoffeeShop {
    constructor(name) {
        this.name = name;
        this.menu = [];
        this.orders = [];
    }

    addMenuItem(item) {
        this.menu.push(item);
    }

    placeOrder(itemName) {
        const item = this.menu.find(menuItem => menuItem.name === itemName);
        if (item) {
            this.orders.push(item);
            return `${itemName} has been added to your order.`;
        } else {
            return `Sorry, ${itemName} is not available on the menu.`;
        }
    }

    fulfillOrder() {
        if (this.orders.length > 0) {
            const fulfilledOrder = this.orders.shift();
            return `Order for ${fulfilledOrder.name} is ready!`;
        } else {
            return "No orders to fulfill.";
        }
    }

    listOrders() {
        return this.orders.map(order => order.name);
    }

    dueAmount() {
        return this.orders.reduce((total, order) => total + order.price, 0).toFixed(2);
    }

    cheapestItem() {
        if (this.menu.length === 0) return "Menu is empty.";
        return this.menu.reduce((cheapest, item) => item.price < cheapest.price ? item : cheapest).name;
    }

    drinksOnly() {
        return this.menu.filter(item => item.type === "drink").map(item => item.name);
    }

    foodOnly() {
        return this.menu.filter(item => item.type === "food").map(item => item.name);
    }
}

// Example usage
const myCoffeeShop = new CoffeeShop("Java Haven");

myCoffeeShop.addMenuItem({ name: "Espresso", type: "drink", price: 3.0 });
myCoffeeShop.addMenuItem({ name: "Latte", type: "drink", price: 4.5 });
myCoffeeShop.addMenuItem({ name: "Croissant", type: "food", price: 2.5 });

console.log(myCoffeeShop.placeOrder("Latte"));
console.log(myCoffeeShop.placeOrder("Croissant"));
console.log(myCoffeeShop.fulfillOrder());
console.log("Current Orders:", myCoffeeShop.listOrders());
console.log("Total Due:", myCoffeeShop.dueAmount());
console.log("Cheapest Item:", myCoffeeShop.cheapestItem());
console.log("Drinks Only:", myCoffeeShop.drinksOnly());
console.log("Food Only:", myCoffeeShop.foodOnly());