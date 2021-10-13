import { Select } from 'ember-power-select/addon/components/power-select';

import { PowerSelectArgs } from '@gavant/glint-template-types/types/ember-power-select/power-select';

declare module 'ember-power-select/components/power-select/after-options' {
    export type PowerSelectAfterOptionsArgs<T, E> = Pick<PowerSelectArgs<T, E>, 'extra'> & {
        select: Select;
    };
}
