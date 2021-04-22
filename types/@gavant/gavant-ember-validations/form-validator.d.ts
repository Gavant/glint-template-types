import FormValidator from '@gavant/ember-validations/components/form-validator';
import FormValidatorChildComponent from '@gavant/glint-template-types/types/@gavant/gavant-ember-validations/form-validator/child';
import { GenericChangeset } from '@gavant/ember-validations/utilities/create-changeset';
import InputValidatorComponent from '@gavant/glint-template-types/types/@gavant/gavant-ember-validations/input-validator';
import { ComponentWithBoundArgs } from '@glint/environment-ember-loose';
import Component from '@glint/environment-ember-loose/ember-component';

export interface FormValidatorSignature<T> {
    Args: {
        changeset: GenericChangeset<T>;
        submit: (changeset?: GenericChangeset<T>, childChangesets?: GenericChangeset<any>) => any;
    };
    Yields: {
        default: [
            GenericChangeset<T>,
            {
                submit: FormValidator['submitForm'];
                input: ComponentWithBoundArgs<typeof InputValidatorComponent, 'parent'>;
                child: ComponentWithBoundArgs<typeof FormValidatorChildComponent, 'parent'>;
            }
        ];
    };
}

export default class FormValidatorComponent<T> extends Component<FormValidatorSignature<T>> {}
