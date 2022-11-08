import Component from '@glimmer/component';

import { PowerSelectArgs, Select } from '../power-select';

interface Args<O>
    extends Pick<
        PowerSelectArgs<O>,
        'selectedItemComponent' | 'extra' | 'allowClear' | 'placeholderComponent' | 'placeholder'
    > {
    select: Select;
}

export interface TriggerSignature<O> {
    Args: Args<O>;
    Blocks: {
        default: [O, Select];
    };
}
export default class Trigger<O> extends Component<TriggerSignature<O>> {}
