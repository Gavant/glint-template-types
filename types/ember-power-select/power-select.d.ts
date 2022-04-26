import Component from '@glimmer/component';
import { PowerSelectArgs as PSArgs } from 'ember-power-select/addon/components/power-select';
import { PowerSelectAPI } from 'ember-power-select/types/power-select-api';

export interface PromiseProxy<T> extends Promise<T> {
    content: any;
}

type modifiedPSArgs<T> = Omit<PSArgs, 'search'> & {
    search?: (term: string, select: PowerSelectAPI<T>) => any[] | PromiseProxy<T[]> | Promise<T[]>;
};

export enum HorizontalPositions {
    LEFT = 'left',
    RIGHT = 'right',
    CENTER = 'center',
    AUTO = 'auto'
}

export enum VerticalPositions {
    ABOVE = 'above',
    BELOW = 'below',
    AUTO = 'auto'
}

export interface PositionStyle {
    top?: number;
    left?: number;
    right?: number;
    width?: number;
}

export interface CalculatePositionOptions {
    previousHorizontalPosition: HorizontalPositions;
    horizontalPosition: HorizontalPositions;
    previousVerticalPosition: VerticalPositions;
    verticalPosition: VerticalPositions;
    matchTriggerWidth: boolean;
    renderInPlace: boolean;
}

interface PowerSelectArgs<T, E> extends modifiedPSArgs<T> {
    ariaDescribedBy?: string;
    ariaInvalid?: string;
    ariaLabel?: string;
    ariaLabelledBy?: string;
    required?: boolean;
    options: T[] | PromiseProxy<T[]>;
    selected: T | PromiseProxy<T>;
    placeholder?: string;
    placeholderComponent?: string;
    searchPlaceholder?: string;
    renderInPlace?: boolean;
    highlightOnHover?: boolean;
    disabled?: boolean;
    loadingMessage?: string;
    allowClear?: boolean;
    triggerClass?: string;
    dropdownClass?: string;
    triggerRole?: string;
    title?: string;
    triggerId?: string;
    optionsComponent?: string;
    beforeOptionsComponent?: string;
    afterOptionsComponent?: string;
    groupComponent?: string;
    extra?: E;
    preventScroll?: boolean;
    verticalPosition?: VerticalPositions;
    horizontalPosition?: HorizontalPositions;
    destination?: string;
    initiallyOpened?: boolean;
    ebdTriggerComponent?: string;
    ebdContentComponent?: string;
    triggerComponent?: string;
    tabindex?: number;
    eventType?: string;
    selectedItemComponent?: string;
    searchEnabled?: boolean;
    searchField?: string;
    calculatePosition?: (
        trigger: HTMLElement,
        content: HTMLElement,
        destination: HTMLElement,
        options: CalculatePositionOptions
    ) => {
        horizontalPosition: HorizontalPositions;
        verticalPosition: VerticalPositions;
        style: PositionStyle;
    };
    buildSelection?: (selected: PowerSelectArgs<T, E>['selected'], select: PowerSelectAPI<T>) => any;
    onChange: (selection: PowerSelectArgs<T, E>['selected'], select: PowerSelectAPI<T>, event?: Event) => void;
    search?: (term: string, select: PowerSelectAPI<T>) => any[] | PromiseProxy<T[]> | Promise<T[]>;
    onOpen?: (select: PowerSelectAPI<T>, e: Event) => boolean | undefined;
    onClose?: (select: PowerSelectAPI<T>, e: Event) => boolean | undefined;
    onInput?: (term: string, select: PowerSelectAPI<T>, e: Event) => string | false | void;
    onKeydown?: (select: PowerSelectAPI<T>, e: KeyboardEvent) => boolean | undefined;
    onFocus?: (select: PowerSelectAPI<T>, event: FocusEvent) => void;
    onBlur?: (select: PowerSelectAPI<T>, event: FocusEvent) => void;
    scrollTo?: (option: PowerSelectArgs<T, E>['selected'], select: PowerSelectAPI<T>) => void;
    registerAPI?: (select: PowerSelectAPI<T>) => void;
}

interface PowerSelectSignature<T, E extends Record<string, unknown>> {
    Element: HTMLDivElement;
    Args: PowerSelectArgs<T, E>;
    Blocks: {
        default: [T, PowerSelectAPI<T>];
    };
}

export declare class PowerSelect<T, E extends Record<string, unknown>> extends Component<PowerSelectSignature<T, E>> {}
