declare module 'ember-basic-dropdown/components/basic-dropdown' {
    import Component from '@glimmer/component';

    import DropdownContent from 'ember-basic-dropdown/components/basic-dropdown-content';
    import DropdownTrigger from 'ember-basic-dropdown/components/basic-dropdown-trigger';
    import { CalculatePosition } from 'ember-basic-dropdown/utils/calculate-position';

    import { WithBoundArgs } from '@glint/template';

    export interface DropdownActions {
        toggle: (e?: Event) => void;
        close: (e?: Event, skipFocus?: boolean) => void;
        open: (e?: Event) => void;
        reposition: (...args: any[]) => undefined | RepositionChanges;
    }
    export interface Dropdown {
        uniqueId: string;
        disabled: boolean;
        isOpen: boolean;
        actions: DropdownActions;
    }

    interface Args {
        initiallyOpened?: boolean;
        renderInPlace?: boolean;
        verticalPosition?: string;
        horizontalPosition?: string;
        destination?: string;
        disabled?: boolean;
        dropdownId?: string;
        matchTriggerWidth?: boolean;
        onInit?: Function;
        registerAPI?: Function;
        onOpen?: Function;
        onClose?: Function;
        calculatePosition?: CalculatePosition;

        rootEventType?: boolean;
        preventScroll?: boolean;
        // triggerComponent: ComponentLike;
        // contentComponent: ComponentLike;
    }

    type RepositionChanges = {
        hPosition: string;
        vPosition: string;
        otherStyles: Record<string, string | number | undefined>;
        top?: string;
        left?: string;
        right?: string;
        width?: string;
        height?: string;
    };

    export interface BasicDropdownSignature {
        Element: HTMLDivElement;
        Args: Args;
        Blocks: {
            default: [
                {
                    uniqueId: string;
                    isOpen: boolean;
                    disabled: boolean;
                    actions: DropdownActions;
                    Trigger: WithBoundArgs<
                        typeof DropdownTrigger,
                        'dropdown' | 'hPosition' | 'renderInPlace' | 'vPosition'
                    >;
                    Content: WithBoundArgs<
                        typeof DropdownContent,
                        | 'dropdown'
                        | 'hPosition'
                        | 'renderInPlace'
                        | 'preventScroll'
                        | 'rootEventType'
                        | 'vPosition'
                        | 'destination'
                        | 'top'
                        | 'left'
                        | 'right'
                        | 'width'
                        | 'height'
                        | 'otherStyles'
                    >;
                }
            ];
        };
    }

    export default class BasicDropdown extends Component<BasicDropdownSignature> {}
}
