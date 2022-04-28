import Component from '@glimmer/component';

import { BaseGlimmerSignature, ModifyBlocks } from '@gavant/glint-template-types/utils/types';

interface FlTextareaBlocks {
    Blocks: {
        default?: [];
    };
}

import { FlTextareaArgs } from '@gavant/ember-floating-labels/addon/components/fl-textarea';
export default class FlTextarea extends Component<
    ModifyBlocks<BaseGlimmerSignature<FlTextareaArgs>, FlTextareaBlocks>
> {}
