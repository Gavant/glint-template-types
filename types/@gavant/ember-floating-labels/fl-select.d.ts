import Component from '@glimmer/component';

import { BaseGlimmerSignature, ModifyBlocks } from '@gavant/glint-template-types/utils/types';

interface FlSelectBlocks {
    Blocks: {
        default?: [select: typeof FlSelect];
    };
}

import { FlSelectArgs } from '@gavant/ember-floating-labels/addon/components/fl-select';
export default class FlSelect extends Component<ModifyBlocks<BaseGlimmerSignature<FlSelectArgs>, FlSelectBlocks>> {}
