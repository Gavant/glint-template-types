import Component from '@ember/component';

import { BurgerMenuState } from '@gavant/glint-template-types/types/ember-burger-menu/burger-menu';

export interface BmOutletComponentSignature {
    Args: {
        state: BurgerMenuState;
        containerId: string;
    };
}

export default class BmOutlet extends Component<BmOutletComponentSignature> {}
