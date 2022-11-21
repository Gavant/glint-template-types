declare module 'ember-table/components/ember-th/resize-handle' {
    import Component from '@ember/component';

    export interface EmberTableTHResizeHandleSignature {
        Args: {
            columnMeta: any;
        };

        Element: HTMLTableCellElement;
    }

    type TableTHResizeHandleArgs = EmberTableTHResizeHandleSignature['Args'];
    export default interface EmberTHResizeHandle extends TableTHResizeHandleArgs {}
    // eslint-disable-next-line ember/no-empty-glimmer-component-classes, ember/require-tagless-components
    export default class EmberTHResizeHandle extends Component<EmberTableTHResizeHandleSignature> {}
}
