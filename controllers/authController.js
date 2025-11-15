import userData from "../model/users.js";

export const authenticateUser = (req, res) => {
  const { username, password } = req.query;
          const user = userData.find(u => u.username === username && u.password === password);
          if (user) {
                    res.status(200).json({ message: "Authentication successful" });
          } else {
                    res.status(401).json({ message: "Authentication failed" });
          }
};

export const getAllUserData = (req,res) => {
          res.json(userData);
}

export default {
  authenticateUser,
  getAllUserData
};