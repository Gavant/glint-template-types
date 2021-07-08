import Component from '@glint/environment-ember-loose/ember-component';

import { TableArgs } from '@gavant/ember-table/addon/components/table';
import { BaseGlimmerSignature } from '@gavant/glint-template-types/utils/types';

export default class Table<R, F, TM> extends Component<BaseGlimmerSignature<TableArgs<R, F, TM>>> {}
