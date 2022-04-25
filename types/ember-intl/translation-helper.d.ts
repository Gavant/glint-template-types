import Helper from '@ember/component/helper';

export class TranslationHelper extends Helper<{
    Args: {
        Positional: [string];
        Named: {
            [key: string]: any;
            htmlSafe?: boolean;
        };
    };
    Return: string;
}> {}
export default TranslationHelper;
