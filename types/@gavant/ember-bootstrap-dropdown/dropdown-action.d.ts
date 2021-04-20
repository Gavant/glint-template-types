import Component from '@glint/environment-ember-loose/ember-component';
import { Dropdown as BasicDropdown } from 'ember-basic-dropdown/addon/components/basic-dropdown';

import { DropdownActionArgs } from '@gavant/ember-bootstrap-dropdown/addon/components/dropdown-action';
import { BaseGlimmerSignature } from '@gavant/glint-template-types/utils/types';

export interface DDActionArgs extends Omit<DropdownActionArgs, 'dd'> {
    dd: BasicDropdown;
}

export default class DropdownAction extends Component<BaseGlimmerSignature<DDActionArgs>> {}
