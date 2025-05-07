
# TypeScript Interface Example

## Interface Merging

In TypeScript, interfaces with the same name will be automatically merged.  
This is called **declaration merging**.

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
/*
interface Product {
    id: number;
    name: string;
    price: number;
    count: number;
}
*/
```

---

## Product Object Example

```typescript
let product: Product = {
    id: 1,
    name: "Laptop",
    price: 999.99,
    count: 10
};
```

✅ This object implements the merged `Product` interface,  
containing properties from both interface declarations.

---

## 不想開網頁，只想執行 TypeScript

1. **新增一個檔案**（例如 `app.js`）
2. 在檔案中寫程式：
```js
console.log("Hello, Node.js!");
```
3. 執行：
```bash
node app.js
```

---

## 安裝 TypeScript

使用 npm 安裝 TypeScript（開發依賴）：

```bash
npm install typescript --save-dev
```

---

## 編譯 TypeScript 文件

使用 `npx tsc` 編譯 TypeScript 檔案：

```bash
npx tsc index.ts
```

➡️ 會產生 `index.js`，再用 Node.js 執行：

```bash
node index.js
```

✅ 完全不需要 index.html，也不需要開瀏覽器。
