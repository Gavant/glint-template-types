import Component from '@glimmer/component';

import { BaseGlimmerSignature, ModifyYields } from '@gavant/glint-template-types/utils/types';

interface FlInputYields {
    Blocks: {
        default?: [];
    };
}

import { FlInputArgs } from '@gavant/ember-floating-labels/addon/components/fl-input';
export default class FlInput extends Component<ModifyYields<BaseGlimmerSignature<FlInputArgs>, FlInputYields>> {}
