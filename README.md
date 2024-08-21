# LWC Syntax Highlighter

The SyntaxHighlighter component is designed to transform plain code or JSON text into readable and visually appealing outputs with proper formatting and syntax coloring. It leverages both Prism.js for syntax highlighting and js-beautify for code formatting.

<p align="center">
  <img src="https://github.com/user-attachments/assets/dd6630a8-4697-4e33-8ab4-c5d33fcf24c3">
</p>
</br>
<p align="center">
  <img src="https://github.com/user-attachments/assets/92e79fd3-4317-4097-b412-d3144e0c2e1f">
</p>
<p align="center">Standard long text area...</p>
</br>
<p align="center">
  <img src="https://github.com/user-attachments/assets/ef2feb1a-6775-499f-9e5c-79643bc25e1a">
</p>
<p align="center">Transformed to SyntaxHighlighter output</p>
</br>
<p align="center">
  <img src="https://github.com/user-attachments/assets/4606d03d-c204-4a5b-93a6-5c4cefa7ec40">
</p>
<p align="center">Modal</p>
</br>

## Key Features

- **Multi-Language Support**: Easily highlight code in various languages like JavaScript, HTML, Apex, and more by simply setting the `language` attribute.
- **Prism.js Integration**: Utilizes Prism.js for robust and customizable syntax highlighting.
- **js-beautify Integration**: Automatically formats your code according to the specified language, making it more readable and maintainable. You can include your own formatting options.
- **Dynamic Code Rendering**: The component dynamically renders the highlighted code based on the `code` attribute passed to it.
- **Modal Included**: Supports modals for code editing and copying, making it versatile for both display and interaction. Just click on input!

## Components

This functionality consists of three LWC components:

- **`SyntaxHighlighter`**: A base component that displays code with syntax highlighting.
- **`CodeInput`**: A wrapper component that mimics the styling of a record form field, allowing for seamless integration with standard Salesforce UI.
- **`CodeInputModal`**: A modal component that presents the code in a larger view, with the added functionality to copy the code directly from the modal.

## Usage

To use the `SyntaxHighlighter` component, simply include it in your Lightning Web Component with the desired language and code:

**Base component usage:**
```html
<c-syntax-highlighter language="javascript" code="const example = 'Hello World!';"></c-syntax-highlighter>
```
**Record Form Field Wrapper:**
```html
<c-code-input language="json" code={field.value} label={field.label}></c-code-input>
```

Enjoy!
