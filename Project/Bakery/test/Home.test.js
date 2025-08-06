/**
 * @jest-environment jsdom
 */
// __tests__/app.test.js

const {
    fetchAndRenderProducts,
    renderProducts,
    populateFilterOptions
} = require('../Home');

global.fetch = jest.fn();

beforeEach(() => {
    document.body.innerHTML = `
        <select id="filter"></select>
        <div id="info"></div>
    `;
    sessionStorage.clear();
    fetch.mockClear();
});

test('fetch And RenderProducts sets sessionStorage and renders products', async () => {
    const mockProducts = [
        {
            id: 1,
            title: 'Product 1',
            price: 100,
            category: 'Electronics',
            description: 'A great product',
            image: 'img1.jpg',
            rating: { rate: 4.5, count: 10 }
        }
    ];

    fetch.mockResolvedValueOnce({
        json: async () => mockProducts
    });

    await fetchAndRenderProducts();

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(sessionStorage.getItem('category')).toBe(JSON.stringify({ Electronics: 1 }));

    const infoDiv = document.getElementById('info');
    expect(infoDiv.innerHTML).toContain('Product 1');
    expect(infoDiv.querySelectorAll('.card_div').length).toBe(1);
});

test('populateFilterOptions populates select options from sessionStorage', () => {
    sessionStorage.setItem('category', JSON.stringify({ Electronics: 2, Clothing: 3 }));
    populateFilterOptions();

    const filter = document.getElementById('filter');
    expect(filter.options.length).toBe(3); // includes default
    expect(filter.innerHTML).toContain('Electronics');
    expect(filter.innerHTML).toContain('Clothing');
});
