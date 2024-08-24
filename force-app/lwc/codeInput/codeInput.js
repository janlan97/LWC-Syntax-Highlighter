import { LightningElement, api } from 'lwc';
import CodeModal from 'c/codeInputModal';

const FORM_ELEMENT_CLASS = 'slds-form-element slds-hint-parent test-id__output-root slds-form-element_stacked';

export default class CodeInput extends LightningElement {
    @api language = 'javascript';
    @api label;
    @api fieldName;
    @api readOnly = false;
    _code = '';

    @api
    set code(value) {
        this._code = value;
    }

    get code() {
        return this._code;
    }

    get codeInputClass() {
        return `${FORM_ELEMENT_CLASS} slds-form-element_${this.readOnly ? 'readonly' : 'edit'}`;
    }

    openModal() {
        CodeModal.open({
            language: this.language,
            code: this.code,
            label: this.label,
            size: 'large',
            readOnly: this.readOnly,
            fieldName: this.fieldName
        }).then((result) => {
            if (!this.readOnly && this._code !== result.value) {
                this.dispatchEvent(new CustomEvent('codeinputchanged', { detail: { result } }));
            }
        });
    }
}
