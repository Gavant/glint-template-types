import { GenericChangeset } from '@gavant/ember-validations/utilities/create-changeset';
import FormValidatorComponent from '@gavant/glint-template-types/types/@gavant/gavant-ember-validations/form-validator';
import InputValidatorComponent from '@gavant/glint-template-types/types/@gavant/gavant-ember-validations/input-validator';
import Component from '@glint/environment-ember-loose/ember-component';

export interface FormValidatorChildSignature<T> {
    Args: {
        parent: typeof FormValidatorComponent;
        changeset: GenericChangeset<T>;
    };
    Yields: [
        changeset: GenericChangeset<T>,
        childValidator: {
            input: typeof InputValidatorComponent;
        }
    ];
}

export default class FormValidatorChildComponent<T> extends Component<FormValidatorChildSignature<T>> {}
