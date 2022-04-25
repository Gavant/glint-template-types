import { SafeString } from '@gavant/glint-template-types/utils/types';
import Helper from '@ember/component/helper';

interface SvgJarHelperSignature {
    Args: {
        Positional: [name: string];
        Named: Record<string, unknown> & {
            class?: string;
            role?: string;
            title?: string;
            desc?: string;
        };
    };
    Return: SafeString;
}

export default class SvgJarHelper extends Helper<SvgJarHelperSignature> {}
