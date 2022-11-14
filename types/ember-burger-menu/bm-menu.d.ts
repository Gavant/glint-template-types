declare module 'ember-burger-menu/components/bm-menu' {
    import Component from '@ember/component';

    import BmMenuItem from 'ember-burger-menu/components/bm-menu-item';
    import { BurgerMenuState } from 'ember-burger-menu/components/burger-menu';

    import { WithBoundArgs } from '@glint/template';

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
}
