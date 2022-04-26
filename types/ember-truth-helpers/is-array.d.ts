import Helper from '@ember/component/helper';

interface IsArrayHelperSignature {
    Args: { Positional: any[] };
    Return: boolean;
}

export default class IsArrayHelper extends Helper<IsArrayHelperSignature> {}
