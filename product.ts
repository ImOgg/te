interface Product {
    id: number,
    name: string,
    price: number,
    description: string,
}

const productsList: Product[] = [
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

const calculatePrices = () => {
    let totalPrice: number = 0;

    productsList.forEach((product) => {
        totalPrice += product.price;
    });

    let expensiveProducts:{} = productsList.filter((product) => product.price > 100);

    console.log(`Total Price: ${totalPrice}`);
    console.log(`Expensive Products: ${JSON.stringify(expensiveProducts)}`);
};

calculatePrices();