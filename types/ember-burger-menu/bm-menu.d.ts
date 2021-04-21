import { BmMenuItemComponent } from '@gavant/glint-template-types/types/ember-burger-menu/bm-menu-item';
import { BurgerMenuState } from '@gavant/glint-template-types/types/ember-burger-menu/burger-menu';
import { ComponentWithBoundArgs } from '@glint/environment-ember-loose';
import Component from '@glint/environment-ember-loose/ember-component';

export interface BmMenuComponentSignature {
    Args: {
        itemTagName?: string;
        dismissOnItemClick?: boolean;
        state: BurgerMenuState;
        containerId: string;
    };
    Yields: {
        default: [
            {
                item: ComponentWithBoundArgs<
                    typeof BmMenuItemComponent,
                    'tagName' | 'menuItems' | 'dismissOnClick' | 'state'
                >;
            }
        ];
    };
}

export declare class BmMenuComponent extends Component<BmMenuComponentSignature> {}

declare module '@glint/environment-ember-loose/registry' {
    export default interface Registry {
        BmMenu: typeof BmMenuComponent;
    }
}
