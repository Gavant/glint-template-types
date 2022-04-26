import { WithBoundArgs } from '@glint/template';
import Component from '@glimmer/component';
import { DropdownActions } from 'ember-basic-dropdown/addon/components/basic-dropdown';
import { CalculatePosition } from 'ember-basic-dropdown/addon/utils/calculate-position';

import { DropdownContent } from '@gavant/glint-template-types/types/ember-basic-dropdown/content';
import { DropdownTrigger } from '@gavant/glint-template-types/types/ember-basic-dropdown/trigger';
import { BaseGlimmerSignature, ModifyYields } from '@gavant/glint-template-types/utils/types';

export interface DropdownArgs {
    initiallyOpened?: boolean;
    renderInPlace?: boolean;
    verticalPosition?: string;
    horizontalPosition?: string;
    destination?: string;
    disabled?: boolean;
    dropdownId?: string;
    matchTriggerWidth?: boolean;
    onInit?: Function;
    registerAPI?: Function;
    onOpen?: Function;
    onClose?: Function;
    calculatePosition?: CalculatePosition;
}

interface DropdownYields {
    Blocks: {
        default: [
            {
                uniqueId: string;
                isOpen: boolean;
                disabled: boolean;
                actions: DropdownActions;
                Trigger: WithBoundArgs<
                    typeof DropdownTrigger,
                    'dropdown' | 'hPosition' | 'renderInPlace' | 'vPosition'
                >;
                Content: WithBoundArgs<
                    typeof DropdownContent,
                    | 'dropdown'
                    | 'hPosition'
                    | 'renderInPlace'
                    | 'preventScroll'
                    | 'rootEventType'
                    | 'vPosition'
                    | 'destination'
                    | 'top'
                    | 'left'
                    | 'right'
                    | 'width'
                    | 'height'
                    | 'otherStyles'
                >;
            }
        ];
    };
}

export class Dropdown extends Component<ModifyYields<BaseGlimmerSignature<DropdownArgs>, DropdownYields>> {}
export default Dropdown;
