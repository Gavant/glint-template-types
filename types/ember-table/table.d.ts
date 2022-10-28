import Component from '@ember/component';

import { GetOrElse } from '@gavant/glint-template-types/utils/types';

import { ComponentLike, WithBoundArgs } from '@glint/template';

import EmberTableBody from './body';
import EmberTableFooter from './footer';
import EmberTableHeader from './header';
import EmberTableLoadingMore from './loading-more';

export enum SelectionMode {
    NONE = 'none',
    SINGLE = 'single',
    MULTIPLE = 'multiple'
}

export enum FillMode {
    EQUAL = 'equal-column',
    FIRST = 'first-column',
    LAST = 'last-column',
    NTH = 'nth-column'
}

export enum ResizeMode {
    STANDARD = 'standard',
    FLUID = 'fluid'
}

export enum WidthConstraint {
    NONE = 'none',
    EQUAL = 'eq-container',
    GREATER_THAN = 'gte-container',
    LESS_THAN = 'lte-container'
}

export type TableMeta<M> = { [P in keyof M]: M[P] };

type CellValue<R extends RowValue, C extends Column<R, any, any, any, any>> = {
    cellValue: GetOrElse<R, C['valuePath'], never>;
};

type HeaderCellArgs<CV, CM, TM> = {
    columnValue: CV;
    columnMeta: CM;
    tableMeta: TM;
};

type HeaderCellComponent<CV, CM, TM> = ComponentLike<{
    Args: HeaderCellArgs<CV, CM, TM>;
}>;

type BodyCellArgs<CV extends Column<RV, M, CM, RM, TM>, RV extends RowValue, M, CM extends ColumnMeta, RM, TM> = {
    columnValue: CV;
    rowValue: RV;
    cellMeta: M;
    columnMeta: CM;
    rowMeta: RM;
    tableMeta: TM;
} & CellValue<RV, CV>;

type BodyCellComponent<
    CV extends Column<RV, M, CM, RM, TM>,
    RV extends RowValue,
    M,
    CM extends ColumnMeta,
    RM,
    TM
> = ComponentLike<{
    Args: BodyCellArgs<CV, RV, M, CM, RM, TM>;
}>;

export interface Column<RV extends RowValue, M, CM extends ColumnMeta, RM, TM> {
    [key: string]: unknown;
    valuePath?: string;
    name?: string;
    width?: number;
    minWidth?: number;
    maxWidth?: number;
    textAlign?: string;
    isSortable?: boolean;
    headerComponent?: HeaderCellComponent<Column<RV, M, CM, RM, TM>, CM, TM>;
    cellComponent?: BodyCellComponent<Column<RV, M, CM, RM, TM>, RV, M, CM, RM, TM>;
    subcolumns?: Column<RV, M, CM, RM, TM>[];
    footerValuePath?: string;
}

export interface ColumnMeta {
    readonly isLeaf: boolean;
    readonly isFixed: boolean;
    readonly isReorderable: boolean;
    readonly isResizable: boolean;
    readonly isSortable: boolean;
    readonly offsetLeft: number;
    readonly offsetRight: number;
    readonly width: number;
    readonly columnSpan: number;
    readonly rowSpan: number;
    readonly index: number;
    readonly isMultiSorted: boolean;
    readonly isSorted: boolean;
    readonly isSortedAsc: boolean;
    readonly sortIndex: number;
    readonly selected: boolean;
}

export type RowValue = { [foo: string]: any | never };

export interface TableApi<CV extends Column<RV, M, CM, RM, TM>, RV extends RowValue, M, CM extends ColumnMeta, RM, TM> {
    columns: CV[];
    registerColumnTree: (columnTree: any) => void;
    columnTree: any;
    tableId: string;
}
export interface EmberTableSignature<
    CV extends Column<RV, M, CM, RM, TM>,
    RV extends RowValue,
    M,
    CM extends ColumnMeta,
    RM,
    TM
> {
    Args: Record<string, unknown>;
    Blocks: {
        default: [
            {
                api: TableApi<CV, RV, M, CM, RM, TM>;
                head: WithBoundArgs<typeof EmberTableHeader<CV, RV, M, CM, RM, TM>, 'api'>;
                body: WithBoundArgs<typeof EmberTableBody<CV, RV, M, CM, RM, TM>, 'api'>;
                foot: WithBoundArgs<typeof EmberTableFooter<CV, RV, M, CM, RM, TM>, 'api'>;
                loadingMore: WithBoundArgs<typeof EmberTableLoadingMore, 'api'>;
            }
        ];
    };

    Element: HTMLDivElement;
}

type EmberTableArgs<
    CV extends Column<RV, M, CM, RM, TM>,
    RV extends RowValue,
    M,
    CM extends ColumnMeta,
    RM,
    TM
> = EmberTableSignature<CV, RV, M, CM, RM, TM>['Args'];
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
export default interface EmberTable<
    CV extends Column<RV, M, CM, RM, TM>,
    RV extends RowValue,
    M,
    CM extends ColumnMeta,
    RM,
    TM
> extends EmberTableArgs<CV, RV, M, CM, RM, TM> {}

export default class EmberTable<
    CV extends Column<RV, M, CM, RM, TM>,
    RV extends RowValue,
    M,
    CM extends ColumnMeta,
    RM,
    TM

    // eslint-disable-next-line ember/require-tagless-components
> extends Component<EmberTableSignature<CV, RV, M, CM, RM, TM>> {
    elementId: string;

    api: TableApi<CV, RV, M, CM, RM, TM>;
}

declare module '@gavant/ember-table/-private/sticky/legacy-sticky-polyfill';
declare module '@gavant/ember-table/-private/sticky/table-sticky-polyfill';
declare module 'ember-table/test-support';
