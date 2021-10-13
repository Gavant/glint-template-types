import Component from '@glint/environment-ember-loose/glimmer-component';
import { Select } from 'ember-power-select/addon/components/power-select';
import { PowerSelectAPI } from 'ember-power-select/types/power-select-api';

import { PowerSelectArgs } from '@gavant/glint-template-types/types/ember-power-select/power-select';

declare module 'ember-power-select/components/power-select/options' {
    export type PowerSelectOptionsArgs<T, E> = Pick<
        PowerSelectArgs<T, E>,
        'loadingMessage' | 'options' | 'optionsComponent' | 'extra' | 'highlightOnHover' | 'groupComponent'
    > & {
        groupIndex?: '';
        listboxId: string;
        select: Select;
        extra: E;
    };

    export interface PowerSelectOptionsSignature<T, E> {
        Element: HTMLUListElement;
        Args: PowerSelectOptionsArgs<T, E>;
        Yields: {
            default: [T, PowerSelectAPI<T>];
        };
    }
    export default class OptionsComponent<T, E> extends Component<PowerSelectOptionsSignature<T, E>> {
        addHandlers: () => void;
    }
}
