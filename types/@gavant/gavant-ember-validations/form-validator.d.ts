import FormValidator from '@gavant/ember-validations/components/form-validator';
import FormValidatorChildComponent from '@gavant/ember-validations/components/form-validator/child';
import { GenericChangeset } from '@gavant/ember-validations/utilities/create-changeset';
import InputValidatorComponent from '@gavant/glint-template-types/types/@gavant/gavant-ember-validations/input-validator';
import Component from '@glint/environment-ember-loose/glimmer-component';

export interface FormValidatorSignature<T> {
    Args: {
        changeset: GenericChangeset<any>;
    };
    Yields: {
        default: [
            GenericChangeset<T>,
            {
                submit: FormValidator['submitForm'];
                input: typeof InputValidatorComponent;
                child: typeof FormValidatorChildComponent;
            }
        ];
    };
}

export default class FormValidatorComponent<T> extends Component<FormValidatorSignature<T>> {}
