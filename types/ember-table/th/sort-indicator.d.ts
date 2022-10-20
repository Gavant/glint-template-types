// declare module 'ember-table/components/ember-th/sort-indicator/component' {
// eslint-disable-next-line ember/no-classic-components
import Component from '@ember/component';

export interface EmberTableTHSortSignature {
    Args: {
        columnMeta: any;
    };

    Element: HTMLTableCellElement;
}

type TableTHSortArgs = EmberTableTHSortSignature['Args'];
export default interface EmberTHSortIndicator extends TableTHSortArgs {}
// eslint-disable-next-line ember/no-empty-glimmer-component-classes, ember/require-tagless-components
export default class EmberTHSortIndicator extends Component<EmberTableTHSortSignature> {}
// }
