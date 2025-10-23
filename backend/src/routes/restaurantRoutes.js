import { app } from "../app.js";
import {
     createRestaurant,
     getAllRestaurants
     } from "../controllers/restaurantController.js";

import { Router } from "express";

const resturantRouter =Router()

resturantRouter.route("/create").post(createRestaurant)
resturantRouter.route("/getall").get(getAllRestaurants)

export{
    resturantRouter
}