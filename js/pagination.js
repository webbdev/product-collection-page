// Function to render pagination buttons
function renderPaginationButtons(products, currentPage, pageSize) {
    const totalPages = Math.ceil(products.length / pageSize);

    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = '';

    // Left Arrow
    const leftArrow = document.createElement('button');
    leftArrow.textContent = '<';
    if (currentPage === 1) {
        leftArrow.setAttribute('disabled', true);
    }
    leftArrow.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderProductsForPage(products, currentPage, pageSize);
            renderPaginationButtons(products, currentPage, pageSize);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
    paginationContainer.appendChild(leftArrow);

    // Current Page Number
    const currentPageSpan = document.createElement('span');
    currentPageSpan.classList.add('active');
    currentPageSpan.textContent = currentPage;
    paginationContainer.appendChild(currentPageSpan);

    // Total Pages Display
    const totalPagesSpan = document.createElement('span');
    totalPagesSpan.textContent = ' / ' + totalPages;
    paginationContainer.appendChild(totalPagesSpan);

    // Right Arrow
    const rightArrow = document.createElement('button');
    rightArrow.textContent = '>';
    if (currentPage === totalPages) {
        rightArrow.setAttribute('disabled', true);
    }
    rightArrow.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderProductsForPage(products, currentPage, pageSize);
            renderPaginationButtons(products, currentPage, pageSize);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
    paginationContainer.appendChild(rightArrow);
}

function renderProductsForPage(products, page, pageSize) {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const productsForPage = products.slice(startIndex, endIndex);
    renderProducts(productsForPage);
}

// Update initial rendering to include pagination
(async function() {
    const allProducts = await fetchProducts();
    renderPaginationButtons(allProducts, 1, 10);
    renderProductsForPage(allProducts, 1, 10);
})();