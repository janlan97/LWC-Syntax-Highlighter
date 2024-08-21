import { LightningElement, api } from 'lwc';
import CodeModal from 'c/codeInputModal';
export default class CodeInput extends LightningElement {
    @api language = 'javascript';
    @api code = '';
    @api label;

    openModal() {
        CodeModal.open({
            language : this.language,
            code: this.code,
            label: this.label,
            size: 'large'
        });
    }
}
