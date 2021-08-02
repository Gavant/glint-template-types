import Component from '@glint/environment-ember-loose/ember-component';
import { Select } from 'ember-power-select/addon/components/power-select';

import { PowerSelectArgs } from '@gavant/glint-template-types/types/ember-power-select/power-select';

export interface PowerSelectInfinityArgs<T> extends PowerSelectArgs<T> {
    beforeOptionsComponent?: string;
    /**
     * Used by ember-vertical-collection for occlusion rendering.
     *
     * @type {number}
     * @argument bufferSize
     */
    bufferSize?: number;
    /**
     * Allow/disallow loading of more options when scrolling.
     *
     * @type {boolean}
     * @argument canLoadMore
     */
    canLoadMore: boolean;
    /**
     * Method used to clear the options.
     *
     * This should be passed in when using `triggerIsSearch`
     *
     * @type {() => any}
     * @argument clearOptions
     */
    clearOptions?: () => any;
    /**
     * Whether to clear the search text on blur or not.
     *
     * Defaults to `true` when `triggerIsSearch` is `true`.
     *
     * @type {boolean}
     * @argument clearSearchOnBlur
     */
    clearSearchOnBlur?: boolean;
    /**
     * The class for the dropdown options
     *
     * @type {string}
     * @argument dropdownClass
     */
    dropdownClass?: string;
    /**
     * Used by ember-vertical-collection for occlusion rendering.
     *
     * @type {number}
     * @argument estimateHeight
     */
    estimateHeight?: number;
    /**
     * The method invoked when `canLoadMore` is true and
     * the bottom of the list is reached.
     *
     * @type {(keyword: string | null) => T[]}
     * @argument loadMore
     */
    loadMore: (keyword: string | null) => Promise<T[]>;
    /**
     * The message shown when no options are returned.
     *
     * @type {string}
     * @argument noMatchesMessage
     */
    noMatchesMessage?: string;
    /**
     * The method invoked onBlur
     *
     * @type {(select: Select, event: FocusEvent) => void}
     * @argument onBlur
     */
    onBlur?: (select: Select, event: FocusEvent) => void;
    /**
     * The options displayed in the dropdown
     *
     * @type {T[]}
     * @argument options
     */
    options: T[];
    /**
     * The method invoked when searching.
     *
     * @type {(keyword: string | null) => T[]}
     * @argument search
     *
     */
    search: (keyword: string | null) => Promise<T[]>;
    /**
     * The delay for invoking the `@search` method
     * when typing.
     *
     * @type {number}
     * @argument searchDebounceDelay
     */
    searchDebounceDelay?: number;
    /**
     * Used by ember-vertical-collection for occlusion rendering.
     *
     * @type {boolean}
     * @argument staticHeight
     */
    staticHeight?: boolean;
    /**
     * The trigger-component for the power-select
     *
     * @type {string}
     * @argument triggerComponent
     */
    triggerComponent?: string;
    /**
     * Toggles the search being within the dropdown trigger.
     *
     * @type {boolean}
     * @argument triggerIsSearch
     */
    triggerIsSearch?: boolean;
    /**
     * Determines whether the search box renders inside the options or not.
     */
    searchBelow?: boolean;
}

export interface PowerSelectInfinitySignature<T> {
    Args: PowerSelectInfinityArgs<T>;
    Yields: {
        default?: [T, Select];
    };
    Element: HTMLDivElement;
}

export default class PowerSelectInfinity<T> extends Component<PowerSelectInfinitySignature<T>> {}
