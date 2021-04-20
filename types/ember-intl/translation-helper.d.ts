import Helper from '@glint/environment-ember-loose/ember-component/helper';

declare class TranslationHelper extends Helper<{
    PositionalArgs: [string];
    NamedArgs: {
        [key: string]: any;
        htmlSafe?: boolean;
    };
    Return: string;
}> {}

export { TranslationHelper };
export default TranslationHelper;
