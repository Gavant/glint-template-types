declare module 'ember-basic-dropdown/components/basic-dropdown-content' {
import Component from '@glimmer/component';

import { Dropdown, RepositionChanges } from 'ember-basic-dropdown/components/basic-dropdown';

        interface Args {
        transitioningInClass?: string;
        transitionedInClass?: string;
        transitioningOutClass?: string;
        isTouchDevice?: boolean;
        destination: string;
        dropdown: Dropdown;
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
        hPosition: RepositionChanges['hPosition'];
        vPosition: RepositionChanges['vPosition'];
    }
    type RootMouseDownHandler = (ev: MouseEvent | TouchEvent) => void;

    export interface DropdownContentSignature {
        Element: HTMLElement;
        Args: Args;
        Blocks: {
            default?: [];
        };
    }

    export default class BasicDropdownContent extends Component<DropdownContentSignature> {}
}
