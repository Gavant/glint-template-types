declare module 'ember-intl/helpers/format-number' {
    import Helper from '@ember/component/helper';
    import { htmlSafe } from '@ember/template';

    import IntlService from 'ember-intl/services/intl';

    type FormatNumberParams = Parameters<IntlService['formatNumber']>;
    export default class FormatNumberHelper extends Helper<{
        Args: {
            Positional: FormatNumberParams;
            Named: {
                style?: string;
                currency?: string;
                minimumFractionDigits?: string;
                maximumFractionDigits?: string;
            };
        };
        Return: ReturnType<typeof htmlSafe> | string;
    }> {}
}
