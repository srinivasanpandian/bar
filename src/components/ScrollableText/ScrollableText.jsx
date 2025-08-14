import React from 'react';
import './ScrollableText.css';

const ScrollableText = ({
    backgroundColor = '#000000',
    textColor = '#FFFFFF',
    content = [
        'Experience', 'the', 'soul', 'of', 'India', 'in', 'the', 'heart', 'of', 'Dallas'
    ]
}) => {
    return (
        <section
            className="scrollable-text-section"
            style={{ backgroundColor }}
        >
            {/* Dynamic top border line */}
            <div
                className="scrollable-text-top-border"
                style={{
                    background: `linear-gradient(90deg, ${backgroundColor} 0%, ${textColor} 25%, ${textColor} 75%, ${backgroundColor} 100%)`
                }}
            ></div>

            <div className="scrollable-text-container">
                <div className="scrollable-text">
                    {content.map((word, index) => (
                        <span key={index} style={{
                            WebkitTextStroke: `2px ${textColor}`,
                            textStroke: `2px ${textColor}`
                        }}>
                            {word}
                        </span>
                    ))}
                </div>
                <div className="scrollable-text" aria-hidden="true">
                    {content.map((word, index) => (
                        <span key={`duplicate-${index}`} style={{
                            WebkitTextStroke: `2px ${textColor}`,
                            textStroke: `2px ${textColor}`
                        }}>
                            {word}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ScrollableText; 