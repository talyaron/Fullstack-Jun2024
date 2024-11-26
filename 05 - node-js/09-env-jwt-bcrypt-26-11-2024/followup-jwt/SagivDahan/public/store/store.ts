//model
interface Product {
    name: string;
    price: number;
    description: string;
    category: string;
    inStock: boolean;
    _id: string;
}

//view
function renderProduct(product: Product) {
    return `
    <div class="product-card">
        <img src="/api/placeholder/400/320" alt="${product.name}" class="product-card__image">
        <div class="product-card__info">
            <span class="product-card__category">${product.category}</span>
            <h2 class="product-card__title">${product.name}</h2>
            <p class="product-card__description">${product.description}</p>
            <div class="product-card__footer">
                <span class="product-card__price">$${product.price.toFixed(2)}</span>
                <div class="product-card__stock">
                    <span class="product-card__stock-dot"></span>
                    ${product.inStock ? 'In Stock' : 'Out of Stock'}
                </div>
            </div>
            <button class="product-card__button" onclick="handleAddToCart('${product._id}')">Add to Cart</button>
        </div>
    </div>
    `;
}

async function handleGetProducts() {
    try {
        const response = await fetch('http://localhost:3000/api/products/get-all-products');
        if (response.ok) {
            const {products} = await response.json();
            console.log(products);
          
            const productsContainer = document.querySelector('#products');
            if(!productsContainer) throw new Error('Products element not found');

            if(products.length === 0) {
                productsContainer.innerHTML = '<p>No products found</p>';
            }

            if(!Array.isArray(products)) throw new Error('Products is not an array');
           
        
            productsContainer.innerHTML = products.map((product: Product) => renderProduct(product)).join('');
        }
    } catch (error) {
        console.error('An error occurred during getting products:', error);
    }
}

handleGetProducts();

async function handleGetMyProducts() {
    try {
        console.log("first")
        const response = await fetch('http://localhost:3000/api/products/my-products')
        if (response.ok) {
            const products = await response.json();
            const productsContainer = document.querySelector('#my-products');
            if (!productsContainer) throw new Error('Products element not found');

            productsContainer.innerHTML = products.map((product: Product) => renderProduct(product)).join('');
        }

    } catch (error) {
        console.error('An error occurred during getting my product:', error);

    }
}

handleGetMyProducts();

function handleAddToCart(id:string) {
   try {
     console.log('Add to cart', id);
     const response = fetch('http://localhost:3000/api/purchase/add-to-cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({productId: id})
        });
   } catch (error) {
       console.error('An error occurred during adding to cart:', error);
    
   }
   
}

