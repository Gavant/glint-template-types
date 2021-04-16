import Component from '@glint/environment-ember-loose/ember-component';
import { Dropdown as BasicDropdown } from 'ember-basic-dropdown/addon/components/basic-dropdown';

import { DropdownActionArgs } from '@gavant/ember-bootstrap-dropdown/addon/components/dropdown-action';
import { DropdownLinkArgs } from '@gavant/ember-bootstrap-dropdown/addon/components/dropdown-link';
import { Dropdown } from '@gavant/glint-template-types/types/ember-basic-dropdown/dropdown';
import { BaseGlimmerSignature } from '@gavant/glint-template-types/utils/types';

export interface DDActionArgs extends Omit<DropdownActionArgs, 'dd'> {
    dd: BasicDropdown;
}

export interface DDLinkArgs extends Omit<DropdownLinkArgs, 'dd'> {
    dd: BasicDropdown;
}
export declare class DropdownAction extends Component<BaseGlimmerSignature<DDActionArgs>> {}
export declare class DropdownLink extends Component<BaseGlimmerSignature<DDLinkArgs>> {}
