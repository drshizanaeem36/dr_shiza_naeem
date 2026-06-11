import React, { useState } from "react";
import "./Contact.css";

const initialState = { name: "", phone: "", email: "", message: "" };

const Form = () => {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState({ loading: false, success: null, error: null });
  const [fieldErrors, setFieldErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    else if (formData.name.length > 100) errors.name = "Name cannot exceed 100 characters";

    if (!formData.phone.trim()) errors.phone = "Phone number is required";
    else if (!/^[+]?[\d\s\-(). ]{7,20}$/.test(formData.phone)) errors.phone = "Invalid phone number";

    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/.test(formData.email))
      errors.email = "Please enter a valid email";

    if (!formData.message.trim()) errors.message = "Message is required";
    else if (formData.message.length > 2000) errors.message = "Message cannot exceed 2000 characters";

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: false, success: null, error: null });

    // Client-side validation
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setStatus({ loading: false, success: null, error: "Please fix the errors above." });
      return;
    }

    setStatus({ loading: true, success: null, error: null });

    const body = new URLSearchParams({
      "form-name": "contact",
      ...formData,
    }).toString();

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });

      if (res.ok) {
        setStatus({
          loading: false,
          success: "Your message has been sent successfully!",
          error: null,
        });
        setFormData(initialState);
        setFieldErrors({});
      } else {
        throw new Error("Submission failed. Please try again.");
      }
    } catch (err) {
      setStatus({ loading: false, success: null, error: err.message });
    }
  };

  return (
    <div className="ct-form-side">
      <div className="message-eyebrow">
        <h4>Send Message</h4>
      </div>

      {status.success && (
        <div className="ct-alert ct-alert--success">{status.success}</div>
      )}
      {status.error && (
        <div className="ct-alert ct-alert--error">{status.error}</div>
      )}

      {/* Hidden HTML form so Netlify detects it at build time */}
      <form name="contact" data-netlify="true" hidden>
        <input type="text" name="name" />
        <input type="tel" name="phone" />
        <input type="email" name="email" />
        <textarea name="message" />
      </form>

      {/* Actual interactive form */}
      <form
        onSubmit={handleSubmit}
        noValidate
        name="contact"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />

        <div className="ct-form-row">
          <div className="ct-field">
            <input
              className={`ct-input ${fieldErrors.name ? "ct-input--error" : ""}`}
              placeholder="Your name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
            />
            {fieldErrors.name && (
              <span className="ct-field-error">{fieldErrors.name}</span>
            )}
          </div>

          <div className="ct-field">
            <input
              className={`ct-input ${fieldErrors.phone ? "ct-input--error" : ""}`}
              placeholder="Phone number"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
            />
            {fieldErrors.phone && (
              <span className="ct-field-error">{fieldErrors.phone}</span>
            )}
          </div>
        </div>

        <div className="ct-field">
          <input
            className={`ct-input ${fieldErrors.email ? "ct-input--error" : ""}`}
            placeholder="Email address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          {fieldErrors.email && (
            <span className="ct-field-error">{fieldErrors.email}</span>
          )}
        </div>

        <div className="ct-field">
          <textarea
            className={`ct-textarea ${fieldErrors.message ? "ct-input--error" : ""}`}
            placeholder="Tell me about your consultation..."
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
          />
          {fieldErrors.message && (
            <span className="ct-field-error">{fieldErrors.message}</span>
          )}
        </div>

        <button className="ct-submit" type="submit" disabled={status.loading}>
          {status.loading ? "Sending..." : "Submit"}
          {!status.loading && (
            <i className="fa-solid fa-arrow-right" aria-hidden="true" />
          )}
        </button>
      </form>
    </div>
  );
};

export default Form;