interface Product {
    id: number;
    name: string;
    price: number;
    category: Category;
}
interface Product {
    count: number;
}
interface Category {
    name: string;
}


let product: Product = {
    id: 1,
    name: "Laptop",
    price: 999.99,
    count: 10,
    category: {
        name: "Electronics",
    }
}
console.log(product);