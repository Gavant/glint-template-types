import Component from '@glimmer/component';

import type { ButtonArgs } from '@gavant/ember-button-basic/components/button/button';
export interface ButtonSignature {
    Element: HTMLButtonElement;
    Args: ButtonArgs;
    Blocks: {
        default: [];
    };
}

export class Button extends Component<ButtonSignature> {}
export default Button;
