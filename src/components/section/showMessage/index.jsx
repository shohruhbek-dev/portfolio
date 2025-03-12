import React from 'react';
import cn from './style.module.scss';

function ShowMessage({ formData }) {
    return (
        <div className={cn.previewSection}>
            <h3>Message Preview</h3>
            <p><strong>Name:</strong> {formData.name || "______ "}</p>
            <p><strong>Email:</strong> {formData.email || "________"}</p>
            <p><strong>Message:</strong> {formData.message || "_______"}</p>
            <p><strong>Date:</strong> Thu 21 Apr</p>
        </div>
    );
}

export default ShowMessage;
