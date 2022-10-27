import Component from '@ember/component';

import { GetOrElse } from '@gavant/glint-template-types/utils/types';

import { RowClickEvent } from './row';
import { Column, ColumnMeta, RowValue, TableApi } from './table';

export interface CellMeta {
    selected: boolean;
}

export interface EmberTableCellSignature<
    CV extends Column<RV, M, CM, RM, TM>,
    RV extends RowValue,
    M,
    CM extends ColumnMeta,
    RM,
    TM
> {
    Args: {
        api: TableApi<CV, RV, M, CM, RM, TM>;
        tableMeta?: TM;
        /**
         * An action that is called when a row is clicked. Will be called with the row and the event.
         *
         * @memberof TBodyArgs
         */
        onClick?: ((rowClickEvent: RowClickEvent<unknown, unknown>) => void) | undefined;

        onDoubleClick?: ((rowClickEvent: RowClickEvent<unknown, unknown>) => void) | undefined;
    };
    Blocks: {
        default: [
            cellValue: GetOrElse<RV, CV['valuePath'], never>,
            columnValue: CV,
            rowValue: RV,
            cellMeta: M,
            columnMeta: CM,
            rowMeta: RM,
            rowsCount: number
        ];
    };
    Element: HTMLTableCellElement;
}

type TableCellArgs<
    CV extends Column<RV, M, CM, RM, TM>,
    RV extends RowValue,
    M,
    CM extends ColumnMeta,
    RM,
    TM
> = EmberTableCellSignature<CV, RV, M, CM, RM, TM>['Args'];
export default interface EmberTableCell<
    CV extends Column<RV, M, CM, RM, TM>,
    RV extends RowValue,
    M,
    CM extends ColumnMeta,
    RM,
    TM
> extends TableCellArgs<CV, RV, M, CM, RM, TM> {}

export default class EmberTableCell<
    CV extends Column<RV, M, CM, RM, TM>,
    RV extends RowValue,
    M,
    CM extends ColumnMeta,
    RM,
    TM
> extends Component<
    EmberTableCellSignature<CV, RV, M, CM, RM, TM>
    // eslint-disable-next-line ember/require-tagless-components
> {
    checkboxSelectionMode: SelectionMode;
    columnMeta: CM;
    columnValue: CV;
    rowMeta: RM;
    rowSelectionMode: SelectionMode;
    rowValue: RV;
    rowsCount: number;
}
