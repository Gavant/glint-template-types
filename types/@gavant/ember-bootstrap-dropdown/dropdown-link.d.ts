import Component from '@glint/environment-ember-loose/ember-component';
import { Dropdown as BasicDropdown } from 'ember-basic-dropdown/addon/components/basic-dropdown';

import { DropdownLinkArgs } from '@gavant/ember-bootstrap-dropdown/addon/components/dropdown-link';
import { BaseGlimmerSignature } from '@gavant/glint-template-types/utils/types';

export interface DDLinkArgs extends Omit<DropdownLinkArgs, 'dd'> {
    dd: BasicDropdown;
}

export default class DropdownLink extends Component<BaseGlimmerSignature<DDLinkArgs>> {}
