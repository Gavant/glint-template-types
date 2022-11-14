declare module 'ember-table/components/ember-tfoot' {
    import Component from '@ember/component';

    import { Column, ColumnMeta, RowValue } from 'ember-table/components/ember-table';
    import EmberTableCell from 'ember-table/components/ember-td';
    import EmberTableRow from 'ember-table/components/ember-tr';

    import { WithBoundArgs } from '@glint/template';

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
}
