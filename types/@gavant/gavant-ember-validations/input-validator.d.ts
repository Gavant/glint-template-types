import FormValidatorComponent from '@gavant/glint-template-types/types/@gavant/gavant-ember-validations/form-validator';
import Component from '@glint/environment-ember-loose/ember-component';

export interface InputValidatorSignature {
    Args: {
        errors: string | string[];
        parent: typeof FormValidatorComponent;
    };
    Yields: {
        default: any;
    };
}

export default class InputValidatorComponent extends Component<InputValidatorSignature> {}
