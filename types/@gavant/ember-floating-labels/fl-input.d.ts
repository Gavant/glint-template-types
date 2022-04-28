import Component from '@glimmer/component';

import { BaseGlimmerSignature, ModifyBlocks } from '@gavant/glint-template-types/utils/types';

interface FlInputBlocks {
    Blocks: {
        default?: [];
    };
}

import { FlInputArgs } from '@gavant/ember-floating-labels/addon/components/fl-input';
export default class FlInput extends Component<ModifyBlocks<BaseGlimmerSignature<FlInputArgs>, FlInputBlocks>> {}
