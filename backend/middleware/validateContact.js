const { body, validationResult } = require("express-validator");

// Validation rules
const contactValidationRules = [
  body("name")
    .notEmpty().withMessage("Name is required")
    .trim()
    .isLength({ max: 100 }).withMessage("Name cannot exceed 100 characters"),

  body("phone")
  .notEmpty().withMessage("Phone number is required")
  .trim()
  .matches(/^[+]?[\d\s\-().]{7,20}$/).withMessage("Invalid phone number"),

  body("email")
    .notEmpty().withMessage("Email is required")
    .isEmail().withMessage("Please enter a valid email")
    .normalizeEmail(),

  body("message")
    .notEmpty().withMessage("Message is required")
    .trim()
    .isLength({ max: 2000 }).withMessage("Message cannot exceed 2000 characters"),
];

// Middleware that checks for validation errors
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      success: false,
      errors: errors.array().map((e) => ({ field: e.path, message: e.msg })),
    });
  }
  next();
};

module.exports = { contactValidationRules, validate };