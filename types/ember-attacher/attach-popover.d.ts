declare module 'ember-attacher/components/attach-popover' {
    import Component from '@ember/component';

    interface AttachPopoverSignature {
        Args: {
            id?: string;

            /**
             * The animation used to present the animation.
             * Options: ['fade', 'fill', 'none', 'perspective', 'scale', 'shift']
             * @default 'fill'
             */
            animation?: string;

            /**
             * Whether or not an arrow will be displayed next to the attachment.
             * @default false
             */
            arrow?: boolean;

            /** A class that will be applied to the attachment. */
            class?: string;

            /**
             * The flip priority of the attacment.
             * Space-delimited string, any combination of ['left', 'right', 'top', 'bottom']
             *
             * Example: 'left top bottom'
             */
            flip?: string;

            /**
             * The delay, in milliseconds, before the attachment will be hidden.
             * @default 0
             */
            hideDelay?: number;

            /**
             * The duration, in milliseconds, of the hide animation.
             * @default 300
             */
            hideDuration?: number;

            /**
             * Events that will cause the attachment to hide, typically in reference to the target.
             *
             * Space-delimited string, any combination of:
             * ['click', 'clickout', 'mouseleave blur escapekey']
             *
             * @default 'mouseleave blur escapekey'
             */
            hideOn?: string;

            /**
             * Interactive tooltips will not close when clicked or hovered over.
             * @default false
             */
            interactive?: boolean;

            /**
             * Set this to true if you have an interactive attachment that hides on mouseout and the
             * attachment is offset from its target. This should only be the case if you are using custom
             * CSS that offsets that attachment.
             * @default false
             */
            isOffset?: boolean;

            /**
             * Whether or not the attachment is initially shown.
             * @default false
             */
            isShown?: boolean;

            /**
             * If true, the attachment will only be inserted into the DOM on the first "show" trigger.
             * Useful for performance reasons, but will hide your attachment from search engines.
             * @default false
             */
            lazyRender?: boolean;

            /** An options object that will be merged into popperOptions. */
            modifiers?: object;

            /**
             * A function to be fired when the attachment's visibility changes. The new visibility is passed
             * to the function as an arg.
             */
            onChange?: (isVisible: boolean) => void;

            /**
             * The initial position of the attachment.
             * @default 'top'
             */
            placement?: 'top' | 'left' | 'right' | 'bottom';

            /**
             * The container where the attachment's DOM will be inserted.
             * @default '.ember-application'
             */
            popperContainer?: string;

            /** An options object that will be passed to Popper.js, the positioning library. */
            popperOptions?: object;

            /**
             * NOT RECOMMENDED: We currently allow you to pass an explicit target, but this may be removed
             * in a future release.
             * Please provide your thoughts here: https://github.com/kybishop/ember-attacher/issues/109
             */
            popperTarget?: Element;

            /**
             * Whether or not to render the attachment in place in the DOM, as opposed to
             * on the popperContainer. NOTE: Rendering in place can cause z-index issues.
             * @default false;
             */
            renderInPlace?: boolean;

            /**
             * The delay, in milliseconds, before the attachment will be shown.
             * @default 0
             */
            showDelay?: number;

            /**
             * The duration, in milliseconds, of the show animation.
             * @default 300
             */
            showDuration?: number;

            /**
             * Events on the target that will cause the attachment to show. For performance reasons, we
             * recommend using some combination of 'mouseenter', 'focus', and 'click'
             * @default 'mouseenter focus'
             */
            showOn?: string;

            /**
             * Whether to add event listeners for attachment show and hide in the capturing phase rather
             * than the bubbling phase. This should be set to true when there are elements on the page that
             * are stopping event propagation in the bubbling phase, and as a result preventing correct
             * showing and hiding of popovers and tooltips.
             * @default false;
             */
            useCapture?: boolean;
        };
        Blocks: {
            default: [
                {
                    emberPopper: {
                        disableEventListeners: () => void;
                        enableEventListeners: () => void;
                        scheduleUpdate: () => void;
                        update: () => void;
                    };
                    hide: () => void;
                }
            ];
        };
    }

    export default class AttachPopover extends Component<AttachPopoverSignature> {}
}
