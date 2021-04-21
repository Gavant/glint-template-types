import ArrayProxy from '@ember/array/proxy';
import { BurgerMenuState } from '@gavant/glint-template-types/types/ember-burger-menu/burger-menu';
import Component from '@glint/environment-ember-loose/ember-component';

export interface BmMenuItemComponentSignature {
    Args: {
        tagName: string;
        readonly menuItems?: ArrayProxy<BmMenuItemComponent>;
        dismissOnClick?: boolean;
        state: BurgerMenuState;
    };
}

export default class BmMenuItemComponent extends Component<BmMenuItemComponentSignature> {}
