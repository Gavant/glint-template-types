declare module 'ember-table/components/ember-tr' {
    import Component from '@ember/component';

    import { Column, ColumnMeta, RowValue, TableMeta } from 'ember-table/components/ember-table';
    import EmberTableCell from 'ember-table/components/ember-td';

    import { GetOrElse } from '@gavant/glint-template-types/utils/types';

    import { WithBoundArgs } from '@glint/template';

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

    export interface RowClickEvent<R, TM> {
        event: MouseEvent;
        rowValue: R;
        rowMeta: RowMeta<R>;
        tableMeta?: TableMeta<TM>;
    }

    interface RowApi<CV extends Column<RV, M, CM, RM, TM>, RV extends RowValue, M, CM extends ColumnMeta, RM, TM> {
        cellValue: GetOrElse<RV, CV['valuePath'], never>;
        cellMeta: M;
        columnValue: CV;
        columnMeta: CM;
        rowValue: RV;
        rowMeta: RowMeta<unknown>;
        rowsCount: number;
        cell: WithBoundArgs<typeof EmberTableCell, 'api'>;
    }
    export interface TableRowSignature<
        CV extends Column<RV, M, CM, RM, TM>,
        RV extends RowValue,
        M,
        CM extends ColumnMeta,
        RM,
        TM
    > {
        Args: {
            tableClasses?: string;
            api: RowApi<CV, RV, M, CM, RM, TM>;
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
                    api: RowApi<CV, RV, M, CM, RM, TM>;
                    cellValue: GetOrElse<RV, CV['valuePath'], never>;
                    cellMeta: M;
                    columnValue: CV;
                    columnMeta: CM;
                    rowValue: RV;
                    rowMeta: RM;
                    rowsCount: number;
                    cell: WithBoundArgs<typeof EmberTableCell<CV, RV, M, CM, RM, TM>, 'api'>;
                }
            ];
        };
        Element: HTMLTableRowElement;
    }

    type TableRowArgs<
        CV extends Column<RV, M, CM, RM, TM>,
        RV extends RowValue,
        M,
        CM extends ColumnMeta,
        RM,
        TM
    > = TableRowSignature<CV, RV, M, CM, RM, TM>['Args'];
    export default interface EmberTableRow<
        CV extends Column<RV, M, CM, RM, TM>,
        RV extends RowValue,
        M,
        CM extends ColumnMeta,
        RM,
        TM
    > extends TableRowArgs<CV, RV, M, CM, RM, TM> {}
    // eslint-disable-next-line ember/require-tagless-components
    export default class EmberTableRow<
        CV extends Column<RV, M, CM, RM, TM>,
        RV extends RowValue,
        M,
        CM extends ColumnMeta,
        RM,
        TM
    > extends Component<
        TableRowSignature<CV, RV, M, CM, RM, TM>
        // eslint-disable-next-line ember/require-tagless-components
    > {}
}
