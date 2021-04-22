import Component from '@glint/environment-ember-loose/ember-component';

export interface InputValidatorSignature {
    Args: {
        errors: string | string[] | ValidationErr[];
    };
    Yields: {
        default: any;
    };
}

export default class InputValidatorComponent extends Component<InputValidatorSignature> {}
