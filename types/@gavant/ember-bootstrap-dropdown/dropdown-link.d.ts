import Component from '@ember/component';

import { Dropdown as BasicDropdown } from 'ember-basic-dropdown/addon/components/basic-dropdown';

import { DropdownLinkArgs } from '@gavant/ember-bootstrap-dropdown/addon/components/dropdown-link';

export interface DDLinkArgs extends Omit<DropdownLinkArgs, 'dd'> {
    dd: BasicDropdown;
}
export interface DDLinkSignature {
    Element: HTMLElement;
    Args: DDLinkArgs;
    Blocks: {
        default: [];
    };
}

export default class DropdownLink extends Component<DDLinkSignature> {}
