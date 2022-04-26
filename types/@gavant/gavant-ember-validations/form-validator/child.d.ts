import Component from '@ember/component';

import { GenericChangeset } from '@gavant/ember-validations/utilities/create-changeset';
import FormValidatorComponent from '@gavant/glint-template-types/types/@gavant/gavant-ember-validations/form-validator';
import InputValidatorComponent from '@gavant/glint-template-types/types/@gavant/gavant-ember-validations/input-validator';

export interface FormValidatorChildSignature<T> {
    Element: HTMLDivElement;
    Args: {
        parent: typeof FormValidatorComponent;
        changeset: GenericChangeset<T>;
    };
    Blocks: {
        default: [
            changeset: GenericChangeset<T>,
            childValidator: {
                input: typeof InputValidatorComponent;
            }
        ];
    };
}

export default class FormValidatorChild<T> extends Component<FormValidatorChildSignature<T>> {}
