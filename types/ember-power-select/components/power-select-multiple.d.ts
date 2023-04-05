declare module 'ember-power-select/components/power-select-multiple' {
    import Component from '@glimmer/component';

    import { PowerSelectArgs, PromiseProxy, Select } from 'ember-power-select/components/power-select';

    interface PowerSelectMultipleArgs<O> extends Omit<PowerSelectArgs<O>, 'selected'> {
        selected?: O[] | Promise<O[]> | PromiseProxy<O[]>;
    }
    export interface PowerSelectMultipleSignature<O> {
        Element: HTMLDivElement;
        Args: PowerSelectMultipleArgs<O>;
        Blocks: {
            default: [O, Select];
        };
    }
    export default class PowerSelectMultiple<O> extends Component<PowerSelectMultipleSignature<O>> {}
}
