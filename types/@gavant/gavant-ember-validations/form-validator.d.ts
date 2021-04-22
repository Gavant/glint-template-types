import FormValidator from '@gavant/ember-validations/components/form-validator';
import FormValidatorChildComponent from '@gavant/ember-validations/components/form-validator/child';
import { InputValidatorComponent } from '@gavant/ember-validations/input-validator';
import { GenericChangeset } from '@gavant/ember-validations/utilities/create-changeset';
import { ArgsFor } from '@glint/environment-ember-loose/ember-component';

export interface FormValidatorSignature {
    Args: {
        changeset: GenericChangeset<any>;
    };
    Yields: {
        default: [
            GenericChangeset<any>,
            {
                submit: FormValidator['submitForm'];
                input: typeof InputValidatorComponent;
                child: typeof FormValidatorChildComponent;
            }
        ];
    };
}

export interface FormValidatorComponent extends ArgsFor<FormValidatorSignature> {}
export declare class FormValidatorComponent extends FormValidator {
    changeset: GenericChangeset<any>;
}
