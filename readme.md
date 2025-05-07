# TypeScript Interface Example

## Interface Merging

In TypeScript, interfaces with the same name will be automatically merged. This is called "declaration merging".

```typescript
interface Product {
    id: number;
    name: string;
    price: number;
}

interface Product {
    count: number;
}

// The resulting merged interface is equivalent to:
// interface Product {
//     id: number;
//     name: string;
//     price: number;
//     count: number;
// }
```

## Product Object Example

```typescript
let product: Product = {
    id: 1,
    name: "Laptop",
    price: 999.99,
    count: 10
}
```

This object implements the merged `Product` interface, containing properties from both interface declarations.

不想開網頁，就想執行
新增1個檔案，例如app.js，然後打node app.js
```js
    node app.js
```
