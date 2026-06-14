//empty object for items
const item = {};
//empty cart for items in cart
const cart = [];
console.log(cart);
 
 //Checks if an object is empty 
 
const isEmpty = (item) => Object.keys(item).length === 0;
//Adds a new item to the cart array after performing several validations.
function addItem(cart, item) {
    // 1. Primary Validation: Check if either the cart or the item object is missing or empty.
    if (cart == null || item === null || isEmpty(item)) {
        return 'Cart or Item is missing';
    }
    // 2. Validation: Check if the item has a name.
    if (!item.name) {
        return 'Enter Item Name';
    }
    // 3. Validation: Check if the item has a positive quantity.
    if (item.quantity <= 0) {
        return 'Enter quantity';
    }

    // 4. Success: The item passes all checks, so it is added to the cart.
    cart.push(item);
    // 5. Return success confirmation.
    return "Item Added To the Cart";
}

 
 //Removes an item from the cart based on its name.
function removeItem(cart, name) {
    // 1. Validation: Check if the cart reference is provided.
    if (cart == null) {
        return 'Enter Cart/Item';
    }
    // 2. Search: Find the index of the item matching the given name.
    // findIndex returns the index (0-based) or -1 if no match is found.
    const index = cart.findIndex(item => item.name === name);
    // 3. Validation: Check if the item was found.
    if (index < 0) {
        return "Item not found";
    }
    // 4. Action: Remove the item at the found index.
    // splice(start index, number of elements to remove)
    cart.splice(index, 1);
    
    // 5. Return success confirmation.
    return "Item removed from the Cart";
}
//function to get total items
//Calculates the total quantity of all items in the cart using a for...of loop.
  
function getTotalItems(cart) {
    // 1. Validation check: If the cart is null or undefined, return the error message.
    if (cart == null) {
        return 'Enter Cart Details';
    }
    
    // 2. Initialize the total sum variable
    let totalQuantity = 0;
    
     // This loop accesses each element (item) in the 'cart' array.
    for (const item of cart) {
        // Add the current item's quantity to the running total
        totalQuantity += item.quantity;
    }
    
    // 4. Return the final  sum
    return totalQuantity;
}

//addItem(cart, { name: "test1", quantity: 1 });
//addItem(cart, { name: "test2", quantity: -6 });
//addItem(cart, { name: "", quantity: 10 });

//console.log("Added following items to cart:", JSON.stringify(cart, null, 2));
//console.log("Total Items in the cart are: ", getTotalItems(cart));
//const message = removeItem(cart, "test3");
//console.log(message);

//for adding multiple itesm to cart
addItem(cart, { name: "test14", quantity: 1 });
addItem(cart, { name: "test23", quantity: 50 });
addItem(cart, { name: "test33", quantity: 10 });
console.log("Total Items in the cart are: ", getTotalItems(cart));


//module.exports = {addItem, removeItem, getTotalItems};
module.exports = {
    addItem, removeItem, getTotalItems
}


