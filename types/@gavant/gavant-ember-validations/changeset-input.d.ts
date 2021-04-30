import Component from '@glint/environment-ember-loose/ember-component';

import { GenericChangeset } from '@gavant/ember-validations/utilities/create-changeset';

export interface ChangesetInputSignature<T> {
    Element: HTMLElement;
    Args: {
        changeset: GenericChangeset<T>;
        path: keyof T;
    };
}

export default class ChangesetInput<T> extends Component<ChangesetInputSignature<T>> {}
