class CoffeeShop:
    def __init__(self, name):
        self.name = name
        self.menu = {}
        self.orders = []

    def add_item_to_menu(self, item, price):
        self.menu[item] = price

    def show_menu(self):
        print(f"Menu at {self.name}:")
        for item, price in self.menu.items():
            print(f"{item}: ${price:.2f}")

    def take_order(self, item):
        if item in self.menu:
            self.orders.append(item)
            print(f"Order added: {item}")
        else:
            print(f"Sorry, {item} is not on the menu.")

    def show_orders(self):
        print("Current Orders:")
        for order in self.orders:
            print(order)

    def calculate_total(self):
        total = sum(self.menu[item] for item in self.orders)
        print(f"Total: ${total:.2f}")
        return total

    def clear_orders(self):
        self.orders = []
        print("All orders cleared.")

# Example usage
if __name__ == "__main__":
    shop = CoffeeShop("Java Beans")
    shop.add_item_to_menu("Espresso", 2.50)
    shop.add_item_to_menu("Latte", 3.50)
    shop.add_item_to_menu("Cappuccino", 3.00)

    shop.show_menu()
    shop.take_order("Espresso")
    shop.take_order("Latte")
    shop.show_orders()
    shop.calculate_total()
    shop.clear_orders()