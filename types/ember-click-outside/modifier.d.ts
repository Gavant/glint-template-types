declare module 'ember-click-outside/modifiers/on-click-outside' {
    import Modifier from 'ember-modifier';

    interface OnClickOutsideSignature<K extends keyof DocumentEventMap = 'click'> {
        Args: {
            Named: {
                /** Undocumented */
                capture?: boolean;

                /** Undocumented */
                eventType?: K;

                /** Undocumented */
                exceptSelector?: string;
            };
            Positional: [handler: (event: DocumentEventMap[K]) => void];
        };
    }

    export default class OnClickOutsideModifier extends Modifier<OnClickOutsideSignature> {}
}
