declare module 'ember-cli-clipboard/helpers/is-clipboard-supported' {
    import Helper from '@ember/component/helper';

    interface IsClipboardSupportedSignature {
        Return: boolean;
    }

    export default class IsClipboardSupported extends Helper<IsClipboardSupportedSignature> {}
}
