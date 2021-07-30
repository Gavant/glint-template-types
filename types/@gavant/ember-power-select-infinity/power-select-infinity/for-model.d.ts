import Component from '@glint/environment-ember-loose/ember-component';
import { Select } from 'ember-power-select/addon/components/power-select';

import { PowerSelectInfinityArgs } from '@gavant/glint-template-types/types/@gavant/ember-power-select-infinity/power-select-infinity';

export interface PowerSelectInfinityForModelArgs<T> extends PowerSelectInfinityArgs<T> {
    /**
     * An object containing additional query filters.
     *
     * @type {{ [x: string]: any }}
     * @argument filters
     */
    filters?: { [x: string]: any };
    /**
     * The name of the ember-data model to query.
     *
     * @type {string}
     * @argument modelName
     */
    modelName: string;
    /**
     * The limit used for queries
     *
     * @type {number}
     * @argument pageSize [25]
     */
    pageSize?: number;
    /**
     *  The method used to process the query params
     *
     * @type {(...args: any[]) => { [x: string]: any }}
     * @argument processQueryParams
     */
    processQueryParams?: (...args: any[]) => { [x: string]: any };
    /**
     * The query-param used for string searches
     *
     * @type {string}
     * @argument searchParamKey [keyword]
     */
    searchParamKey?: string;
    /**
     * Whether or not to use the string search parameter.
     *
     * @type {boolean}
     * @argument useSearchParamFilter [true]
     */
    useSearchParamFilter?: boolean;
    /**
     * Whether or not the dropdown options are loaded on component render
     *
     * @type {boolean}
     */
    loadOptionsOnRender?: boolean;
    include?: string[];
}

export interface PowerSelectInfinityForModelSignature<T> {
    Args: PowerSelectInfinityForModelArgs<T>;
    Yields: {
        default?: [T, Select];
    };
    Element: HTMLDivElement;
}

export default class PowerSelectInfinityForModel<T> extends Component<PowerSelectInfinityForModelSignature<T>> {}
