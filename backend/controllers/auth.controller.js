import { hashPassword } from "../utils/hashPassword.js";

export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  // const pass = await hashPassword(password);
  // console.log(pass);

  // res.json({ name: name, email: email, password: pass });
  res.send("Signup route");
};
export const login = async (req, res) => {
  res.send("Login route");
};
export const logout = async (req, res) => {
  res.send("Logout route");
};
