import { api } from 'lwc';
import LightningModal from 'lightning/modal';
import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class CodeInputModal extends LightningModal {

    @api language = 'javascript';
    @api code = '';
    @api label;
    @api readOnly = false;
    @api fieldName;
    _inputValue = this.code;

    async handleCopy() {
        if(navigator.clipboard){
            navigator.clipboard.writeText(this.code)
            .then(res => {
                const evt = new ShowToastEvent({
                    title: 'Success',
                    message: 'Copied.',
                    variant: 'success',
                  });
                  this.dispatchEvent(evt);
            })
            .catch(error => {
                const evt = new ShowToastEvent({
                    title: 'Error',
                    message: 'Problem with copying occured. ' + error,
                    variant: 'error',
                  });
                  this.dispatchEvent(evt);
            });
        } else {
            document.execCommand('copy');
        }
     }

     handleInputChange(e) {
        this.code = e.target.value;
        this._inputValue = e.target.value;
     }

     handleSave(e) {
        this.close({ fieldName: this.fieldName, value: this._inputValue ?? '' });
     }

}