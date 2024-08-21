import { LightningElement, api } from 'lwc';
import prismJS from '@salesforce/resourceUrl/PrismJS';
import prismCSS from '@salesforce/resourceUrl/PrismCSS';
import beautifyJS from '@salesforce/resourceUrl/beautifyJS';
import beautifyCSS from '@salesforce/resourceUrl/beautifyCSS';
import beautifyHTML from '@salesforce/resourceUrl/beautifyHTML';
import { loadScript, loadStyle } from 'lightning/platformResourceLoader';

export default class SyntaxHighlighter extends LightningElement {
    @api language = 'javascript';
    @api code = '';

    async renderedCallback() {
        Promise.all([
            loadScript(this, prismJS),
            loadStyle(this, prismCSS),
            loadScript(this, beautifyJS),
            loadScript(this, beautifyCSS),
            loadScript(this, beautifyHTML),
        ])
        .then(() => {
            this.highlightCode();
        })
        .catch(error => {
            console.error('Error loading Prism.js', error);
        });
    }

    async highlightCode() {
        const codeElement = this.template.querySelector('code');
        if (codeElement) {
            let isHTML = RegExp.prototype.test.bind(/(<([^>]+)>)/i);
            if (isHTML(this.code) && window.html_beautify) {
                codeElement.textContent = window.html_beautify(this.code);
            } else if (window.js_beautify) {
                codeElement.textContent =  window.js_beautify(this.code);
            } else {
                codeElement.textContent = this.code;
            }
            if (window.Prism) {
                window.Prism.highlightElement(codeElement);
            }
        }
    }

    get computedClass() {
        return `language-${this.language}`;
    }
}
