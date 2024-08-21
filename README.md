# LWC Syntax Highlighter

The `SyntaxHighlighter` component is a flexible Lightning Web Component (LWC) designed for Salesforce developers who want to seamlessly integrate code highlighting into their Lightning apps. With built-in support for various programming languages, this component leverages Prism.js to deliver visually appealing syntax highlighting.

*Component on record form*
![image](https://github.com/user-attachments/assets/9473c9c2-633f-4fba-9f2e-11a2f312c57a)

*Opened modal*
![image](https://github.com/user-attachments/assets/af391a79-dc2e-48e0-81d4-691e88596a0e)

## Key Features

- **Multi-Language Support**: Easily highlight code in various languages like JavaScript, HTML, Apex, and more by simply setting the `language` attribute.
- **Prism.js Integration**: Utilizes Prism.js for robust and customizable syntax highlighting.
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
<c-code-input class="code-input" language="json" code={field.value} label={field.label}></c-code-input>
```
