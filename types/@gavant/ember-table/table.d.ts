import Component from '@ember/component';

import { TableArgs } from '@gavant/ember-table/addon/components/table';

export interface TableSignature<R, F, TM> {
    Element: HTMLDivElement;
    Args: TableArgs<R, F, TM>;
    Blocks: {};
}

export default class Table<R, F, TM> extends Component<TableSignature<R, F, TM>> {}
