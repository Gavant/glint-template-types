import Helper from '@ember/component/helper';
import { OnArgs } from './-private/shared';

interface OnWindowHelperSignature<K extends keyof WindowEventMap> {
    Args: { Named: OnArgs; Positional: [eventName: K, handler: (event: WindowEventMap[K]) => void] };
    Return: null;
}

export default class OnWindowHelper<K extends keyof WindowEventMap> extends Helper<OnWindowHelperSignature<K>> {}
