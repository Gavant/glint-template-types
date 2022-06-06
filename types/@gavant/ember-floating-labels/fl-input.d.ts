import Component from '@glimmer/component';

import { FlInputArgs } from '@gavant/ember-floating-labels/addon/components/fl-input/fl-input';
import { BaseGlimmerSignature, ModifyBlocks } from '@gavant/glint-template-types/utils/types';

interface FlInputBlocks {
    Blocks: {
        default?: [];
    };
}

export default class FlInput extends Component<ModifyBlocks<BaseGlimmerSignature<FlInputArgs>, FlInputBlocks>> {}
