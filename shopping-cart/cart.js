//empty object for items
const item = {};
//empty cart for items in cart
const cart = [];
console.log(cart);

const isEmpty = (item) => Object.keys(item).length === 0;

//function to add item
function addItem(cart, item) {
    if (cart == null || item === null || isEmpty(item)) return 'Cart or Item is missing';
    if (!item.name) return 'Enter Item Name';
    if (item.quantity <= 0) return 'Enter quantity';
    cart.push(item);
   // return cart;
    return "Item Added To the Cart";


}
//function to remove item
function removeItem(cart, name) {
    if (cart == null   ) return 'Enter Cart/Item';
    const index = cart.findIndex(item => item.name === name);
    if(index < 0) return "Item not found"
    cart.splice(index, 1)
    return "Item removed from the Cart";
}
//function to get total items
function getTotalItems(cart) {
    
    return  cart.length; 

}

//addItem(cart, { name: "test1", quantity: 1 });
addItem(cart, { name: "test2", quantity: -6 });
//addItem(cart, { name: "", quantity: 10 });

console.log("Added following items to cart:", JSON.stringify(cart, null, 2));
//console.log("Total Items in the cart are: ", getTotalItems());
const message = removeItem(cart, "test3");
console.log(message);

//module.exports = {addItem, removeItem, getTotalItems};
module.exports = {
    addItem, removeItem, getTotalItems
}


