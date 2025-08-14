import React, { useState, useEffect } from 'react';
import './TypewriterText.css';

const TypewriterText = ({ words = [], className = '', prefix = '', suffix = '' }) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    // Don't run the effect if words array is empty or undefined
    useEffect(() => {
        if (!words || words.length === 0) return;

        const currentWord = words[currentWordIndex];

        if (isDeleting) {
            // Deleting effect
            if (currentText.length > 0) {
                const timeout = setTimeout(() => {
                    setCurrentText(currentText.slice(0, -1));
                }, 100);
                return () => clearTimeout(timeout);
            } else {
                setIsDeleting(false);
                setCurrentWordIndex((prev) => (prev + 1) % words.length);
            }
        } else {
            // Typing effect
            if (currentText.length < currentWord.length) {
                const timeout = setTimeout(() => {
                    setCurrentText(currentWord.slice(0, currentText.length + 1));
                }, 150);
                return () => clearTimeout(timeout);
            } else {
                // Wait before starting to delete
                const timeout = setTimeout(() => {
                    setIsDeleting(true);
                }, 2000);
                return () => clearTimeout(timeout);
            }
        }
    }, [currentText, currentWordIndex, isDeleting, words]);

    // Reset state when words change
    useEffect(() => {
        if (words && words.length > 0) {
            setCurrentWordIndex(0);
            setCurrentText('');
            setIsDeleting(false);
        }
    }, [words]);

    // Don't render anything if no words are provided
    if (!words || words.length === 0) {
        return null;
    }

    return (
        <span className={`typewriter-text ${className}`}>
            {prefix}
            <span className="typing-text">{currentText}</span>
            <span className="cursor">|</span>
            {suffix}
        </span>
    );
};

export default TypewriterText; 