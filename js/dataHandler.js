// Fetch data from the API
async function fetchProducts() {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        const products = data.products;
        return products;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

async function fetchAndRenderProducts() {
    // Show loading overlay
    document.querySelector('.loading-overlay').style.display = 'block';
    
    try {
        const products = await fetchProducts();
        renderProducts(products);
    } catch (error) {
        console.error('Error fetching or rendering data:', error);
    } finally {
        // Hide loading overlay regardless of success or failure
        document.querySelector('.loading-overlay').style.display = 'none';
    }
}

function renderProducts(products) {
    const productGrid = document.querySelector('.product-grid');
    productGrid.innerHTML = '';
    
    products.forEach(item => {
        productGrid.innerHTML += `
            <div class="product-card" id="${item.id}">
                <div class="product-image-container relative">
                    <a href="">
                        <img src="${item.images[0]}" class="item-image object-contain h-36 sm:h-48 w-72 sm:w-96" alt="${item.title}">
                    </a>
                    <div class="overlay-btn">
                        <div class="add-to-bag-btn flex justify-center items-center bg-slate-500 uppercase text-xs text-white tracking-[2px] h-11">Add to bag</div>
                    </div>
                </div>
                <div class="card-content py-4">
                    <div class="product-category-brand uppercase text-xs" data-category="${item.category}">   
                        <span> ${item.brand}</span>
                    </div>
                    <h2 class="product-title text-[15px] leading-[1.35] mt-1 mb-1 max-h-10 h-auto">
                        <a href="">${item.title}</a>
                    </h2>
                    <div class="product-price flex justify-between items-center text-[13px] uppercase">
                        <span class="">£${item.price}</span>
                        <span class="bg-slate-100 rounded text-[12px] px-[4px] py-[2px]"> ${item.discountPercentage}% off</span>
                    </div>
                    
                    <div class="product-rating flex items-center mt-2">
                        <div class="flex items-left">
                            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg class="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                        </div>
                        <div class="ml-2 text-xs">(${item.rating})</div>
                    </div>
                </div>
            </div>
        `
    });
}

// Fetch and render products when the page loads
fetchAndRenderProducts();

const qty = document.querySelector('#products-qty');
qty.innerHTML = '';

// Initial fetch and render
(async function() {
    const allProducts = await fetchProducts();
    renderProducts(allProducts);

    qty.innerHTML = allProducts.length + (allProducts.length > 1 ? ' products' : ' product');

    const categories = allProducts.reduce((acc, curr) => {
        if (!acc.includes(curr.category)) {
            acc.push(curr.category);
        }
        return acc;
    }, []);

    const brands = allProducts.reduce((acc, curr) => {
        if (!acc.includes(curr.brand)) {
            acc.push(curr.brand);
        }
        return acc;
    }, []);

    const categoryContainer = document.getElementById('category');
    categoryContainer.innerHTML = categories.map(category => `
        <li class="flex items-center mb-3">
            <input type="checkbox" class="category-checkbox mr-2" name="category" value="${category}" id="${category}">
            <label class="capitalize" for="${category}">${category}</label>
        </li>
    `).join('');

    const categoryCheckboxes = document.querySelectorAll('.category-checkbox');
    categoryCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterAndSortProducts);
    });

    const brandsContainer = document.getElementById('brands');
    brandsContainer.innerHTML = brands.map(brand => `
        <li class="flex items-center mb-3">
            <input type="checkbox" class="brand-checkbox mr-2" name="brand" value="${brand}" id="${brand}">
            <label for="${brand}">${brand}</label>
        </li>
    `).join('');

    const brandCheckboxes = document.querySelectorAll('.brand-checkbox');
    brandCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterAndSortProducts);
    });

    const sortRadios = document.querySelectorAll('#sort-product input[type="radio"]');
    sortRadios.forEach(radio => {
        radio.addEventListener("change", filterAndSortProducts);
    });

    renderPaginationButtons(allProducts, 1, 10);
    renderProductsForPage(allProducts, 1, 10);
})();

async function filterAndSortProducts() {
    const checkboxes = document.querySelectorAll('.category-checkbox');
    const selectedCategories = Array.from(checkboxes)
                                    .filter(checkbox => checkbox.checked)
                                    .map(checkbox => checkbox.value);

    const brandCheckboxes = document.querySelectorAll('.brand-checkbox');
    const selectedBrands = Array.from(brandCheckboxes)
                                    .filter(checkbox => checkbox.checked)
                                    .map(checkbox => checkbox.value);

    const products = await fetchProducts();

    let filteredProducts = products.filter(product => {
        return (selectedCategories.length === 0 || selectedCategories.includes(product.category)) &&
               (selectedBrands.length === 0 || selectedBrands.includes(product.brand));
    });

    // Function to sort products by price (low to high)
    function sortByPriceLowToHigh(products) {
        return [...products].sort((a, b) => a.price - b.price);
    }

    // Function to sort products by price (high to low)
    function sortByPriceHighToLow(products) {
        return [...products].sort((a, b) => b.price - a.price);
    }

    // Function to sort products by rating
    function sortByRating(products) {
        return [...products].sort((a, b) => b.rating - a.rating);
    }

    // Sort by on select option
    const radios = document.querySelectorAll('#sort-product input[type="radio"]');
  
    for (let radio of radios) {
        radio.addEventListener("change", function() {
            const selectedOption = this.value;
            let sortedProducts = []; 

            switch(selectedOption) {
                case "priceLowToHigh":
                    sortedProducts = sortByPriceLowToHigh(filteredProducts);
                    break;
                case "priceHighToLow":
                    sortedProducts = sortByPriceHighToLow(filteredProducts);
                    break;
                case "rating":
                    sortedProducts = sortByRating(filteredProducts);
                    break;
                default:
                    sortedProducts = filteredProducts;
                    break;
            }

            renderPaginationButtons(sortedProducts, 1, 10);
            renderProductsForPage(sortedProducts, 1, 10);
        });
    }

    // Apply sorting if a sort option is already selected
    const selectedSortOption = document.querySelector('#sort-product input[type="radio"]:checked');
    if (selectedSortOption) {
        const selectedOption = selectedSortOption.value;

        switch(selectedOption) {
            case "priceLowToHigh":
                filteredProducts = sortByPriceLowToHigh(filteredProducts);
                break;
            case "priceHighToLow":
                filteredProducts = sortByPriceHighToLow(filteredProducts);
                break;
            case "rating":
                filteredProducts = sortByRating(filteredProducts);
                break;
            default:
                // No sorting option selected
                break;
        }

        renderPaginationButtons(filteredProducts, 1, 10);
        renderProductsForPage(filteredProducts, 1, 10);
    } else {
        // No sort option selected, render filtered products
        renderPaginationButtons(filteredProducts, 1, 10);
        renderProductsForPage(filteredProducts, 1, 10);
    }

    qty.innerHTML = filteredProducts.length + (filteredProducts.length > 1 ? ' products' : ' product');
}



