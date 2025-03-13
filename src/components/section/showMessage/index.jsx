import React, { useEffect } from "react";
import cn from "./style.module.scss";
import Prism from "prismjs"; // If using Prism.js for syntax highlighting
import "prismjs/themes/prism-tomorrow.css"; // Dark theme

function ShowMessage({ formData }) {
    useEffect(() => {
        Prism.highlightAll(); // Highlight syntax after rendering
    }, [formData]);

    return (
        <div className={cn.previewSection}>
            <h3>Message Preview</h3>
            <pre>
                <code className="language-javascript">
{`const button = document.querySelector('#sendBtn');

const message = {
    name: "${formData.name || "______"}",
    email: "${formData.email || "________"}",
    message: "${formData.message || "_______"}",
    date: "Thu 21 Apr"
}

button.addEventListener('click', () => {
    form.send(message);
});`}
                </code>
            </pre>
        </div>
    );
}

export default ShowMessage;
