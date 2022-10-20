// declare module 'ember-table/components/ember-tfoot/component' {
// eslint-disable-next-line ember/no-classic-components
import Component from '@ember/component';

import { WithBoundArgs } from '@glint/template';

import EmberTableCell from './cell';
import EmberTableRow from './row';

export interface EmberTableFooterSignature {
    Args: {
        tableClasses?: string;
        api: any;
        rows: any[];
    };
    Blocks: {
        default: [
            {
                cells: EmberTableCell[];
                isHeader: boolean;
                rowsCount: number;
                row: WithBoundArgs<typeof EmberTableRow, 'api'>;
            }
        ];
    };

    Element: HTMLDivElement;
}

export default class EmberTableFooter<
    T extends EmberTableFooterSignature
    // eslint-disable-next-line ember/require-tagless-components
> extends Component<T> {}
// }
