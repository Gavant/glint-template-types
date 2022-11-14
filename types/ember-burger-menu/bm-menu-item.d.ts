declare module 'ember-burger-menu/components/bm-menu-item' {
    import ArrayProxy from '@ember/array/proxy';
    import Component from '@ember/component';

    import { BurgerMenuState } from 'ember-burger-menu/components/burger-menu';

    export interface BmMenuItemComponentSignature {
        Args: {
            tagName: string;
            readonly menuItems?: ArrayProxy<BmMenuItem>;
            dismissOnClick?: boolean;
            state: BurgerMenuState;
        };
    }

    export default class BmMenuItem extends Component<BmMenuItemComponentSignature> {}
}
