import {v2 as cloudinary} from "cloudinary"
import fs from "fs"


cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        //To upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        // File uploaded Successfully
        //console.log("File uploaded on Cloudinary", response.url);
        fs.unlinkSync(localFilePath)
        return response;

    } catch (error) {
        fs.unlinkSync(localFilePath)
        // If any error occurs during the upload process, the function catches the exception, deletes the local file to avoid leaving unused files on disk, and returns null to indicate failure. Finally, the function is exported for use elsewhere in the project. This approach ensures that files are reliably uploaded to Cloudinary and that local storage is managed efficiently, even in error scenarios.
        return null;
    }
}




export {uploadOnCloudinary}

