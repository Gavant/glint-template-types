declare module 'ember-burger-menu/components/bm-outlet' {
    import Component from '@ember/component';

    import { BurgerMenuState } from 'ember-burger-menu/components/burger-menu';

    export interface BmOutletComponentSignature {
        Args: {
            state: BurgerMenuState;
            containerId: string;
        };
    }

    export default class BmOutlet extends Component<BmOutletComponentSignature> {}
}
