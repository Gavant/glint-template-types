import FormValidatorComponent from '@gavant/ember-validations/components/form-validator';
import { GenericChangeset } from '@gavant/ember-validations/utilities/create-changeset';
import FormValidatorChild from '@gavant/glint-template-types/types/@gavant/gavant-ember-validations/form-validator/child';
import InputValidator from '@gavant/glint-template-types/types/@gavant/gavant-ember-validations/input-validator';
import { ComponentWithBoundArgs } from '@glint/environment-ember-loose';
import Component from '@glint/environment-ember-loose/ember-component';

export interface FormValidatorSignature<T> {
    Args: {
        changeset: GenericChangeset<T>;
        submit: (changeset?: GenericChangeset<T>, childChangesets?: GenericChangeset<unknown>[]) => any;
    };
    Yields: {
        default: [
            GenericChangeset<T>,
            {
                submit: FormValidatorComponent['submitForm'];
                input: ComponentWithBoundArgs<typeof InputValidator, 'parent'>;
                child: ComponentWithBoundArgs<typeof FormValidatorChild, 'parent'>;
            }
        ];
    };
}

export default class FormValidator<T> extends Component<FormValidatorSignature<T>> {}
