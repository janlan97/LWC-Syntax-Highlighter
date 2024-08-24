import { LightningElement, api } from 'lwc';
import { publishLog } from 'c/lwcLogger';
import prismJS from '@salesforce/resourceUrl/PrismJS';
import prismCSS from '@salesforce/resourceUrl/PrismCSS';
import beautifyJS from '@salesforce/resourceUrl/beautifyJS';
import beautifyCSS from '@salesforce/resourceUrl/beautifyCSS';
import beautifyHTML from '@salesforce/resourceUrl/beautifyHTML';
import { loadScript, loadStyle } from 'lightning/platformResourceLoader';

export default class SyntaxHighlighter extends LightningElement {
    @api language = 'json';
    _code = '';
    _librariesLoaded = false;

    @api
    set code(value) {
        this._code = value;
        if (this._librariesLoaded) {
            this.highlightCode();
        } else {
            this.setPlainText();
        }
    }

    get code() {
        return this._code;
    }

    async renderedCallback() {
        if (!this._librariesLoaded) {
            Promise.all([
                loadScript(this, prismJS),
                loadStyle(this, prismCSS),
                loadScript(this, beautifyJS),
                loadScript(this, beautifyCSS),
                loadScript(this, beautifyHTML),
            ])
            .then(() => {
                this._librariesLoaded = true;
                this.highlightCode();
            })
            .catch(error => {
                console.error('Error loading Prism.js or beautifiers', error);
                publishLog(
                    'Logger',
                    'SyntaxHighlighter exception occurred',
                    JSON.stringify(error),
                    false,
                    null
                );
                this.setPlainText();
            });
        } else {
            this.highlightCode();
        }
    }

    async highlightCode() {
        const codeElement = this.template.querySelector('code');
        if (codeElement) {
            let isHTML = RegExp.prototype.test.bind(/(<([^>]+)>)/i);
            if (isHTML(this._code) && window.html_beautify) {
                codeElement.textContent = window.html_beautify(this._code);
            } else if (window.js_beautify) {
                codeElement.textContent = window.js_beautify(this._code);
            } else {
                codeElement.textContent = this._code;
            }
            if (window.Prism) {
                await window.Prism.highlightElement(codeElement);
            }
        }
    }

    setPlainText() {
        const codeElement = this.template.querySelector('code');
        if (codeElement) {
            codeElement.textContent = this._code;
        }
    }

    get computedClass() {
        return `language-${this.language}`;
    }
}
