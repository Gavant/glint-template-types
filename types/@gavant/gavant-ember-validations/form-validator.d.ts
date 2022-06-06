import Component from '@glimmer/component';

import FormValidatorComponent from '@gavant/ember-validations/components/form-validator/form-validator';
import { GenericChangeset } from '@gavant/ember-validations/utilities/create-changeset';
import FormValidatorChild from '@gavant/glint-template-types/types/@gavant/gavant-ember-validations/form-validator/child';
import InputValidator from '@gavant/glint-template-types/types/@gavant/gavant-ember-validations/input-validator';

import { WithBoundArgs } from '@glint/template';

export interface FormValidatorYield<T> {
    submit: FormValidatorComponent<T>['submitForm'];
    input: WithBoundArgs<typeof InputValidator, 'parent'>;
    child: WithBoundArgs<typeof FormValidatorChild, 'parent'>;
}

export interface FormValidatorSignature<T> {
    Element: HTMLFormElement;
    Args: {
        changeset: GenericChangeset<T>;
        submit: (changesets: [GenericChangeset<T>, GenericChangeset<unknown>[]]) => any;
    };
    Blocks: {
        default: [GenericChangeset<T>, FormValidatorYield<T>];
    };
}

export default class FormValidator<T> extends Component<FormValidatorSignature<T>> {}
