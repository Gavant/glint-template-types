import Component from '@glimmer/component';

interface ModalDialogBodyArgs {}
export interface ModalDialogBodySignature {
    Args: ModalDialogBodyArgs;
    Blocks: {
        default: [];
    };
}

export class ModalDialogBody extends Component<ModalDialogBodySignature> {}
export default ModalDialogBody;
