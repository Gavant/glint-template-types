import Component from '@ember/component';

import { GenericChangeset } from '@gavant/ember-validations/utilities/create-changeset';

export interface ChangesetInputSignature<T> {
    Element: HTMLInputElement;
    Args: {
        changeset: GenericChangeset<T>;
        path: keyof T;
    };
}

export default class ChangesetInput<T> extends Component<ChangesetInputSignature<T>> {}
