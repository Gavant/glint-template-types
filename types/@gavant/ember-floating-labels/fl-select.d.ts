import Component from '@glint/environment-ember-loose/glimmer-component';

import { BaseGlimmerSignature, ModifyYields } from '@gavant/glint-template-types/utils/types';

interface FlSelectYields {
    Yields: {
        default?: [select: typeof FlSelect];
    };
}

import { FlSelectArgs } from '@gavant/ember-floating-labels/addon/components/fl-select';
export default class FlSelect extends Component<ModifyYields<BaseGlimmerSignature<FlSelectArgs>, FlSelectYields>> {}
