import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import Jwt  from "jsonwebtoken";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, email, passoword } = req.body;
  const hashedPassword = bcryptjs.hashSync(passoword, 10);
  const newUser = new User({ username, email, passoword: hashedPassword });

  try {
    await newUser.save();
    res.status(201).json("User created successfully");
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, passoword } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "User ot found!"));
    const validPassword = bcryptjs.compareSync(passoword, validUser.passoword);
    if (!validPassword) return next(errorHandler(401, "Invalid password"));
    const token = Jwt.sign({id: validUser._id}, process.env.JWT_SECRET);
    const {passoword: pass, ...rest} = validUser._doc;
    res.cookie('access_token', token,{httpOnly: true}).status(200).json(rest)
  } catch (error) {
    next(error);
  }
};
