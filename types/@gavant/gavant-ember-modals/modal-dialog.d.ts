import Component from '@ember/component';

import { ModalDialogBody } from '@gavant/glint-template-types/types/@gavant/gavant-ember-modals/modal-dialog/body';
import { ModalDialogFooter } from '@gavant/glint-template-types/types/@gavant/gavant-ember-modals/modal-dialog/footer';
import { ModalDialogHeader } from '@gavant/glint-template-types/types/@gavant/gavant-ember-modals/modal-dialog/header';
import { ModalDialogArgs } from '@gavant/glint-template-types/types/ember-modal-dialog/modal-dialog';

import { WithBoundArgs } from '@glint/template';

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

export interface ModalDialogSignature {
    Args: GavantModalDialogArgs;
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

export class ModalDialog extends Component<ModalDialogSignature> {}
export default ModalDialog;
