import { SignatureWithPositionedArg } from '@gavant/glint-template-types/utils/types';
import Component from '@glint/environment-ember-loose/ember-component';
import { AnimatedEachSignature } from './animated-each';

interface AnimatedValueSignature<T> {
    Args: Omit<AnimatedEachSignature<any>['Args'], 'items'> & {
        value: T;
    };
    Yields: {
        default: [T];
    };
}

export default class AnimatedValue<T> extends Component<AnimatedValueSignature<T>> {}

export class AnimatedValueCurly<T> extends Component<SignatureWithPositionedArg<AnimatedValueSignature<T>, 'value'>> {}
