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
    // Clear field error on change
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: null }));
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });
    setFieldErrors({});

    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        // Handle validation errors (422)
        if (data.errors) {
          const mapped = {};
          data.errors.forEach(({ field, message }) => {
            mapped[field] = message;
          });
          setFieldErrors(mapped);
          setStatus({ loading: false, success: null, error: "Please fix the errors above." });
          return;
        }
        throw new Error(data.message || "Something went wrong.");
      }

      setStatus({ loading: false, success: data.message, error: null });
      setFormData(initialState);
    } catch (err) {
      setStatus({ loading: false, success: null, error: err.message });
    }
  };

  return (
    <div className="ct-form-side">
      <div className="message-eyebrow">
        <h4>Send Message</h4>
      </div>

      {status.success && <div className="ct-alert ct-alert--success">{status.success}</div>}
      {status.error && <div className="ct-alert ct-alert--error">{status.error}</div>}

      <form onSubmit={handleSubmit} noValidate>
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
            {fieldErrors.name && <span className="ct-field-error">{fieldErrors.name}</span>}
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
            {fieldErrors.phone && <span className="ct-field-error">{fieldErrors.phone}</span>}
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
          {fieldErrors.email && <span className="ct-field-error">{fieldErrors.email}</span>}
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
          {fieldErrors.message && <span className="ct-field-error">{fieldErrors.message}</span>}
        </div>

        <button className="ct-submit" type="submit" disabled={status.loading}>
          {status.loading ? "Sending..." : "Submit"}
          {!status.loading && <i className="fa-solid fa-arrow-right" aria-hidden="true" />}
        </button>
      </form>
    </div>
  );
};

export default Form;
