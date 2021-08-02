import Component from '@glint/environment-ember-loose/glimmer-component';
import { Select } from 'ember-power-select/addon/components/power-select';

export interface PowerSelectAPI<T> {
    disabled: boolean;
    highlighted: T;
    isActive: boolean;
    isOpen: boolean;
    lastSearchedTexted: string;
    loading: boolean;
    options: T[];
    results: T[];
    resultsCount: number;
    searchText: string;
    selected: T | T[];
    uniqueId: string;
    actions: {
        choose: (option: T) => void;
        close: () => void;
        highlight: (option: T) => void;
        open: () => void;
        reposition: () => void;
        scrollTo: (option: T) => void;
        search: (term: string) => void;
        select: (option: T | null) => void;
        toggle: () => void;
    };
}

export interface CalculatePositionOptions {
    previousHorizontalPosition: HorizontalPositions;
    horizontalPosition: HorizontalPositions;
    previousVerticalPosition: VerticalPositions;
    verticalPosition: VerticalPositions;
    matchTriggerWidth: boolean;
    renderInPlace: boolean;
}

export interface PositionStyle {
    top?: number;
    left?: number;
    right?: number;
    width?: number;
}

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

export interface PowerSelectArgs<T> {
    afterOptionsComponent?: string;
    allowClear?: boolean;
    animationEnabled?: boolean;
    ariaDescribedBy?: string;
    ariaInvalid?: string;
    ariaLabel?: string;
    ariaLabelledBy?: string;
    beforeOptionsComponent?: string | null;
    initiallyOpened?: boolean;
    buildSelection?: (lastSelection: T, select: Select) => T | null;
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
    class?: string;
    closeOnSelect?: boolean;
    defaultHighlighted?: T | ((select: Select) => T);
    destination?: string;
    disabled?: boolean;
    dropdownClass?: string;
    extra?: Record<string, T>;
    groupComponent?: string;
    highlightOnHover?: boolean;
    horizontalPosition?: HorizontalPositions;
    intiallyOpened?: boolean;
    loadingMessage?: string;
    eventType?: string;
    matcher?: (option: T, searchTerm: string) => boolean;
    matchTriggerWidth?: boolean;
    noMatchesMessage?: string;
    onBlur?: (select: Select, event: FocusEvent) => void;
    onChange?: (selection: T, select: Selection, event?: Event) => void;
    onClose?: (select: Select, e: Event) => boolean | undefined;
    onFocus?: (select: Select, event: FocusEvent) => void;
    onInput?: (term: string, select: Select, e: Event) => string | false | void;
    onKeydown?: (select: Select, e: KeyboardEvent) => boolean | undefined;
    onOpen?: (select: Select, e: Event) => boolean | undefined;
    options: T[];
    optionsComponent?: string;
    placeholder?: string;
    placeholderComponent?: string;
    preventScroll?: boolean;
    registerAPI?: (select: Select) => void;
    renderInPlace?: boolean;
    scrollTo?: (option: T, select: Select) => void;
    search?: (term: string, select: Select) => T[] | Promise<T[]>;
    searchEnabled?: boolean;
    searchField?: string;
    searchMessage?: string | boolean;
    searchPlaceholder?: string;
    selected?: T | T[];
    selectedItemComponent?: string;
    tabindex?: string;
    triggerClass?: string;
    triggerComponent?: string;
    triggerId?: string;
    triggerRole?: string;
    typeAheadMatcher?: (option: T, searchTerm: string) => boolean;
    verticalPosition?: VerticalPositions;
    loadingComponent?: string;
}

export interface PowerSelectSignature<T> {
    Args: PowerSelectArgs<T>;
    Yields: {
        default?: [T, Select];
    };
    Element: HTMLDivElement;
}

export class PowerSelect<T> extends Component<PowerSelectSignature<T>> {}
export default PowerSelect;
