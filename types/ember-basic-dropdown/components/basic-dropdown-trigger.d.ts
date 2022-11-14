declare module 'ember-basic-dropdown/components/basic-dropdown-trigger' {
    import Component from '@glimmer/component';

    import { Dropdown, RepositionChanges } from 'ember-basic-dropdown/components/basic-dropdown';

    interface Args {
        dropdown: Dropdown;
        eventType: 'click' | 'mousedown';
        stopPropagation: boolean;
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
        hPosition: RepositionChanges['hPosition'];
        vPosition: RepositionChanges['vPosition'];
        renderInPlace: boolean;
    }

    export interface DropdownTriggerSignature {
        Element: HTMLElement;
        Args: Args;
        Blocks: {
            default: [];
        };
    }

    export default class BasicDropdownTrigger extends Component<DropdownTriggerSignature> {}
}
