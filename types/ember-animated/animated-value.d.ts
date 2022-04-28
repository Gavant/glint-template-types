import Component from '@ember/component';
import { SignatureWithPositionedArg } from '@gavant/glint-template-types/utils/types';
import { AnimatedEachSignature } from './animated-each';

interface AnimatedValueSignature<T> {
    Args: {
        Named: AnimatedEachSignature<any>['Args']['Named'] & { value: T };
    };
    Blocks: {
        default: [T];
    };
}

export default class AnimatedValue<T> extends Component<AnimatedValueSignature<T>> {}

export class AnimatedValueCurly<T> extends Component<SignatureWithPositionedArg<AnimatedValueSignature<T>, 'value'>> {}
