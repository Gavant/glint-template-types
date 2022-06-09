import Component from '@glimmer/component';

import { FlInputArgs } from '@gavant/ember-floating-labels/addon/components/fl-input/fl-input';

export interface FlInputSignature {
    Element: HTMLInputElement;
    Args: FlInputArgs;
    Blocks: {
        default?: [];
    };
}

export default class FlInput extends Component<FlInputSignature> {}
