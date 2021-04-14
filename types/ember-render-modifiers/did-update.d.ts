import Modifier from '@glint/environment-ember-loose/ember-modifier';

declare class DidUpdateModifier extends Modifier<{
    Element: HTMLElement;
    PositionalArgs: any[];
}> {}

declare module '@glint/environment-ember-loose/registry' {
    export default interface Registry {
        'did-update': typeof DidUpdateModifier;
    }
}
