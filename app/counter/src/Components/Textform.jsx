import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');
    const [style, setStyle] = useState({}); // State for styling the text

    // Handler for Upper Case
    const handleUpper = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };

    // Handler for Lower Case
    const handleLower = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };

    // Handler for Capitalize
    const handleCapitalize = () => {
        const capitalizedText = text
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
        setText(capitalizedText);
    };

    // Handler for camelCase
    const handleCamelCase = () => {
        const camelCaseText = text
            .split(' ')
            .map((word, index) => index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join('');
        setText(camelCaseText);
    };

    // Handler for snake_case
    const handleSnakeCase = () => {
        const snakeCaseText = text.replace(/\s+/g, '_').toLowerCase();
        setText(snakeCaseText);
    };

    // Handler for PascalCase
    const handlePascalCase = () => {
        const pascalCaseText = text
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join('');
        setText(pascalCaseText);
    };

    // Handler for Bold Text
    const handleBold = () => {
        setStyle((prevStyle) => ({
            ...prevStyle,
            fontWeight: prevStyle.fontWeight === 'bold' ? 'normal' : 'bold',
        }));
    };

    // Handler for Italic Text
    const handleItalic = () => {
        setStyle((prevStyle) => ({
            ...prevStyle,
            fontStyle: prevStyle.fontStyle === 'italic' ? 'normal' : 'italic',
        }));
    };

    // Handler for Underline Text
    const handleUnderline = () => {
        setStyle((prevStyle) => ({
            ...prevStyle,
            textDecoration: prevStyle.textDecoration === 'underline' ? 'none' : 'underline',
        }));
    };

    // Handler for Text Change
    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    // Reset Text and Style
    const handleReset = () => {
        setText('');
        setStyle({});
    };

    return (
        <div className="mainForm">
            <form>
                <div>
                    <label htmlFor="textEditor" style={{ textAlign: 'center' }}>
                        Text Area
                    </label>
                    <textarea
                        value={text}
                        onChange={handleOnChange}
                        id="textEditor"
                        rows="6"
                        style={style} // Apply dynamic styles here
                    ></textarea>
                </div>
            </form>
            <div className="buttons">
                <button type="button" onClick={handleUpper}>Upper Case</button>
                <button type="button" onClick={handleLower}>Lower Case</button>
                <button type="button" onClick={handleCapitalize}>Capitalize</button>
                <br />
                <button type="button" onClick={handleCamelCase}>Camel Case</button>
                <button type="button" onClick={handleSnakeCase}>Snake Case</button>
                <button type="button" onClick={handlePascalCase}>Pascal Case</button>
                <br /><button type="button" onClick={handleBold}>Bold</button>
                <button type="button" onClick={handleItalic}>Italic</button>
                <button type="button" onClick={handleUnderline}>Underline</button>
                <button type="button" onClick={handleReset}>Reset</button>
            </div>

            <div className="container">
                <h2>Your Text Summary is:</h2>
                <p>Number of characters: {text.length}</p>
                <p>Number of words: {text.trim() ? text.trim().split(/\s+/).length : 0}</p>
                <p>Time to read: {(0.008 * (text.trim() ? text.trim().split(/\s+/).length : 0)).toFixed(2)} minutes</p>
                <h2>Edited Text:</h2>
                <p style={style}>{text}</p> {/* Styled preview */}
            </div>
        </div>
    );
}
