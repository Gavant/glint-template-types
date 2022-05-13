import Component from '@glimmer/component';

import FormValidator from '@gavant/glint-template-types/types/@gavant/gavant-ember-validations/form-validator';

import { ValidationErr } from 'validated-changeset/dist/types';

export interface InputValidatorSignature {
    Element: HTMLElement;
    Args: {
        errors: string | string[] | ValidationErr[];
        parent: typeof FormValidator;
    };
    Blocks: {
        default?: [];
    };
}

export default class InputValidator extends Component<InputValidatorSignature> {}
