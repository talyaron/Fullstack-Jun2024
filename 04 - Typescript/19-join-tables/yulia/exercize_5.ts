// Exercise 5: Products and Categories

interface Product {
  id: number;
  name: string;
  price: number;
}

interface Category {
  id: number;
  name: string;
}

interface ProductCategory {
  productId: number;
  categoryId: number;
}

// TODO: Implement a function getProductsByCategory that returns all products in a specific category
// Function signature: getProductsByCategory(categoryId: number, products: Product[], productCategories: ProductCategory[]): Product[]

function getProductsByCategory(categoryId: number, products: Product[], productCategories: ProductCategory[]): Product[] {
  const productIds = productCategories.filter(pc => pc.categoryId === categoryId).map(pc => pc.productId);
  return products.filter(p => productIds.includes(p.id));
}

// Test cases

const products: Product[] = [
  { id: 1, name: "Apple iPhone 13", price: 799 },
  { id: 2, name: "Samsung Galaxy S21", price: 699 },
  { id: 3, name: "Google Pixel 6", price: 599 },
  { id: 4, name: "Sony WH-1000XM4 Headphones", price: 348 },
  { id: 5, name: 'Apple MacBook Pro 14"', price: 1999 },
  { id: 6, name: "Dell XPS 13", price: 999 },
  { id: 7, name: "Asus ROG Strix G15", price: 1599 },
  { id: 8, name: 'Samsung 65" QLED TV', price: 1399 },
  { id: 9, name: "LG OLED55 CXPUA", price: 1299 },
  { id: 10, name: "Sony PlayStation 5", price: 499 },
  { id: 11, name: "Xbox Series X", price: 499 },
  { id: 12, name: "Nintendo Switch", price: 299 },
  { id: 13, name: "Bose SoundLink Revolve+", price: 299 },
  { id: 14, name: "Sonos One SL", price: 179 },
  { id: 15, name: "Fitbit Charge 5", price: 179 },
];

const categories: Category[] = [
  { id: 1, name: "Smartphones" },
  { id: 2, name: "Laptops" },
  { id: 3, name: "Gaming Consoles" },
  { id: 4, name: "Headphones & Speakers" },
  { id: 5, name: "Televisions" },
];

const productCategories: ProductCategory[] = [
    { productId: 1, categoryId: 1 },
    { productId: 2, categoryId: 1 },
    { productId: 3, categoryId: 1 },
    { productId: 5, categoryId: 2 },
    { productId: 6, categoryId: 2 },
    { productId: 7, categoryId: 2 },
    { productId: 4, categoryId: 4 },
    { productId: 13, categoryId: 4 },
    { productId: 14, categoryId: 4 },
    { productId: 10, categoryId: 3 },
    { productId: 11, categoryId: 3 },
    { productId: 12, categoryId: 3 },
    { productId: 8, categoryId: 5 },
    { productId: 9, categoryId: 5 },
];

console.log(getProductsByCategory(1, products, productCategories));

function printProductsByCategory(categoryId: number, products: Product [], productCategories: ProductCategory[]) {
  const category = categories.find(c => c.id === categoryId);
  console.log(`Products in category ${category?.name}:`);
  const categoryProducts = getProductsByCategory(categoryId, products, productCategories);
  categoryProducts.forEach(p => console.log(`- ${p.name} $${p.price} (ID ${p.id})`));
}

printProductsByCategory(1, products, productCategories);
printProductsByCategory(2, products, productCategories);