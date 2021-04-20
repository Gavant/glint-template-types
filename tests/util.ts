import Helper from "@glint/environment-ember-loose/ember-component/helper";

export type ReturnOf<T> = T extends Helper<infer S> ? S['Return'] : never;
