import { Request, Response } from "express";
import User from "../models/User.schema";
import bcrypt from "bcryptjs";

export const register = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;
    const existedUser = await User.findOne({ email });
    if (existedUser)
      return res.status(400).json({ message: "Email đã được sử dụng!" });
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    res
      .status(201)
      .json({ message: "Đăng ký thành công!", userId: newUser._id });
  } catch (error) {
    res.status(500).json({ message: "Lỗi server!", error });
  }
};
