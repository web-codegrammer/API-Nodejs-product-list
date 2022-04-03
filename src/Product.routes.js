import Router from "express";
import { ProductsRepository } from "./repository/ProductsRepository"

const productRoute = Router();

const productsRepository = new ProductsRepository()

productRoute.get("/", (request, response) => {
    const allProducts = productsRepository.list();
    return response.status(201).json("Route");
});

export { productRoute};
