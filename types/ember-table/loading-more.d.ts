// declare module 'ember-table/components/ember-table-loading-more/component' {
// eslint-disable-next-line ember/no-classic-components
import Component from '@ember/component';

export interface EmberTableLoadingMoreSignature {
    Args: {
        api: any;
        isLoading?: boolean;
        canLoadMore?: boolean;
        center?: boolean;
    };
    Element: HTMLDivElement;
}
type EmberTableLoadingMoreArgs = EmberTableLoadingMoreSignature['Args'];
export default interface EmberTableLoadingMore extends EmberTableLoadingMoreArgs {}
// eslint-disable-next-line ember/require-tagless-components
export default class EmberTableLoadingMore extends Component<EmberTableLoadingMoreSignature> {}
// }
