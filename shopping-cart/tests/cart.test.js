//importing cart.js functions
const ts = require('../cart')
//const cart = []
describe('Shopping Cart Functionality (cart.js)', () => {
     // This ensures tests are isolated and reliable.
    let cart;
    beforeEach(() => {
        // Initialize a fresh, empty cart for every test
        cart = [];
    });

     //ITEM ADDITION TESTS (addItem)
     describe('addItem(cart, item)', () => {
        
        // Positive Test Case: Successful addition
        test('should be able to add a new item successfully', () => {
            // Act & Assert
            expect(ts.addItem(cart, { name: "Milk", quantity: 1 })).toBe("Item Added To the Cart");
            expect(cart.length).toBe(1); // Verify the cart size increased
        });

        // Positive Test Case: Adding multiple items
        test('should increment cart size when multiple items are added', () => {
            ts.addItem(cart, { name: "Eggs", quantity: 1 });
            ts.addItem(cart, { name: "Bread", quantity: 2 });
            expect(cart.length).toBe(2);
        });
        
        // Negative Test Case: Missing item name
        test('should reject adding an item if the name is missing (empty string)', () => {
            const item = { name: "", quantity: 5 };
            expect(ts.addItem(cart, item)).toBe('Enter Item Name');
            expect(cart.length).toBe(0); // Verify cart did not change
        });

        // Negative Test Case: Non-existent/null item
        test('should reject adding an item if the item object is null', () => {
            expect(ts.addItem(cart, null)).toBe('Cart or Item is missing');
            expect(cart.length).toBe(0);
        });

        // Negative Test Case: Missing cart reference
        test('should reject adding an item if the cart reference is null', () => {
            expect(ts.addItem(null, { name: "Milk", quantity: 1 })).toBe('Cart or Item is missing');
        });
        
        // Edge Case: Zero quantity
        test('should reject adding an item if quantity is zero', () => {
            expect(ts.addItem(cart, { name: "Milk", quantity: 0 })).toBe('Enter quantity');
            expect(cart.length).toBe(0);
        });

        // Negative Test Case: Negative quantity
        test('should reject adding an item if quantity is negative', () => {
            expect(ts.addItem(cart, { name: "Milk", quantity: -1 })).toBe('Enter quantity');
            expect(cart.length).toBe(0);
        });
    });

    
    //ITEM REMOVAL TESTS (removeItem)
     describe('removeItem(cart, name)', () => {
        
        // Setup: Manually add items for removal tests to ensure the cart isn't empty.
        beforeEach(() => {
            ts.addItem(cart, { name: "Eggs", quantity: 1 });
            ts.addItem(cart, { name: "Milk", quantity: 1 });
        });

        //  Positive Test Case: Removing a specific item
        test('should be able to remove an existing item from the cart', () => {
            expect(ts.removeItem(cart, "Eggs")).toBe("Item removed from the Cart");
            expect(cart.length).toBe(1); // Cart should now only have Milk
        });

        // Edge Case: Removing an item that doesn't exist
        test('should indicate if the item name is not found', () => {
            expect(ts.removeItem(cart, "EggsA")).toBe("Item not found");
            expect(cart.length).toBe(2); // Cart size should remain unchanged
        });
        
        // Negative Test Case: Invalid cart reference (null)
        test('should reject removal if the cart reference is null', () => {
            expect(ts.removeItem(null, "Eggs")).toBe('Enter Cart/Item');
        });
        
        //  Negative Test Case: Invalid item name reference (null)
        test('should handle null item name gracefully', () => {
             // Depending on cart implementation, this might fail. 
             // Given your existing validation, it should be treated as an error.
             expect(ts.removeItem(cart, null)).toBe("Item not found");
        });
    });

     
    // GET TOTAL ITEMS TESTS (getTotalItems)
     describe('getTotalItems(cart)', () => {

        // Positive Test Case: Calculate total when items are present
        test('should correctly calculate the total number of items in the cart', () => {
            // Setup: Add items of known quantities
            ts.addItem(cart, { name: "ItemA", quantity: 2 });
            ts.addItem(cart, { name: "ItemB", quantity: 3 });
            // Act & Assert
            expect(ts.getTotalItems(cart)).toBe(5);
        });
        
        // Edge Case: Empty cart
        test('should return 0 when the cart is empty', () => {
            // The cart is already empty due to beforeEach
            expect(ts.getTotalItems(cart)).toBe(0);
        });
        
        //  Negative Test Case: Missing cart reference (null)
        test('should return the appropriate error message when the cart is null', () => {
            expect(ts.getTotalItems(null)).toBe('Enter Cart Details');
        });
        
        //  Negative Test Case: Undefined cart reference
        test('should return the appropriate error message when the cart is undefined', () => {
             expect(ts.getTotalItems(undefined)).toBe('Enter Cart Details');
        });
    });
});
 
