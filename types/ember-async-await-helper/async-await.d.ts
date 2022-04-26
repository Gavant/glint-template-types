import Component from '@ember/component';

interface AsyncAwaitSignature<T> {
    Args: {
        Positional: {
            /** The promise or hash of promises to await on. */
            argument: T | PromiseLike<T> | undefined;
        };
        Named: {
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

export class AsyncAwaitCurly<T> extends Component<AsyncAwaitSignature<T>> {}
