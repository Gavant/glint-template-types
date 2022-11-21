declare module 'ember-on-helper/helpers/on' {
    export interface OnArgs {
        /** To fire an event listener only once pass true */
        once?: boolean;

        /**
         * If true, you promise to not call event.preventDefault(). This allows the browser to optimize the processing of this event and not block the UI thread. This prevent scroll jank.
         *
         * If you still call event.preventDefault(), an assertion will be raised.
         */
        passive?: boolean;

        /** To listen for an event during the capture phase already, use the capture option */
        capture?: boolean;
    }
}
