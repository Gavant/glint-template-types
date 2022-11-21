declare module 'ember-animated/components/animated-value' {
    import Component from '@ember/component';

    import { AnimatedEachSignature } from 'ember-animated/components/animated-each';

    import { SignatureWithPositionedArg } from '@gavant/glint-template-types/utils/types';

    interface AnimatedValueSignature<T> {
        Args: {
            Named: AnimatedEachSignature<any>['Args']['Named'] & { value: T };
        };
        Blocks: {
            default: [T];
        };
    }

    export default class AnimatedValue<T> extends Component<AnimatedValueSignature<T>> {}

    export class AnimatedValueCurly<T> extends Component<
        SignatureWithPositionedArg<AnimatedValueSignature<T>, 'value'>
    > {}
}
