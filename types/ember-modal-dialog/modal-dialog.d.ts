import Component from '@ember/component';

import { BaseGlimmerSignature } from '@gavant/glint-template-types/utils/types';

type positions = 'top' | 'right' | 'bottom' | 'left' | 'center' | 'middle' | 'elementCenter';
type positionCombinations = `${positions} ${positions}`;
export interface ModalDialogArgs {
    /**
     * A boolean, when true makes modal animatable using liquid-fire (requires liquid-wormhole to be installed, and for tethering situations liquid-tether. Having these optional dependencies installed and not specifying animatable will make animatable=true be the default.)
     *
     * @type {boolean}
     * @memberof ModalDialogArgs
     */
    animatable?: boolean;
    /**
     * Only can be used if `tetherTarget` is specified.
     *
     * @type {positionCombinations}
     * @memberof ModalDialogArgs
     */
    attachment?: positionCombinations;
    /**
     * Indicates whether clicking outside a modal without an overlay should close the modal. Useful if your modal isn't the focus of interaction, and you want hover effects to still work outside the modal.
     *
     * @type {boolean}
     * @memberof ModalDialogArgs
     */
    clickOutsideToClose?: boolean;
    /**
     * Only can be used if `tetherTarget` is specified.
     *
     * @type {string}
     * @memberof ModalDialogArgs
     */
    constraints?: string;
    /**
     * CSS class name(s) to append to container divs. Set this from template.
     *
     * @type {string}
     * @memberof ModalDialogArgs
     */
    containerClass?: string;
    /**
     * CSS class names to append to container divs. This is a concatenated property, so it does not replace the default container class (default: 'ember-modal-dialog'. If you subclass this component, you may define this in your subclass.)
     *
     * @type {string}
     * @memberof ModalDialogArgs
     */
    containerClassNames?: string;
    /**
     * Toggles presence of overlay div in DOM
     *
     * @type {boolean}
     * @memberof ModalDialogArgs
     */
    hasOverlay?: boolean;
    /**
     * Only can be used if `tetherTarget` is specified.
     *
     * @type {string}
     * @memberof ModalDialogArgs
     */
    offset?: string;
    /**
     * The action handler for the dialog's `onClose` action. This action triggers when the user clicks the modal overlay.
     *
     * @memberof ModalDialogArgs
     */
    onClose?: () => void;
    /**
     * An action to be called when the overlay is clicked. If this action is specified, clicking the overlay will invoke it instead of `onClose`.
     *
     * @memberof ModalDialogArgs
     */
    onClickOverlay?: () => void;
    /**
     * CSS class name(s) to append to overlay divs. Set this from template.
     *
     * @type {string}
     * @memberof ModalDialogArgs
     */
    overlayClass?: string;
    /**
     * CSS class names to append to overlay divs. This is a concatenated property, so it does not replace the default overlay class (default: 'ember-modal-overlay'. If you subclass this component, you may define this in your subclass.)
     *
     * @type {string}
     * @memberof ModalDialogArgs
     */
    overlayClassNames?: string;
    /**
     * either 'parent' or 'sibling', to control whether the overlay div is rendered as a parent element of the container div or as a sibling to it (default: 'parent')
     *
     * @type {('parent' | 'sibling')}
     * @memberof ModalDialogArgs
     */
    overlayPosition?: 'parent' | 'sibling';
    /**
     * A boolean, when true renders the modal without wormholing or tethering, useful for including a modal in a style guide
     *
     * @type {boolean}
     * @memberof ModalDialogArgs
     */
    renderInPlace?: boolean;
    /**
     * Only can be used if `tetherTarget` is specified.
     *
     * @type {positionCombinations}
     * @memberof ModalDialogArgs
     */
    targetAttachment?: positionCombinations;
    /**
     * Only can be used if `tetherTarget` is specified.
     *
     * @type {string}
     * @memberof ModalDialogArgs
     */
    targetOffset?: string;
    /**
     * Only can be used if `tetherTarget` is specified.
     *
     * @type {string}
     * @memberof ModalDialogArgs
     */
    tetherClassPrefix?: string;
    /**
     * Element selector or element reference for that serves as the reference for modal position
     *
     * If you specify a tetherTarget, you are opting into "tethering" behavior, and you must have either ember-tether or liquid-tether installed.
     * @type {string}
     * @memberof ModalDialogArgs
     */
    tetherTarget?: string;
    /**
     * Indicates translucence of overlay, toggles presence of `translucent` CSS selector
     *
     * @type {boolean}
     * @memberof ModalDialogArgs
     */
    translucentOverlay?: boolean;
    /**
     * CSS class name(s) to append to wrapper divs. Set this from template.
     *
     * @type {string}
     * @memberof ModalDialogArgs
     */
    wrapperClass?: string;
    /**
     * CSS class names to append to wrapper divs. This is a concatenated property, so it does not replace the default container class (default: 'ember-modal-wrapper'. If you subclass this component, you may define this in your subclass.)
     *
     * @type {string}
     * @memberof ModalDialogArgs
     */
    wrapperClassNames?: string;
}

export class ModalDialog extends Component<BaseGlimmerSignature<ModalDialogArgs>> {}
export default ModalDialog;
