import FormValidator from '@gavant/glint-template-types/types/@gavant/gavant-ember-validations/form-validator';
import Component from '@glint/environment-ember-loose/ember-component';

export interface InputValidatorSignature {
    Args: {
        errors: string[];
        parent: typeof FormValidator;
    };
    Yields: {
        default?: [];
    };
}

export default class InputValidator extends Component<InputValidatorSignature> {}
