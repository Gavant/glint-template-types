declare module 'ember-burger-menu/components/burger-menu' {
    import Component from '@ember/component';

    import BmMenu from 'ember-burger-menu/components/bm-menu';
    import BmOutlet from 'ember-burger-menu/components/bm-outlet';

    import { WithBoundArgs } from '@glint/template';

    export type BurgerMenuAnimation =
        | 'slide'
        | 'reveal'
        | 'push'
        | 'fall-down'
        | 'open-door'
        | 'push-rotate'
        | 'rotate-out'
        | 'scale-up'
        | 'scale-down'
        | 'scale-rotate'
        | 'slide-reverse'
        | 'squeeze';

    export type BurgerMenuItemAnimation = 'push' | 'stack';

    export type BurgerMenuPosition = 'left' | 'right';

    export interface BurgerMenuState {
        open: boolean;
        width: number;
        position: string;
        animation: string;
        itemAnimation: string;
        customAnimation: string;
        actions: {
            open: () => void;
            close: () => void;
            toggle: () => void;
        };
    }

    export interface BurgerMenuComponentSignature {
        Args: {
            open?: boolean;
            animation?: BurgerMenuAnimation;
            itemAnimation?: BurgerMenuItemAnimation;
            customAnimation?: string;
            position?: BurgerMenuPosition;
            width?: number;
            locked?: boolean;
            translucentOverlay?: boolean;
            dismissOnClick?: boolean;
            dismissOnEsc?: boolean;
            gesturesEnabled?: boolean;
            minSwipeDistance?: number;
            maxSwipeTime?: number;
        };
        Blocks: {
            default: [
                {
                    outlet: WithBoundArgs<typeof BmOutlet, 'state' | 'containerId'>;
                    menu: WithBoundArgs<typeof BmMenu, 'state' | 'containerId'>;
                    state: BurgerMenuState;
                }
            ];
        };
    }

    export default class BurgerMenu extends Component<BurgerMenuComponentSignature> {}
}
