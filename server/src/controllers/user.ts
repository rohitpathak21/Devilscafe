import { NextFunction, Request, Response } from "express";
import { User } from "../models/user.js";
import { NewUserRequestBody } from "../types/types.js";
import { TryCatch } from "../middlewares/error.js"; 
import ErrorHandler from "../utils/utility-class.js";

export const newUser = TryCatch(async (
  req: Request<{},{},NewUserRequestBody>,
  res: Response,
  next: NextFunction
) => { 
   
    const { name, email, photo, gender, _id, dob } = req.body;
    let user = await User.findById(_id);
    if(user)
      return res.status(200).json({
    success: true,
    message: `Welcome back, ${user.name}`
    })
    if(!_id || !name || !email || !photo || !gender ||!dob)
    return next(new ErrorHandler("please enter all fields",400));
    user = await User.create({
      name,
      email,
      photo,
      gender,
      _id,
      dob: new Date(dob),
    });

    return res.status(200).json({
      success: true,
      message: `Welcome ${user.name}`,
    });
}
);

export const getAllUsers = async (req:Request, res:Response, next:NextFunction) => {
  console.log("Inside getAllUsers without TryCatch"); // Check if this appears
  try {
    const users = await User.find({});
    return res.status(200).json({
      success: true,
      users, 
    });
  } catch (error) {
    next(error);
  }
};

