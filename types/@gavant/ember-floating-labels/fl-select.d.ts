import Component from '@glimmer/component';

import FlSelect, { FlSelectArgs } from '@gavant/ember-floating-labels/addon/components/fl-select/fl-select';

export interface FlSelectSignature {
    Element: HTMLSelectElement;
    Args: FlSelectArgs;
    Blocks: {
        default?: [select: typeof FlSelect];
    };
}

export default class FloatingLabelSelect extends Component<FlSelectSignature> {}
