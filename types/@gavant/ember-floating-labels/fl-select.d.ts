import Component from '@glimmer/component';

import { FlSelectArgs } from '@gavant/ember-floating-labels/addon/components/fl-select/fl-select';
import { BaseGlimmerSignature, ModifyBlocks } from '@gavant/glint-template-types/utils/types';

interface FlSelectBlocks {
    Blocks: {
        default?: [select: typeof FlSelect];
    };
}

export default class FlSelect extends Component<ModifyBlocks<BaseGlimmerSignature<FlSelectArgs>, FlSelectBlocks>> {}
