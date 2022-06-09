import Component from '@glimmer/component';

import { Dropdown } from 'ember-basic-dropdown/addon/components/basic-dropdown';

export interface DropdownTriggerArgs {
    dropdown: Dropdown;
    eventType: 'click' | 'mousedown';
    stopPropagation: boolean;
    hPosition: string;
    renderInPlace: boolean;
    vPosition: string;
    htmlTag?: string;
    onBlur?: (dropdown?: Dropdown, event?: FocusEvent) => void;
    onClick?: (dropdown?: Dropdown, event?: MouseEvent) => void;
    onFocus?: (dropdown?: Dropdown, event?: FocusEvent) => void;
    onFocusIn?: (dropdown?: Dropdown, event?: FocusEvent) => void;
    onFocusOut?: (dropdown?: Dropdown, event?: FocusEvent) => void;
    onKeyDown?: (dropdown?: Dropdown, event?: KeyboardEvent) => void;
    onMouseDown?: (dropdown?: Dropdown, event?: MouseEvent) => void;
    onMouseEnter?: (dropdown?: Dropdown, event?: MouseEvent) => void;
    onMouseLeave?: (dropdown?: Dropdown, event?: MouseEvent) => void;
    onTouchEnd?: (dropdown?: Dropdown, event?: TouchEvent) => void;
}

export interface DropdownTriggerSignature {
    Element: HTMLElement;
    Args: DropdownTriggerArgs;
    Blocks: {
        default: [];
    };
}

export class DropdownTrigger extends Component<DropdownTriggerSignature> {}
export default DropdownTrigger;
