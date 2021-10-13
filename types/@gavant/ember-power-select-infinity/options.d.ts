import Options from 'ember-power-select/addon/components/power-select/options';

export default class PowerSelectInfinityOptions extends Options {}

declare module '@glint/environment-ember-loose/registry' {
    export default interface Registry {
        PowerSelectInfinityOptions: typeof PowerSelectInfinityOptions;
    }
}
