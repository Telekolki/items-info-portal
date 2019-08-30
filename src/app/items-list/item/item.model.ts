export class Item {
  public name: string;
  public sku: string;
  public quantity: number;
  public orders: number;

  constructor(name: string, sku: string, quantity: number, orders: number) {
    this.name = name;
    this.sku = sku;
    this.quantity = quantity;
    this.orders = orders;
  }
}


