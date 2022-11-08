import Component from '@glimmer/component';

import { Select } from '../power-select';

interface PowerSelectMultipleTriggerArgs<O> {
    select: Select;
    placeholder?: string;
    searchField: string;
    onInput?: (e: InputEvent) => boolean;
    onKeydown?: (e: KeyboardEvent) => boolean;
    buildSelection: (lastSelection: O, select: Select) => any[];
}

export interface PowerSelectTriggerSignature<O> {
    Args: PowerSelectMultipleTriggerArgs<O>;
    Blocks: {
        default?: [O, Select];
    };
    Element: HTMLUListElement;
}

export default class Trigger<O> extends Component<PowerSelectTriggerSignature<O>> {}
