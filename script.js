/**
 * Adds two numbers together
 * @param {number} num1 - first number 
 * @param {number} num2 - second number
 * @returns sum of num1 and num2
 *  
 * @example
 * // Enter two numbers, which are added together.
 * addNum(1,2);
 * // Returns 3
 */
function addNum(num1, num2) {
    return num1 + num2;
}

//Testing classes below:

class ShoppingCart{
    cart = [];

    constructor(shopName, currency){
        this.shopName = shopName;
        this.currency = currency;
    }

    addToCart(item){
        this.cart.push(item);
    }

    removeFromCart(item){
        const idToFind = item.id;
        const indexToRemove = this.cart.findIndex(
            (currentItem) => currentItem.id === idToFind,
        );
        if(indexToRemove === -1){
            return null;
        }

        const newCart = this.cart.filter((item, index) => index !== indexToRemove);
        this.cart = [...newCart]; 
    }

    calculateTotalCost(){
        const totalCost = this.cart.reduce((total, item)  => {
            total += item.price;
            return total;
        }, 0);
        return totalCost;
    }

    displayCart(){
        console.log("Your Cart:")
        console.log("----------------------------");
        this.cart.forEach((item) => {
            console.log(item.title);
        });
        console.log("============================")
    }

    displayTotalCost(){
        console.log("Total items:" + this.cart.length);
        console.log("Total is " + this.calculateTotalCost() + " " + this.currency);
    }
}

const myCart = new ShoppingCart("Bagles and Brass", "NOK");

const cookies = { id: 23, title: 'Chocolate Chip Cookies', price: 20.0 };
const cake = { id: 45, title: 'Vanilla Cake', price: 30.0 };

myCart.addToCart(cookies);
myCart.addToCart(cookies);
myCart.addToCart(cake);

myCart.displayCart();

myCart.removeFromCart(cookies);
myCart.displayCart();
myCart.displayTotalCost();