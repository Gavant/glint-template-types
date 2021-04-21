import { BmMenuComponent } from '@gavant/glint-template-types/types/ember-burger-menu/bm-menu';
import { BmOutletComponent } from '@gavant/glint-template-types/types/ember-burger-menu/bm-outlet';
import { ComponentWithBoundArgs } from '@glint/environment-ember-loose';
import Component, { ArgsFor } from '@glint/environment-ember-loose/ember-component';

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
    Yields: {
        default: [
            {
                outlet: ComponentWithBoundArgs<typeof BmOutletComponent, 'state' | 'containerId'>;
                menu: ComponentWithBoundArgs<typeof BmMenuComponent, 'state' | 'containerId'>;
                state: BurgerMenuState;
            }
        ];
    };
}

export interface BurgerMenuComponent extends ArgsFor<BurgerMenuComponentSignature> {}
export declare class BurgerMenuComponent extends Component<BurgerMenuComponentSignature> {}

declare module '@glint/environment-ember-loose/registry' {
    export default interface Registry {
        BurgerMenu: typeof BurgerMenuComponent;
    }
}
