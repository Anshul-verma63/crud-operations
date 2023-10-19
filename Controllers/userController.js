import userModel from "./../model/model.js";

//create user
export const createUser = async (req, res) => {
  try {
    const user = new userModel(req.body);
    const { email } = user;
    const userExist = await userModel.findOne({ email });
    if (userExist) {
      return res.status(400).send({
        success: false,
        message: "user already exist",
        error,
      });
    }
    const saveUser = await user.save();
    return res.status(200).send({
      success: true,
      message: "user register succc...",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error while creating user",
      error,
    });
  }
};

//fetch user
export const fetchUserController = async (req, res) => {
  try {
    const users = await userModel.find();
    if (users.length > 0) {
      return res.status(200).send({
        success: true,
        message: "user fetch syccesfully",
        users,
      });
    } else {
      return res.status(401).send({
        success: false,
        message: "There are no user",
        error,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error while fetch user",
      error,
    });
  }
};

// Update user
export const updateUserController = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await userModel.findOne({ _id: id });
    if (!userExist) {
      return res.status(401).send({
        success: false,
        message: "User not exist",
        error,
      });
    }
    const updateUser = await userModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.status(200).send({
      success: true,
      message: "User update succefully",
      updateUser,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error while user update",
      error,
    });
  }
};

//delete user
export const deleteUserController = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await userModel.findOne({ _id: id });
    if (!userExist) {
      return res.status(401).send({
        success: false,
        message: "User not exist",
        error,
      });
    }
    const deleteUser = await userModel.findByIdAndDelete(id);
    return res.status(200).send({
      success: true,
      message: "user deleted succesfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error while deleting user",
      error,
    });
  }
};
