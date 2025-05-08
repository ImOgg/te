// interface Product {
//     id: number;
//     name: string;
//     price: number;
//     category: Category;
// }
// interface Product {
//     count: number;
// }
// interface Category {
//     name: string;
// }


// let product: Product = {
//     id: 1,
//     name: "Laptop",
//     price: 999.99,
//     count: 10,
//     // description: "High-performance laptop with great features",
//     category: {
//         name: "Electronics",
//     }
// }

// console.log(product);


// Type 'string' is not assignable to type 'number'.
// let fibonacci: number[] = [1, '1', 2, 3, 5];

// let fibonacci: number[] = [1, 1, 2, 3, 5];
// fibonacci.push(8);
// console.log(fibonacci);
// fibonacci.pop();
// fibonacci.pop();
// fibonacci.shift();
// console.log(fibonacci);
// Argument of type '"8"' is not assignable to parameter of type 'number'.

// interface NumberArray {
//     [index: number]: number;
// }
// let fibonacci: NumberArray = [1, 1, 2, 3, 5];

// function sum() {
//     let args: {
//         [index: number]: number;
//         length: number;
//         callee: Function;
//     } = arguments;
// }

// function sum(x: number, y: number): number {
//     return x + y;
// }

// let total: number = sum(1, 2);

// console.log(total);


// 這是原始的 Pet 類，使用 _name 作為私有屬性
// class Pet {
//     private _name: string;

//     constructor(name: string) {
//         this._name = name;
//     }
//     get name() {
//         return this._name;
//     }
//     set name(value: string) {
//         this._name = value
//         console.log('setter: ' + value);
//     }
// }

// let a = new Pet('Jack');
// a.name = 'Tom'; // setter: Tom
// console.log(a.name); // Tom

// 這個類嘗試直接使用 name 而不是 _name，會導致衝突
// class PetWithoutUnderscore {
//     // 如果我們嘗試這樣做，TypeScript 會報錯:
//     // 類的成員 'name' 與其在類 'PetWithoutUnderscore' 中的 getter 同名
//     // private name: string;
    
//     private _name: string; // 所以我們必須使用不同的名稱，如 _name

//     constructor(name: string) {
//         this._name = name;
//     }
    
//     // getter 名稱 'name' 與屬性名稱衝突
//     get name() {
//         return this._name;
//     }
    
//     // setter 名稱 'name' 與屬性名稱衝突
//     set name(value: string) {
//         this._name = value;
//         console.log('setter: ' + value);
//     }
// }

// 解釋: 
// 1. 下劃線前綴(_name)是一種常見的約定，用於表示該屬性是私有的
// 2. 在使用 getter/setter 時，我們希望通過 obj.name 訪問，這與屬性名衝突
// 3. 使用 _name 作為內部存儲，name 作為存取器方法名，避免了這種衝突
// console.log('屬性名稱必須與 getter/setter 名稱不同，否則會產生衝突');

// 問題示範：下面的 JavaScript 代碼在 TypeScript 中會報錯
/* 
class Animal {
  constructor(name) {      // 缺少參數類型
      this._name = name;   // 缺少屬性聲明 private _name: string;
  }
  get name() {             // 缺少返回類型
      return this._name;
  }
  set name(value) {        // 缺少參數類型
      this._name = value
      console.log('setter: ' + value);
  }
}
*/

// 正確的 TypeScript Animal 類定義
// class Animal {
//   private _name: string; // 需要宣告並標註類型

//   constructor(name: string) {
//     this._name = name;
//   }
  
//   get name(): string {
//     return this._name;
//   }
  
//   set name(value: string) {
//     this._name = value;
//     console.log('setter: ' + value);
//   }
// }

// let b = new Animal('Jack');
// b.name = 'Tom'; // setter: Tom
// console.log(b.name); // Tom


// class Animal2 {
//     private _name: string;
    
//     constructor(name: string) {
//         this._name = name;
//     }
    
//     static isAnimal(a) {
//         return a instanceof Animal2;
//     }
// }

// let animal2Instance = new Animal2('Jack');
// let isAnimal= Animal2.isAnimal(animal2Instance); // true
// console.log(isAnimal); // true
// animal2Instance.isAnimal(animal2Instance); // TypeError: animal2Instance.isAnimal is not a function