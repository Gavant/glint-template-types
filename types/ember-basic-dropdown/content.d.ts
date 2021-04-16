import Component from '@glint/environment-ember-loose/glimmer-component';
import { Dropdown } from 'ember-basic-dropdown/addon/components/basic-dropdown';

import { BaseGlimmerSignature } from '@gavant/glint-template-types/utils/types';

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

export declare class DropdownContent extends Component<BaseGlimmerSignature<DropdownContentArgs>> {}
