declare module 'ember-power-select/components/power-select' {
    import PromiseProxyMixin from '@ember/object/promise-proxy-mixin';
    import ObjectProxy from '@ember/object/proxy';
    import Component from '@glimmer/component';

    import { Dropdown, DropdownActions } from 'ember-basic-dropdown/components/basic-dropdown';
    import { CalculatePosition } from 'ember-basic-dropdown/utils/calculate-position';
    import { MatcherFn } from 'ember-power-select/utils/group-utils';

    import { ensureSafeComponent } from '@embroider/util';

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
    export type SafeComponentArgs = Parameters<typeof ensureSafeComponent>;
    export type SafeComponentStringOrComponent = SafeComponentArgs[0];

    class PromiseProxy<T> extends ObjectProxy.extend(PromiseProxyMixin) implements PromiseLike<T> {
        // Copied from the `PromiseLike<T>` types
        // @ts-expect-error
        declare then: <TResult1 = T, TResult2 = never>(
            onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
            onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
        ) => PromiseLike<TResult1 | TResult2>;
    }

    interface Arrayable<T> {
        toArray(): T[];
    }
    interface Performable {
        perform: (...args: any[]) => void;
    }
    // Some args are not listed here because they are only accessed from the template. Should I list them?
    export interface PowerSelectArgs<O> {
        afterOptionsComponent?: SafeComponentStringOrComponent;
        allowClear?: boolean;
        animationEnabled?: boolean;
        ariaDescribedBy?: string;
        ariaInvalid?: string;
        ariaLabel?: string;
        ariaLabelledBy?: string;
        beforeOptionsComponent?: SafeComponentStringOrComponent;
        buildSelection?: (selected: O, select: Select) => any;
        calculatePosition?: CalculatePosition;
        closeOnSelect?: boolean;
        defaultHighlighted?: any;
        destination?: string;
        disabled?: boolean;
        dropdownClass?: string;
        ebdContentComponent?: SafeComponentStringOrComponent;
        ebdTriggerComponent?: SafeComponentStringOrComponent;
        eventType?: string;
        extra?: any;
        groupComponent?: SafeComponentStringOrComponent;
        handleFocus?: (select: Select, event: FocusEvent) => void;
        highlightOnHover?: boolean;
        horizontalPosition?: string;
        initiallyOpened?: boolean;
        loadingMessage?: string;
        matcher?: MatcherFn;
        matchTriggerWidth?: boolean;
        noMatchesMessage?: string;
        noMatchesMessageComponent?: SafeComponentStringOrComponent;
        onBlur?: (select: Select, event: FocusEvent) => void;
        onChange: (selection: O, select: Select, event?: Event) => void;
        onClose?: (select: Select, e: Event) => boolean | undefined;
        onFocus?: (select: Select, event: FocusEvent) => void;
        onInput?: (term: string, select: Select, e: Event) => string | false | void;
        onKeydown?: (select: Select, e: KeyboardEvent) => boolean | undefined;
        onOpen?: (select: Select, e: Event) => boolean | undefined;
        options: O[] | Promise<O[]> | PromiseProxy<O[]>;
        optionsComponent?: SafeComponentStringOrComponent;
        placeholderComponent?: SafeComponentStringOrComponent;
        placeholder?: string;
        preventScroll?: boolean;
        registerAPI?: (select: Select) => void;
        renderInPlace?: boolean;
        required?: boolean;
        scrollTo?: (option: O, select: Select) => void;
        search?: (term: string, select: Select) => O[] | Promise<O[]> | PromiseProxy<O[]>;
        searchEnabled?: boolean;
        searchField?: string;
        searchMessage?: string;
        searchMessageComponent?: SafeComponentStringOrComponent;
        searchPlaceholder?: string;
        selected?: O | Promise<O[]> | PromiseProxy<O> | null;
        selectedItemComponent?: SafeComponentStringOrComponent;
        tabindex?: number | string;
        triggerComponent?: SafeComponentStringOrComponent;
        triggerClass?: string;
        triggerId?: string;
        typeAheadOptionMatcher?: MatcherFn;
        verticalPosition?: string;
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
}
