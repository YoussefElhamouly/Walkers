import { Router } from "express";
import passport from "passport";
import Users from "../models/usersSchema.js";
import { register } from "../controllers/authController.js";

const auth = Router();

const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ message: "Not authenticated" });
};

auth.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({ message: info.message });
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      return res.json({
        message: "Login successful",
        user: user.getPublicProfile(),
      });
    });
  })(req, res, next);
});

auth.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

auth.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    res.redirect(process.env.CLIENT_URL || "http://localhost:3000");
  }
);

auth.post("/register", register);

auth.post("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.json({ message: "Logout successful" });
  });
});

auth.get("/me", isAuthenticated, (req, res) => {
  res.json({
    user: req.user.getPublicProfile(),
  });
});

auth.get("/status", (req, res) => {
  res.json({
    authenticated: req.isAuthenticated(),
    user: req.isAuthenticated() ? req.user.getPublicProfile() : null,
  });
});

export default auth;
