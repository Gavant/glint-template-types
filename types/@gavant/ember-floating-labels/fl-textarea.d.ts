import Component from '@glimmer/component';

import { BaseGlimmerSignature, ModifyYields } from '@gavant/glint-template-types/utils/types';

interface FlTextareaYields {
    Blocks: {
        default?: [];
    };
}

import { FlTextareaArgs } from '@gavant/ember-floating-labels/addon/components/fl-textarea';
export default class FlTextarea extends Component<
    ModifyYields<BaseGlimmerSignature<FlTextareaArgs>, FlTextareaYields>
> {}
