// declare module 'ember-table/components/ember-td/component' {
// eslint-disable-next-line ember/no-classic-components
import Component from '@ember/component';

import { RowClickEvent } from './row';
import { Column, TableMeta } from './table';

export interface CellMeta {
    selected: boolean;
}

export interface EmberTableCellSignature {
    Args: {
        api: string;
        tableMeta?: TableMeta<unknown>;
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
            cellValue: any,
            columnValue: Column,
            rowValue: any,
            cellMeta: CellMeta,
            columnMeta: any,
            rowMeta: any,
            rowsCount: number
        ];
    };
    Element: HTMLTableCellElement;
}

type TableCellArgs = EmberTableCellSignature['Args'];
export default interface EmberTableCell extends TableCellArgs {}
// eslint-disable-next-line ember/no-empty-glimmer-component-classes, ember/require-tagless-components
export default class EmberTableCell extends Component<EmberTableCellSignature> {}
// }
