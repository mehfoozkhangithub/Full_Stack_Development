// here i have to test the api
const request = require("supertest");

const BASE_URL = "http://localhost:3000"; // your JSON server URL

describe("GET /products", () => {
  it("should return a list of products with correct structure", async () => {
    const res = await request(BASE_URL).get("/products");
    // console.log('🚀 ~ res:', res);

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);

    res.body.forEach((product) => {
      expect(product).toHaveProperty("id");
      expect(product).toHaveProperty("title");
      expect(product).toHaveProperty("price");
      expect(product).toHaveProperty("description");
      expect(product).toHaveProperty("category");
      expect(product).toHaveProperty("image");
      expect(product).toHaveProperty("rating");
      expect(product.rating).toHaveProperty("rate");
      expect(product.count).toHaveProperty("count");
    });
  });
});


