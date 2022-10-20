// declare module 'ember-table/components/ember-tr/component' {
// eslint-disable-next-line ember/no-classic-components
import Component from '@ember/component';

import { WithBoundArgs } from '@glint/template';

import EmberTableCell, { CellMeta } from './cell';
import { Column, TableApi, TableMeta } from './table';

export interface RowClickEvent<R, TM> {
    event: MouseEvent;
    rowValue: R;
    rowMeta: RowMeta<R>;
    tableMeta?: TableMeta<TM>;
}

interface RowMetaSelect {
    toggle?: boolean;
    range?: boolean;
    single?: boolean;
}

export interface RowMeta<T> {
    //attributes
    readonly index: number;
    readonly canCollapse: boolean;
    readonly depth: number;
    readonly isCollapsed: boolean;
    readonly isGroupSelected: boolean;
    readonly isSelected: boolean;
    readonly first: T;
    readonly last: T;
    readonly next: T;
    readonly prev: T;

    //methods
    select(arg0: RowMetaSelect): void;
}

interface RowApi extends TableApi {
    cellValue: unknown;
    cellMeta: CellMeta;
    columnValue: Column;
    columnMeta: unknown;
    rowValue: unknown;
    rowMeta: RowMeta<unknown>;
    rowsCount: number;
    cell: WithBoundArgs<typeof EmberTableCell, 'api'>;
}
export interface TableRowSignature {
    Args: {
        tableClasses?: string;
        api: RowApi;
        /**
         * An action that is called when a row is clicked. Will be called with the row and the event.
         */
        onClick?: ((rowClickEvent: RowClickEvent<unknown, unknown>) => void) | undefined;

        /**
         * An action that is called when a row is double clicked. Will be called with the row and the event.
         *
         */
        onDoubleClick?: ((rowClickEvent: RowClickEvent<unknown, unknown>) => void) | undefined;
    };
    Blocks: {
        default: [
            {
                api: RowApi;
                cellValue: RowApi['cellValue'];
                cellMeta: RowApi['cellMeta'];
                columnValue: RowApi['columnValue'];
                columnMeta: RowApi['columnMeta'];
                rowValue: RowApi['rowValue'];
                rowMeta: RowApi['rowMeta'];
                rowsCount: RowApi['rowsCount'];
                cell: WithBoundArgs<typeof EmberTableCell, 'api'>;
            }
        ];
    };
    Element: HTMLTableRowElement;
}

type TableRowArgs = TableRowSignature['Args'];
export default interface EmberTableRow extends TableRowArgs {}
// eslint-disable-next-line ember/require-tagless-components
export default class EmberTableRow extends Component<TableRowSignature> {}
// }
