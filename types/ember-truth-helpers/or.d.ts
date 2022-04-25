import Helper from '@glint/environment-ember-loose/ember-component/helper';
import { Falsy, Maybe, UnsetValue } from './-private/shared';

// NOTE: These types are somewhat imperfect.
// For instance, the limit at 5 is arbitrary. Also, the actual helpers
// has special handling for empty arrays and objects with an `isTruthy`
// method. In these cases, we just won't narrow as much as we potentially could.

type OrPair<A, B> = B extends UnsetValue
    ? A
    : Maybe<A> extends true
    ? NonNullable<A> | B
    : Falsy<A> extends true
    ? B
    : A | B;

interface OrHelperSignature<A, B, C, D, E> {
    PositionalArgs: [A, B?, C?, D?, E?];
    Return: OrPair<OrPair<OrPair<OrPair<A, B>, C>, D>, E>;
}

declare const foo: OrPair<number, string>;

export default class OrHelper<A, B = UnsetValue, C = UnsetValue, D = UnsetValue, E = UnsetValue> extends Helper<
    OrHelperSignature<A, B, C, D, E>
> {}
