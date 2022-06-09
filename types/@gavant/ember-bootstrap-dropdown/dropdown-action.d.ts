import Component from '@ember/component';

import { Dropdown as BasicDropdown } from 'ember-basic-dropdown/addon/components/basic-dropdown';

import { DropdownActionArgs } from '@gavant/ember-bootstrap-dropdown/addon/components/dropdown-action';

export interface DDActionArgs extends Omit<DropdownActionArgs, 'dd'> {
    dd: BasicDropdown;
}

export interface DDActionSignature {
    Element: HTMLButtonElement;
    Args: DDActionArgs;
    Blocks: {
        default: [];
    };
}

export default class DropdownAction extends Component<DDActionSignature> {}
