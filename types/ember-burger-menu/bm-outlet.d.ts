import { BurgerMenuState } from '@gavant/glint-template-types/types/ember-burger-menu/burger-menu';
import Component from '@glint/environment-ember-loose/ember-component';

export interface BmOutletComponentSignature {
    Args: {
        state: BurgerMenuState;
        containerId: string;
    };
}

export default class BmOutletComponent extends Component<BmOutletComponentSignature> {}
