import Component from '@glint/environment-ember-loose/glimmer-component';

import { BaseGlimmerSignature } from '@gavant/glint-template-types/utils/types';

interface ModalDialogHeaderArgs {
    title: string;
    closable: boolean;
    onClose: () => void;
}

declare class ModalDialogHeaderComponent extends Component<BaseGlimmerSignature<ModalDialogHeaderArgs>> {}

export { ModalDialogHeaderComponent };
export default ModalDialogHeaderComponent;
