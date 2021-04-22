import Component from '@glint/environment-ember-loose/glimmer-component';

import { BaseGlimmerSignature, ModifyYields } from '@gavant/glint-template-types/utils/types';

interface FlInputYields {
    Yields: {
        default: [];
    };
}

import { FlInputArgs } from '@gavant/ember-floating-labels/components/fl-input';
export default class FlInputComponent extends Component<
    ModifyYields<BaseGlimmerSignature<FlInputArgs>, FlInputYields>
> {}
