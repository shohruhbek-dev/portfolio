import React from "react";
import cn from "./style.module.scss";
import clsx from "clsx";

const MessageCard = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className={cn.messageCard}>
      <form onSubmit={handleSubmit} className={cn.form}>
        <div className={cn.formGroup}>
          <label htmlFor="name" className={cn.label}>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={clsx(cn.input, { [cn.inputFilled]: formData.name })}
          />
        </div>
        <div className={cn.formGroup}>
          <label htmlFor="email" className={cn.label}>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={clsx(cn.input, { [cn.inputFilled]: formData.email })}
          />
        </div>
        <div className={cn.formGroup}>
          <label htmlFor="message" className={cn.label}>Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={clsx(cn.textarea, { [cn.inputFilled]: formData.message })}
          />
        </div>
        <button type="submit" className={cn.button}>Submit</button>
      </form>
    </div>
  );
};

export default MessageCard;
