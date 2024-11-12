import User from "../models/user.model.js";
import generateToken from "../utils/generateToken.js";

export const signup = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      const error = new Error("User already exists");
      error.status = 400;
      return next(error);
    }

    const user = await User.create({ name, email, password });

    const { accessToken, refreshToken } = generateToken(user._id);

    res
      .status(201)
      .json({ success: true, user, message: "User created successfully" });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res) => {
  res.send("Login route");
};
export const logout = async (req, res) => {
  res.send("Logout route");
};
