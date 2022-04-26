import Component from '@ember/component';
import { AnimatedEachSignature } from './animated-each';

interface AnimatedValueSignature<T> {
    Args: {
        Named: AnimatedEachSignature<any>['Args']['Named'];
        Positional: {
            value: T;
        };
    };
    Blocks: {
        default: [T];
    };
}

export default class AnimatedValue<T> extends Component<AnimatedValueSignature<T>> {}

export class AnimatedValueCurly<T> extends Component<AnimatedValueSignature<T>> {}
