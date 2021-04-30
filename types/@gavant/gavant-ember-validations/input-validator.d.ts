import Component from '@glint/environment-ember-loose/ember-component';

import FormValidator from '@gavant/glint-template-types/types/@gavant/gavant-ember-validations/form-validator';

import { ValidationErr } from 'validated-changeset/dist/types';

export interface InputValidatorSignature {
    element: HTMLElement;
    Args: {
        errors: string | string[] | ValidationErr[];
        parent: typeof FormValidator;
    };
    Yields: {
        default?: [];
    };
}

export default class InputValidator extends Component<InputValidatorSignature> {}
