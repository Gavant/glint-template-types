import Component from '@glimmer/component';

import { Dropdown } from 'ember-basic-dropdown/addon/components/basic-dropdown';

export interface DropdownContentArgs {
    transitioningInClass?: string;
    transitionedInClass?: string;
    transitioningOutClass?: string;
    isTouchDevice?: boolean;
    destination: string;
    dropdown: Dropdown;
    hPosition: string;
    vPosition: string;
    renderInPlace: boolean;
    preventScroll?: boolean;
    rootEventType: 'click' | 'mousedown';
    top: string | undefined;
    left: string | undefined;
    right: string | undefined;
    width: string | undefined;
    height: string | undefined;
    otherStyles: Record<string, string>;
    onFocusIn?: (dropdown?: Dropdown, event?: FocusEvent) => void;
    onFocusOut?: (dropdown?: Dropdown, event?: FocusEvent) => void;
    onMouseEnter?: (dropdown?: Dropdown, event?: MouseEvent) => void;
    onMouseLeave?: (dropdown?: Dropdown, event?: MouseEvent) => void;
    shouldReposition?: (mutations: MutationRecord[], dropdown: Dropdown) => boolean;
}

export interface DropdownContentSignature {
    Element: HTMLElement;
    Args: DropdownContentArgs;
    Blocks: {
        default?: [];
    };
}

export class DropdownContent extends Component<DropdownContentSignature> {}
export default DropdownContent;
