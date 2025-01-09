import user from "../model/Users.js";

export const postUser = async (req, res) => {
  const data = new user({
    name: req.body.name,
    email: req.body.email,
  });
  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(400).json({ message: error.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    const data = await user.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserByID = async (req, res) => {
  try {
    const data = await user.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
