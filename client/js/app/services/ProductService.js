class ProductService {
  constructor() {
    this._http = new HttpService();
  }

  allProducts() {
    return this._http
      .get('/products')
      .then((products) => {
        return products.map(
          (product) =>
            new Product(product.image, product.description, product.price)
        );
      })
      .catch((err) => {
        throw new Error('Não foi possível obter os produtos.');
      });
  }
}
