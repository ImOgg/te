var products = [
    {
        id: 1,
        name: "Product 1",
        price: 100,
        description: "Description of Product 1",
    },
    {
        id: 2,
        name: "Product 2",
        price: 200,
        description: "Description of Product 2",
    },
    {
        id: 3,
        name: "Product 3",
        price: 300,
        description: "Description of Product 3",
    },
];
var totalPrice = 0;
products.forEach(function (product) {
    totalPrice += product.price;
});
var expensiveProducts = products.filter(function (product) { return product.price > 100; });
console.log("Total Price: ".concat(totalPrice));
console.log("Expensive Products: ".concat(JSON.stringify(expensiveProducts)));
