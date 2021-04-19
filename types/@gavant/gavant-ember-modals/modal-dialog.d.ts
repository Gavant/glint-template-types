import { ComponentWithBoundArgs } from '@glint/environment-ember-loose';
import Component, { ArgsFor } from '@glint/environment-ember-loose/ember-component';

import {
    ModalDialogBodyComponent
} from '@gavant/glint-template-types/types/@gavant/gavant-ember-modals/modal-dialog/body';
import {
    ModalDialogFooterComponent
} from '@gavant/glint-template-types/types/@gavant/gavant-ember-modals/modal-dialog/footer';
import {
    ModalDialogHeaderComponent
} from '@gavant/glint-template-types/types/@gavant/gavant-ember-modals/modal-dialog/header';
import { ModalDialogArgs } from '@gavant/glint-template-types/types/ember-modal-dialog/modal-dialog';
import { BaseGlimmerSignature, ModifyYields } from '@gavant/glint-template-types/utils/types';

interface GavantModalDialogArgs extends ModalDialogArgs {
    /**
     * Size of the modal dialog via bootstrap sizes
     *
     * @type {('xs' | 'sm' | 'md' | 'lg' | 'xl')}
     * @memberof GavantModalDialogArgs
     */
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

interface ModalDialogHeaderArgs {
    title: string;
    closable: boolean;
    onClose: () => void;
}

interface ModalDialogYields {
    Yields: {
        default: [
            {
                header: ComponentWithBoundArgs<typeof ModalDialogHeaderComponent, 'closable' | 'onClose'>;
                body: typeof ModalDialogBodyComponent;
                footer: typeof ModalDialogFooterComponent;
                close: () => void;
            }
        ];
    };
}

export interface ModalDialogComponent extends ArgsFor<BaseGlimmerSignature<GavantModalDialogArgs>> {}
export declare class ModalDialogComponent extends Component<
    ModifyYields<BaseGlimmerSignature<GavantModalDialogArgs>, ModalDialogYields>
> {}

declare module '@glint/environment-ember-loose/registry' {
    export default interface Registry {
        ModalDialog: typeof ModalDialogComponent;
    }
}
