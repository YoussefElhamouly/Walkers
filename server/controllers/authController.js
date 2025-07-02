import Users from "../models/usersSchema.js";

const register = async (req, res, next) => {
  try {
    const { email, password, firstName, lastName } = req.body;
    const existingUser = await Users.findOne({
      email,
    });

    if (existingUser) {
      return res.status(400).json({
        message: "User with this email already exists",
      });
    }

    const user = new Users({
      email,
      password,
      firstName,
      lastName,
    });

    await user.save();
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      return res.status(200).json({
        message: "Registration successful",
        user: user.getPublicProfile(),
      });
    });
  } catch (error) {
    return next(error);
  }
};

export { register };
