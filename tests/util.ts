import Helper, { ExpandSignature } from '@ember/component/helper';

export type ReturnOf<T> = T extends Helper<infer S> ? ExpandSignature<S>['Return'] : never;
