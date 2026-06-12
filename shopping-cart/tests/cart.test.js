//importing cart.js functions
const ts = require('../cart')
const cart = []
//writing positive testcases:
ts.addItem(cart, { name: "Eggs", quantity: 1 })

test("should be able to add items to cart", () =>{
    expect(ts.addItem(cart, { name: "Milk", quantity: 1 })).toBe("Item Added To the Cart");
   

})
 
//writing negative testcases for add item:
test("should not be able to add items to cart without item name", () =>{
    expect(ts.addItem(cart, { name: "", quantity: 1 })).toBe("Enter Item Name")

})

//writing edge testcases:
test("should not be able to add items to cart without quantity", () =>{
    expect(ts.addItem(cart, { name: "Milk", quantity: 0 })).toBe("Enter quantity")

})

//Cart refernce is missing
 test("should not be able to add items to cart without cart reference", () =>{
    expect(ts.addItem(null, { name: "Milk", quantity: 0 })).toBe("Cart or Item is missing")
})
//Item is missing
 test("should not be able to add items to cart without item", () =>{
    expect(ts.addItem(cart, null)).toBe("Cart or Item is missing")

})


//Remove item positive, negative and edge test case
 test("should be able to remove item from cart", () =>{
    expect(ts.removeItem(cart, "Eggs")).toBe("Item removed from the Cart")

})

 test("should be able to indicate if Item not found", () =>{
    expect(ts.removeItem(cart, "Egs")).toBe("Item not found")
 })
test("should be pass cart or item  name to remove ", () =>{
    expect(ts.removeItem(null, "Eggs")).toBe("Enter Cart/Item")
     expect(ts.removeItem(cart, null)).toBe("Item not found")
      expect(ts.getTotalItems(cart)).toBe(1);
 })
 

