import Component from '@glimmer/component';

import { BaseGlimmerSignature, ModifyYields } from '@gavant/glint-template-types/utils/types';

interface FlSelectYields {
    Blocks: {
        default?: [select: typeof FlSelect];
    };
}

import { FlSelectArgs } from '@gavant/ember-floating-labels/addon/components/fl-select';
export default class FlSelect extends Component<ModifyYields<BaseGlimmerSignature<FlSelectArgs>, FlSelectYields>> {}
