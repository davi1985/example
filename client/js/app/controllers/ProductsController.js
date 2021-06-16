class ProductsController {
  constructor() {
    let $ = document.querySelector.bind(document);

    this._message = new Bind(
      new Message(),
      new MessageView($('#messageView')),
      'message'
    );

    this._productsList = new Bind(
      new ProductsList(),
      new ProductsView($('#productsView')),
      'add'
    );

    this.allProducts();
    this.searchProduct($('.header__input'));
  }

  allProducts() {
    let service = new ProductService();

    service
      .allProducts()
      .then((products) => {
        products.forEach((product) => {
          this._productsList.add(product);
        });
      })

      .catch((err) => {
        this._message.message = err;
      });
  }

  searchProduct(input) {
    console.log(input.value);
  }
}
