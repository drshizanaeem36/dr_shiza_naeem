const express = require("express");
const router = express.Router();

const {
  submitContact,
  getAllContacts,
  getContactById,
  updateContactStatus,
  deleteContact,
} = require("../controllers/contactController");

const {
  contactValidationRules,
  validate,
} = require("../middleware/validateContact");

// Public
router.post("/", contactValidationRules, validate, submitContact);

// Admin (add your auth middleware here when ready)
router.get("/", getAllContacts);
router.get("/:id", getContactById);
router.patch("/:id/status", updateContactStatus);
router.delete("/:id", deleteContact);

module.exports = router;