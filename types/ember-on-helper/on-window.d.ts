declare module 'ember-on-helper/helpers/on-window' {
    import Helper from '@ember/component/helper';

    import { OnArgs } from '@gavant/glint-template-types/types/ember-on-helper/-private/shared';

    interface OnWindowHelperSignature<K extends keyof WindowEventMap> {
        Args: { Named: OnArgs; Positional: [eventName: K, handler: (event: WindowEventMap[K]) => void] };
        Return: null;
    }

    export default class OnWindowHelper<K extends keyof WindowEventMap> extends Helper<OnWindowHelperSignature<K>> {}
}
