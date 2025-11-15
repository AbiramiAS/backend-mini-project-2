import userData from "../model/users.js";
import bcrypt from "bcrypt";

export const registerNewUser = (req, res) => {
  const { username, password } = req.query;
          const existingUser = userData.find(u => u.username === username);
          if (existingUser) {
                    return res.status(409).json({ message: "Username already exists" });
          }
          const hashedPassword = bcrypt.hashSync(password, 10);
          const newUser = { "username" : username, "password" : hashedPassword };
          userData.push(newUser);
          console.log(userData);
          res.status(201).json({ message: "User registered successfully", user: newUser });
};

export default {
  registerNewUser
}