import { ComponentWithBoundArgs } from '@glint/environment-ember-loose';
import Component from '@glint/environment-ember-loose/ember-component';

import BmMenuItem from '@gavant/glint-template-types/types/ember-burger-menu/bm-menu-item';
import { BurgerMenuState } from '@gavant/glint-template-types/types/ember-burger-menu/burger-menu';

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
                item: ComponentWithBoundArgs<typeof BmMenuItem, 'tagName' | 'menuItems' | 'dismissOnClick' | 'state'>;
            }
        ];
    };
}

export default class BmMenu extends Component<BmMenuComponentSignature> {}
