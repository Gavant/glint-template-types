import Component from '@glint/environment-ember-loose/glimmer-component';
import { Select } from 'ember-power-select/addon/components/power-select';

export interface PowerSelectOptionsArgs {
    select: Select;
    loadingMessage?: string;
    groupComponent?: string;
    optionsComponent?: string;
    items: any[];
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
    highlightOnHover?: boolean;
    optionsClass?: string;
    options: any[];
    groupIndex?: string;
}

export interface PowerSelectOptionsSignature {
    Args: PowerSelectOptionsArgs;
    Yields: {
        default?: [any, Select];
    };
    Element: HTMLUListElement;
}

export class PowerSelectOptions extends Component<PowerSelectOptionsSignature> {
    isTouchDevice: boolean;
    hasMoved: boolean;
    addHandlers(element: Element): void;
    removeHandlers(element: Element): void;
}
export default PowerSelectOptions;
