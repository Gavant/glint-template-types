declare module 'ember-animated/components/animated-if' {
    import Component from '@ember/component';

    import { AnimatedEachSignature } from 'ember-animated/components/animated-each';

    import { SignatureWithPositionedArg } from '@gavant/glint-template-types/utils/types';

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
}
