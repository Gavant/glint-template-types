import Component from '@glimmer/component';

import { Dropdown, DropdownActions } from '../../ember-basic-dropdown/components/basic-dropdown';

import { MatcherFn } from '../utils/group-utils';

interface SelectActions extends DropdownActions {
    search: (term: string) => void;
    highlight: (option: any) => void;
    select: (selected: any, e?: Event) => void;
    choose: (selected: any, e?: Event) => void;
    scrollTo: (option: any) => void;
}
export interface Select extends Dropdown {
    selected: any;
    highlighted: any;
    options: any[];
    results: any[];
    resultsCount: number;
    loading: boolean;
    isActive: boolean;
    searchText: string;
    lastSearchedText: string;
    actions: SelectActions;
}
interface PromiseProxy<T> extends Promise<T> {
    content: any;
}
interface CancellablePromise<T> extends Promise<T> {
    cancel: () => void;
}
interface Arrayable<T> {
    toArray(): T[];
}
interface Performable {
    perform: (...args: any[]) => void;
}
export interface PowerSelectArgs<O> {
    afterOptionsComponent?: string;
    allowClear?: boolean;
    animationEnabled?: boolean;
    ariaDescribedBy?: string;
    ariaInvalid?: string;
    ariaLabel?: string;
    ariaLabelledBy?: string;
    beforeOptionsComponent?: string;
    class?: string;
    closeOnSelect?: boolean;
    defaultHighlighted?: any;
    destination?: string;
    disabled?: boolean;
    dropdownClass?: string;
    eventType?: string;
    extra?: any;
    groupComponent?: string;
    highlightOnHover?: boolean;
    horizontalPosition?: 'auto' | 'left' | 'right' | 'center';
    initiallyOpened?: boolean;
    loadingMessage?: string;
    matchTriggerWidth?: boolean;
    noMatchesMessage?: string;
    noMatchesMessageComponent?: string;
    options: O[] | PromiseProxy<O[]>;
    optionsComponent?: string;
    placeholder?: string;
    placeholderComponent?: string;
    preventScroll?: boolean;
    renderInPlace?: boolean;
    searchEnabled?: boolean;
    searchField?: string;
    searchMessage?: string;
    searchPlaceholder?: string;
    selected?: O | PromiseProxy<O> | null;
    selectedItemComponent?: string;
    tabindex?: string;
    triggerClass?: string;
    triggerComponent?: string;
    triggerId?: string;
    triggerRole?: string;
    verticalPosition?: 'auto' | 'above' | 'below';

    buildSelection?: (selected: O, select: Select) => any;
    matcher?: MatcherFn;
    onBlur?: (select: Select, event: FocusEvent) => void;
    onChange: (selection: O, select: Select, event?: Event) => void;
    onClose?: (select: Select, e: Event) => boolean | undefined;
    onFocus?: (select: Select, event: FocusEvent) => void;
    onInput?: (term: string, select: Select, e: Event) => string | false | void;
    onKeydown?: (select: Select, e: KeyboardEvent) => boolean | undefined;
    onOpen?: (select: Select, e: Event) => boolean | undefined;
    registerAPI?: (select: Select) => void;
    scrollTo?: (option: O, select: Select) => void;
    search?: (term: string, select: Select) => O[] | PromiseProxy<O[]>;
    typeAheadMatcher?: MatcherFn;
}

export interface PowerSelectSignature<O> {
    Element: HTMLDivElement;
    Args: PowerSelectArgs<O>;
    Blocks: {
        default: [O, Select];
    };
}

export default class PowerSelect<O> extends Component<PowerSelectSignature<O>> {
    ariaActiveDescendant?: string;
    listboxId: string;
}
