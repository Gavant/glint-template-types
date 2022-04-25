import ArrayProxy from '@ember/array/proxy';

import Component from '@ember/component';

import { BurgerMenuState } from '@gavant/glint-template-types/types/ember-burger-menu/burger-menu';

export interface BmMenuItemComponentSignature {
    Args: {
        tagName: string;
        readonly menuItems?: ArrayProxy<BmMenuItem>;
        dismissOnClick?: boolean;
        state: BurgerMenuState;
    };
}

export default class BmMenuItem extends Component<BmMenuItemComponentSignature> {}
