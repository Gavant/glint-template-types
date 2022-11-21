declare module 'ember-truth-helpers/helpers/is-array' {
    import Helper from '@ember/component/helper';

    interface IsArrayHelperSignature {
        Args: { Positional: any[] };
        Return: boolean;
    }

    export default class IsArrayHelper extends Helper<IsArrayHelperSignature> {}
}
