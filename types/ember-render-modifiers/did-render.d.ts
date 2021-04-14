import Modifier from '@glint/environment-ember-loose/ember-modifier';

declare class DidInsertModifier extends Modifier<{
    Element: HTMLElement;
    PositionalArgs: any[];
}> {}

declare module '@glint/environment-ember-loose/registry' {
    export default interface Registry {
        'did-insert': typeof DidInsertModifier;
    }
}
