import { DidInsertModifier } from 'types/ember-render-modifiers/did-insert';
import { DidUpdateModifier } from 'types/ember-render-modifiers/did-update';

declare module '@glint/environment-ember-loose/registry' {
    export default interface Registry {
        'did-insert': typeof DidInsertModifier;
        'did-update': typeof DidUpdateModifier;
    }
}
