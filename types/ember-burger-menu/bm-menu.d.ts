import { WithBoundArgs } from '@glint/template';
import Component from '@ember/component';

import BmMenuItem from '@gavant/glint-template-types/types/ember-burger-menu/bm-menu-item';
import { BurgerMenuState } from '@gavant/glint-template-types/types/ember-burger-menu/burger-menu';

export interface BmMenuComponentSignature {
    Args: {
        itemTagName?: string;
        dismissOnItemClick?: boolean;
        state: BurgerMenuState;
        containerId: string;
    };
    Blocks: {
        default: [
            {
                item: WithBoundArgs<typeof BmMenuItem, 'tagName' | 'menuItems' | 'dismissOnClick' | 'state'>;
            }
        ];
    };
}

export default class BmMenu extends Component<BmMenuComponentSignature> {}
