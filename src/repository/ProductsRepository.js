import { Product} from "../model/Product.js";


class ProductsRepository {
    constructor() {
        this.products = [];
    }


    //create
        create({name, description, quantity, price}) {
            const product = new Product();

            Object.assign(product, {
                name,
                description,
                quantity,
                price,
                created_at: new Date(),
            });

            this.products.push(product);  // Push Our Product to aaray of products
        }

    // delete

    // updateQuantity

    // findByName

    // findById

    // List
}