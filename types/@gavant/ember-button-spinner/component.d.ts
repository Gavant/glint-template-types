import Component from '@glimmer/component';

import type { ButtonSpinnerArgs } from '@gavant/ember-button-spinner/dist/components/button-spinner';
export interface ButtonSpinnerSignature {
    Element: HTMLButtonElement;
    Args: ButtonSpinnerArgs;
    Blocks: {
        default: [];
    };
}

export class ButtonSpinner extends Component<ButtonSpinnerSignature> {}
export default ButtonSpinner;
