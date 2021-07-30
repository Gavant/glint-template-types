import Component from '@glint/environment-ember-loose/glimmer-component';
import { Select } from 'ember-power-select/addon/components/power-select';

export interface PowerSelectTriggerArgs {
    select: Select;
    placeholder?: string;
    searchField?: string;
    onInput?: (e: InputEvent) => boolean;
    onKeydown?: (e: KeyboardEvent) => boolean;
    buildSelection: (lastSelection: any, select: Select) => any[];
    listBoxId: number;
    isLoading?: boolean;
    onBlur?(): void;
    extra: {
        estimateHeight: number;
        staticHeight?: number;
        bufferSize: number;
        onLastReached(): any;
        isSearching?: boolean;
        isLoadingMore?: boolean;
        triggerIsSearch?: boolean;
        noMatchesMessage?: string;
        hasInvokedSearch?: boolean;
        searchText?: string;
        clearSearch?: () => void;
        clearOptions?: () => any;
        options: any[];
    };
    allowClear?: boolean;
    selectedItemComponent?: string;
    onFocus(e: FocusEvent): void;
    tabindex?: string;
}

export interface PowerSelectTriggerSignature {
    Args: PowerSelectTriggerArgs;
    Yields: {
        default?: [any, Select];
    };
    Element: HTMLUListElement;
}

export class PowerSelectTrigger extends Component<PowerSelectTriggerSignature> {
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
