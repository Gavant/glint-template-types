declare module 'ember-async-await-helper/components/async-await' {
    import Component from '@ember/component';

    import { SignatureWithPositionedArg } from '@gavant/glint-template-types/utils/types';

    interface AsyncAwaitSignature<T> {
        Args: {
            Named: {
                /** The promise or hash of promises to await on. */
                argument: T | PromiseLike<T> | undefined;

                /**
            A callback to run when the promise rejects. By default, it calls
            `Ember.onerror` with an error object with its `reason` property set to the
            promise's rejection reason. You can pass a different function here to
            handle the rejection more locally. Pass `null` to silence the rejection
            completely.
            */
                onReject?: (reason: any) => void;
            };
        };
        Blocks: {
            default: [T];
            else: [];
        };
    }

    export default class AsyncAwait<T> extends Component<AsyncAwaitSignature<T>> {}

    export class AsyncAwaitCurly<T> extends Component<SignatureWithPositionedArg<AsyncAwaitSignature<T>, 'argument'>> {}
}
