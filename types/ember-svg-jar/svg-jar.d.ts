declare module 'ember-svg-jar/helpers/svg-jar' {
    import Helper from '@ember/component/helper';

    import { SafeString } from '@gavant/glint-template-types/utils/types';

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
}
