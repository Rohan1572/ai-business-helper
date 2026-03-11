import React, { useState } from "react";

/**
 * Reusable AI output display box with a copy button.
 */
function OutputBox({ content, title = "AI Response" }) {
    const [copied, setCopied] = useState(false);

    if (!content) return null;

    const handleCopy = () => {
        navigator.clipboard.writeText(content).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <div className="output-wrapper">
            <div className="output-header">
                <span className="output-header-title">
                    <span>✦</span>
                    {title}
                </span>
                <button
                    className={`copy-btn${copied ? " copied" : ""}`}
                    onClick={handleCopy}
                    title="Copy to clipboard"
                >
                    {copied ? "✓ Copied!" : "⎘ Copy"}
                </button>
            </div>
            <div className="output-body">{content}</div>
        </div>
    );
}

export default OutputBox;
