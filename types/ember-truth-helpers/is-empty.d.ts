import Helper from '@ember/component/helper';

interface IsEmptyHelperSignature {
    Args: { Positional: [any] };
    Return: boolean;
}

export default class IsEmptyHelper extends Helper<IsEmptyHelperSignature> {}
