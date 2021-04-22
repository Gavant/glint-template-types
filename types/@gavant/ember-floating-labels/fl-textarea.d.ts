import Component from '@glint/environment-ember-loose/glimmer-component';

import { BaseGlimmerSignature, ModifyYields } from '@gavant/glint-template-types/utils/types';

interface FlTextareaYields {
    Yields: {
        default: [];
    };
}

import { FlTextareaArgs } from '@gavant/ember-floating-labels/addon/components/fl-textarea';
export default class FlTextareaComponent extends Component<
    ModifyYields<BaseGlimmerSignature<FlTextareaArgs>, FlTextareaYields>
> {}
