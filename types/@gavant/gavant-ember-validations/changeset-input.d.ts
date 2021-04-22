import { GenericChangeset } from '@gavant/ember-validations/utilities/create-changeset';
import Component from '@glint/environment-ember-loose/ember-component';

export interface ChangesetInputSignature<T> {
    Args: {
        changeset: GenericChangeset<T>;
        path: keyof T;
    };
}

export default class ChangesetInputComponent<T> extends Component<ChangesetInputSignature<T>> {}
