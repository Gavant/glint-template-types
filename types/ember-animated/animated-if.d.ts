import Component from '@ember/component';
import { SignatureWithPositionedArg } from '@gavant/glint-template-types/utils/types';
import { AnimatedEachSignature } from './animated-each';

type AnimatedIfSignature = {
    Args: {
        Named: AnimatedEachSignature<any>['Args']['Named'] & { predicate: any };
    };
    Blocks: {
        default: [];
        else: [];
    };
};

export default class AnimatedIf extends Component<AnimatedIfSignature> {}

export class AnimatedIfCurly extends Component<SignatureWithPositionedArg<AnimatedIfSignature, 'predicate'>> {}
