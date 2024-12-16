const getRandomStatus = () => Math.random() < 0.2;

exports.login = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }
  const status = getRandomStatus();
  res.status(200).json({
    username,
    status,
    message: status ? "Login successful" : "Login failed. Please try again.",
  });
};
