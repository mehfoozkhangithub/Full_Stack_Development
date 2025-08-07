import { fetchAndRenderProducts, renderProducts } from '../Home';

jest.mock('./render', () => ({
    renderProducts: jest.fn(),
}));

// Set a fake API URL globally
global.API_URL = 'https://api.example.com/products';

// Mock fetch
global.fetch = jest.fn();

// Mock sessionStorage
const mockSetItem = jest.fn();
global.sessionStorage = {
    setItem: mockSetItem,
};

describe('fetchAndRenderProducts', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('fetches products, stores category count, and calls renderProducts', async () => {
        const mockData = [
            { id: 1, category: 'Books' },
            { id: 2, category: 'Books' },
            { id: 3, category: 'Electronics' },
        ];

        fetch.mockResolvedValueOnce({
            json: jest.fn().mockResolvedValueOnce(mockData),
        });

        await fetchAndRenderProducts();

        expect(fetch).toHaveBeenCalledWith(API_URL);
        expect(mockSetItem).toHaveBeenCalledWith(
            'category',
            JSON.stringify({ Books: 2, Electronics: 1 })
        );
        expect(renderProducts).toHaveBeenCalledWith(mockData);
    });

    it('handles fetch error gracefully', async () => {
        const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => { });
        fetch.mockRejectedValueOnce(new Error('Network error'));

        await fetchAndRenderProducts();

        expect(consoleErrorSpy).toHaveBeenCalledWith('Error fetching products:', expect.any(Error));
        expect(renderProducts).not.toHaveBeenCalled();

        consoleErrorSpy.mockRestore();
    });
});
