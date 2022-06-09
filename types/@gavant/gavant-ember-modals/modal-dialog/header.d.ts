import Component from '@glimmer/component';

interface ModalDialogHeaderArgs {
    title: string;
    closable: boolean;
    onClose: () => void;
}

export interface ModalDialogHeaderSignature {
    Args: ModalDialogHeaderArgs;
    Blocks: {
        default: [];
    };
}

export class ModalDialogHeader extends Component<ModalDialogHeaderSignature> {}
export default ModalDialogHeader;
