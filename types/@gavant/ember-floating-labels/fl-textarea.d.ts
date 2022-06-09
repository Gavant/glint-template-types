import Component from '@glimmer/component';

import { FlTextareaArgs } from '@gavant/ember-floating-labels/addon/components/fl-textarea/fl-textarea';

interface FlTextareaBlocks {
    Blocks: {
        default?: [];
    };
}

export interface FlTextAreaSignature {
    Element: HTMLTextAreaElement;
    Args: FlTextareaArgs;
    Blocks: {
        default?: [];
    };
}
export default class FlTextarea extends Component<FlTextAreaSignature> {}
