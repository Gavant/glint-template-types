import Component from '@glimmer/component';
import { Select } from 'ember-power-select/addon/components/power-select';

export interface PowerSelectOptionsArgs<T> {
    select: Select;
    loadingMessage?: string;
    groupComponent?: string;
    optionsComponent?: string;
    items: T[];
    extra: {
        [x: string]: any;
    };
    highlightOnHover?: boolean;
    optionsClass?: string;
    options: T[];
    groupIndex?: string;
}

export interface PowerSelectOptionsSignature<T> {
    Args: PowerSelectOptionsArgs<T>;
    Blocks: {
        default?: [T, Select];
    };
    Element: HTMLUListElement;
}

export class PowerSelectOptions<T> extends Component<PowerSelectOptionsSignature<T>> {
    isTouchDevice: boolean;
    hasMoved: boolean;
    addHandlers(element: Element): void;
    removeHandlers(element: Element): void;
}
export default PowerSelectOptions;
