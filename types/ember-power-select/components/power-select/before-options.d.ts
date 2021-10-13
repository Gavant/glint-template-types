import { Select } from 'ember-power-select/addon/components/power-select';

import { PowerSelectArgs } from '@gavant/glint-template-types/types/ember-power-select/power-select';

declare module 'ember-power-select/components/power-select/before-options' {
    export type PowerSelectBeforeOptionsArgs<T, E> = Pick<
        PowerSelectArgs<T, E>,
        'searchEnabled' | 'placeholder' | 'extra' | 'selectedItemComponent' | 'searchPlaceholder'
    > & {
        listboxId: string;
        select: Select;
        onFocus: (event: Event) => void;
        onBlur: (select: Select, event: Event) => void;
        onInput: (event: Event) => void;
        onKeydown: (event: Event) => boolean;
    };
}
