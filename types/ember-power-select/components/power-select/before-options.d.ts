declare module 'ember-power-select/components/power-select/before-options' {
    import Component from '@glimmer/component';

    import PowerSelect, { PowerSelectArgs, Select } from 'ember-power-select/components/power-select';

    interface Args<O>
        extends Pick<
                PowerSelectArgs<O>,
                | 'searchEnabled'
                | 'searchPlaceholder'
                | 'ariaLabel'
                | 'ariaLabelledBy'
                | 'onInput'
                | 'onFocus'
                | 'onBlur'
            >,
            Pick<PowerSelect<O>, 'ariaActiveDescendant' | 'listboxId'> {
        select: Select;
        onKeydown: (e: Event) => false | void;
        autofocus?: boolean;
    }
    export interface BeforeOptionsSignature<O> {
        Args: Args<O>;
    }

    export default class BeforeOptions<O> extends Component<BeforeOptionsSignature<O>> {}
}
