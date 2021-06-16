class Product {
  constructor(image, description, price) {
    this._image = image;
    this._description = description;
    this._price = price;

    Object.freeze(this);
  }

  get image() {
    return this._image;
  }

  get price() {
    return this._price;
  }

  get description() {
    return this._description;
  }
}
