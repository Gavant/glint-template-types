import Helper from '@glint/environment-ember-loose/ember-component/helper';
import { OnArgs } from './-private/shared';

interface OnDocumentHelperSignature<K extends keyof DocumentEventMap> {
    Args: OnArgs;
    PositionalArgs: [eventName: K, handler: (event: DocumentEventMap[K]) => void];
    Return: null;
}

export default class OnDocumentHelper<K extends keyof DocumentEventMap> extends Helper<OnDocumentHelperSignature<K>> {}
