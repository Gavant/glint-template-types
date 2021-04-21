import Helper from "@glint/environment-ember-loose/ember-component/helper";

interface ComparisonHelperSignature {
  PositionalArgs: [any, any, { forceNumber?: boolean }?];
  Return: boolean;
}

export class ComparisonHelper extends Helper<ComparisonHelperSignature> {}

interface EqualityHelperSignature {
  PositionalArgs: [any, any];
  Return: boolean;
}

export class EqualityHelper extends Helper<EqualityHelperSignature> {}

declare const Unset: unique symbol;
export type UnsetValue = { [Unset]: true };

export type Falsy<T> = NonNullable<T> extends never ? true : false;
export type Maybe<T> = T & (null | undefined) extends never ? false : true;
