import Component from '@glimmer/component';

import { FlTextareaArgs } from '@gavant/ember-floating-labels/addon/components/fl-textarea/fl-textarea';
import { BaseGlimmerSignature, ModifyBlocks } from '@gavant/glint-template-types/utils/types';

interface FlTextareaBlocks {
    Blocks: {
        default?: [];
    };
}

export default class FlTextarea extends Component<
    ModifyBlocks<BaseGlimmerSignature<FlTextareaArgs>, FlTextareaBlocks>
> {}
