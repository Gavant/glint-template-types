import Component from '@ember/component';
import { AnimatedEachSignature } from './animated-each';

type AnimatedIfSignature = {
    Args: {
        Named: AnimatedEachSignature<any>['Args']['Named'];
        Positional: { predicate: any };
    };
    Blocks: {
        default: [];
        else: [];
    };
};

export default class AnimatedIf extends Component<AnimatedIfSignature> {}

export class AnimatedIfCurly extends Component<AnimatedIfSignature> {}
