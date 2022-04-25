import { WithBoundArgs } from '@glint/template';
import Component from '@ember/component';

import { ModalDialogBody } from '@gavant/glint-template-types/types/@gavant/gavant-ember-modals/modal-dialog/body';
import { ModalDialogFooter } from '@gavant/glint-template-types/types/@gavant/gavant-ember-modals/modal-dialog/footer';
import { ModalDialogHeader } from '@gavant/glint-template-types/types/@gavant/gavant-ember-modals/modal-dialog/header';
import { ModalDialogArgs } from '@gavant/glint-template-types/types/ember-modal-dialog/modal-dialog';
import { BaseGlimmerSignature, ModifyYields } from '@gavant/glint-template-types/utils/types';

interface GavantModalDialogArgs extends ModalDialogArgs {
    /**
     * Size of the modal dialog via bootstrap sizes
     *
     * @type {('xs' | 'sm' | 'md' | 'lg' | 'xl')}
     * @memberof GavantModalDialogArgs
     */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /**
     * Tells us whether the modal can be closed
     *
     * @type {boolean}
     * @memberof GavantModalDialogArgs
     */
    closable?: boolean;
}

interface ModalDialogYields {
    Blocks: {
        default: [
            {
                header: WithBoundArgs<typeof ModalDialogHeader, 'closable' | 'onClose'>;
                body: typeof ModalDialogBody;
                footer: typeof ModalDialogFooter;
                close: () => void;
            }
        ];
    };
}

export class ModalDialog extends Component<
    ModifyYields<BaseGlimmerSignature<GavantModalDialogArgs>, ModalDialogYields>
> {}
export default ModalDialog;
