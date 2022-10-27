import Component from '@ember/component';

import { WithBoundArgs } from '@glint/template';

import EmberTableCell from './cell';
import EmberTableRow from './row';
import { Column, ColumnMeta, RowValue } from './table';

export interface EmberTableFooterSignature<
    CV extends Column<RV, M, CM, RM, TM>,
    RV extends RowValue,
    M,
    CM extends ColumnMeta,
    RM,
    TM
> {
    Args: {
        tableClasses?: string;
        api: any;
        rows: RV[];
    };
    Blocks: {
        default: [
            {
                cells: EmberTableCell<CV, RV, M, CM, RM, TM>[];
                isHeader: boolean;
                rowsCount: number;
                row: WithBoundArgs<typeof EmberTableRow, 'api'>;
            }
        ];
    };

    Element: HTMLDivElement;
}

export default class EmberTableFooter<
    CV extends Column<RV, M, CM, RM, TM>,
    RV extends RowValue,
    M,
    CM extends ColumnMeta,
    RM,
    TM

    // eslint-disable-next-line ember/require-tagless-components
> extends Component<EmberTableFooterSignature<CV, RV, M, CM, RM, TM>> {}
