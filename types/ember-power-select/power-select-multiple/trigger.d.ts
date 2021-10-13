import Component from '@glint/environment-ember-loose/glimmer-component';
import { Select } from 'ember-power-select/addon/components/power-select';

export interface PowerSelectTriggerArgs<T> {
    select: Select;
    placeholder?: string;
    searchField?: string;
    onInput?: (e: InputEvent) => boolean;
    onKeydown?: (e: KeyboardEvent) => boolean;
    buildSelection: (lastSelection: T, select: Select) => T[];
    listBoxId: number;
    onBlur?(): void;
    extra: {
        [x: string]: any;
    };
    allowClear?: boolean;
    selectedItemComponent?: string;
    onFocus(e: FocusEvent): void;
    tabindex?: string;
}

export interface PowerSelectTriggerSignature<T> {
    Args: PowerSelectTriggerArgs<T>;
    Yields: {
        default?: [T, Select];
    };
    Element: HTMLUListElement;
}

export class PowerSelectTrigger<T> extends Component<PowerSelectTriggerSignature<T>> {
    inputFont?: string;
    readonly triggerMultipleInputStyle: string;
    readonly maybePlaceholder: string;
    openChanged(elemenet: Element, [isOpen]: [boolean]): void;
    storeInputStyles(input: Element): void;
    chooseOption(e: Event): void;
    handleInput(e: InputEvent): void;
    handleKeydown(e: KeyboardEvent): void | false;
}
export default PowerSelectTrigger;
