import Component from '@ember/component';
import AnimatedEachComponent from 'ember-animated/components/animated-each';

// Ideally we'd just get the transition directly from ember-animated
type Transition = (context: any) => Generator;

export interface AnimatedEachArgs<T> {
    Positional: {
        /* The list of data you are trying to render. */
        items?: T[];
    };

    Named: {
        /** Represents the amount of time an animation takes in miliseconds. */
        duration?: number;

        /**
         * When true, all the items in the list will animate as removedSprites when the {{#animated-each}} is destroyed. Defaults to false.
         *
         * Note that an <AnimatedOrphans/> component must be actively rendered when this animator is removed for this option to have any effect.
         */
        finalRemoval?: boolean;

        /** If set, this animator will only match other animators that have the same group value. */
        group?: string;

        /** When true, all the items in the list will animate as insertedSprites when the {{#animated-each}} is first rendered. Defaults to false. */
        initialInsertion?: boolean;

        /** Serves the same purpose as the key in ember {{#each}}, and it's also used to compare values when animating between components. */
        key?: string;

        /** Specifies data-dependent Rules that choose which Transition to run when the list changes. This takes precedence over use. */
        rules?: AnimatedEachComponent['rules'];

        /** Specifies the Transition to run when the list changes. */
        use?: Transition;

        /** An optional comma-separated list of properties to observe on each of the objects in the items list. If any of those properties change, we will trigger an animated transition. Without this, we only animate when the list contents change, not when any deeper properties change. */
        watch?: string;
    };
}

export interface AnimatedEachSignature<T> {
    Args: AnimatedEachArgs<T>;
    Blocks: {
        default: [T, number];
        else: [];
    };
}

export default class AnimatedEach<T> extends Component<AnimatedEachSignature<T>> {}

export class AnimatedEachCurly<T> extends Component<AnimatedEachSignature<T>> {}
