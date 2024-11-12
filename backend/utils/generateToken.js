import jwt from "jsonwebtoken";
const generateToken = (userId) => {
  const accessToken = jwt.sign({ userId }, process.env.ACESS_TOKEN_SECRET, {
    expiresIn: "15m",
  });

  const refreshToken = jwt.sign({ userId }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  });

  return { accessToken, refreshToken };
};

export default generateToken;
