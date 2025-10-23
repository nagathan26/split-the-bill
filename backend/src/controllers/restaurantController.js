import { resturants } from "../models/Restaurant.js";
import { apierror } from "../utils/apierror.js";
import { asyncHandler } from "../utils/asyncHandler.js";


const createRestaurant = asyncHandler(async(req,res)=>{
    
    const {name,location} = req.body;

    if(!name.trim() || !location.trim())
    {
        return res
        .status(400)
        .json({
            success : false,
            message : "all the filed are required"

        })
    }


    const new_restaurant = await resturants.create({
        name,
        location
    })

    return res
    .status(201)
    .json({
        success : true,
        message : `new restaurant created`,
        data : new_restaurant
    })
})


const getAllRestaurants = asyncHandler(async(req,res)=>{
    
    const restaurants = await resturants.find({})

    if(!restaurants){
        throw new apierror(503,"Service temporarily unavailable. Try again later." )
    }


    return res
    .status(200)
    .json({
        success:true,
        data : restaurants,
        message : "all the resturants are listed"
    })

})



export{
    createRestaurant,
    getAllRestaurants
}

