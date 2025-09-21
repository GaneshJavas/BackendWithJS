import { ApiErrorHandler } from "../utils/ApiErrorHandler.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponseHandler } from "../utils/ApiResponceHandler.js";
import {User} from "../models/user.model.js";

const registerUser = asyncHandler( async (req, res) => {
    

    // res.status(200).json({
    //     message: "ok"
    // })

    // Purpose of the controller (@desc, @route, @access).

    // Field validation explanation.

    // Checking for existing user.

    // Handling uploaded files (mandatory vs optional).

    // Cloudinary upload explanation.

    // Creating user and sanitizing response.

    // Notes about sensitive data (password).



    // Destructure input fields from request body
    const {username, fullName, email, password} = req.body;
    // console.log("username", username)
    // console.log("fullName", fullName);
    // console.log("email", email)
    // console.log("password", password);
    

    // Validation: Check if any required field is missing or empty
    if([username, fullName, email, password].some((ele)=> {
        return ele?.trim() === ""
    })){
        throw new ApiErrorHandler(400,"All fields are required and cannot be empty")
    }

    // Check if user with same username or email already exists
    const userExistanceCheck = await User.findOne({
      $or:  [
        {username},
        {email}
        ]
    })


    // modelName.findOne({$or : [{username, email}]})

    if (userExistanceCheck){
        throw new ApiErrorHandler(409, "Username or email already existed try another one.")
    }
    // Extract uploaded files from request (Multer)
    const displayPicPath = await req.files?.displayPic[0]?.path
    

    // Validation: Display picture is mandatory
    if (!displayPicPath){
        throw new ApiErrorHandler(400, "Diplay Picture is required")
    }
    
    // Cover picture is optional
    let coverPicPath;
    if (req.files?.coverPic?.length > 0) {
    coverPicPath = req.files.coverPic[0].path;
    }

    // Upload images to Cloudinary
    const displayPicUpload = await uploadOnCloudinary(displayPicPath)

    // Cover picture upload only if provided
    let coverPicUpload = null;
    if (coverPicPath) {
        coverPicUpload = await uploadOnCloudinary(coverPicPath);
    }

    // Create a new user in the database
    const userCreated = await User.create({
        username : username.toLowerCase(),
        fullName,
        password,
        email,
        displayPic : displayPicUpload.url,
        coverPic : coverPicUpload?.url || ""
    })

    // Fetch the created user without sensitive fields like password & refreshToken
    const createdUserExists = await User.findById(userCreated._id).select(
        "-password -refreshToken"
    )

    // Safety check: If user is not found after creation
    if (!createdUserExists){
        throw new ApiErrorHandler(500, "Internal server error")
    }

    // Send success response    
    res.status(200).json(
        new ApiResponseHandler(200, createdUserExists, "User created successfully")
    )

})
// const loginUser = asyncHandler( async (req, res) => {
//     res.status(200).json({
//         message: "ok"
//     })
// })

export {registerUser,};