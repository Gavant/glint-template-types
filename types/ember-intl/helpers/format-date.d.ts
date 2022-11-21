declare module 'ember-intl/helpers/format-date' {
    import Helper from '@ember/component/helper';
    import { htmlSafe } from '@ember/template';

    import IntlService from 'ember-intl/services/intl';

    type FormateDateParams = Parameters<IntlService['formatDate']>;
    export class FormatDateHelper extends Helper<{
        Args: {
            Positional: FormateDateParams;
            Named: { format?: string };
        };
        Return: ReturnType<typeof htmlSafe> | string;
    }> {}
}
