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
// Some args are not listed here because they are only accessed from the template. Should I list them?
export interface PowerSelectArgs<O> {
    allowClear?: boolean;
    ariaLabel?: string;
    ariaLabelledBy?: string;
    highlightOnHover?: boolean;
    placeholderComponent?: string;
    placeholder?: string;
    searchMessage?: string;
    searchMessageComponent?: string;
    noMatchesMessage?: string;
    noMatchesMessageComponent?: string;
    matchTriggerWidth?: boolean;
    options: O[] | PromiseProxy<O[]>;
    selected: O | PromiseProxy<O>;
    closeOnSelect?: boolean;
    defaultHighlighted?: any;
    searchField?: string;
    searchEnabled?: boolean;
    tabindex?: number | string;
    triggerComponent?: string;
    beforeOptionsComponent?: string;
    optionsComponent?: string;
    groupComponent?: string;
    searchPlaceholder?: string;
    loadingMessage?: string;
    selectedItemComponent?: string;
    extra?: any;
    matcher?: MatcherFn;
    initiallyOpened?: boolean;
    typeAheadOptionMatcher?: MatcherFn;
    buildSelection?: (selected: O, select: Select) => any;
    onChange: (selection: O, select: Select, event?: Event) => void;
    search?: (term: string, select: Select) => O[] | PromiseProxy<O[]>;
    onOpen?: (select: Select, e: Event) => boolean | undefined;
    onClose?: (select: Select, e: Event) => boolean | undefined;
    onInput?: (term: string, select: Select, e: Event) => string | false | void;
    onKeydown?: (select: Select, e: KeyboardEvent) => boolean | undefined;
    onFocus?: (select: Select, event: FocusEvent) => void;
    onBlur?: (select: Select, event: FocusEvent) => void;
    scrollTo?: (option: O, select: Select) => void;
    registerAPI?: (select: Select) => void;
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
