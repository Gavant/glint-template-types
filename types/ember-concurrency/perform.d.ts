import Helper from '@glint/environment-ember-loose/ember-component/helper';
import { Task } from 'ember-concurrency';

type PrefixOf<T extends unknown[]> = T extends []
    ? []
    : unknown[] extends T
    ? unknown[]
    : T extends [head: infer Head, ...tail: infer Tail]
    ? [] | [Head, ...PrefixOf<Tail>]
    : T extends [head?: infer Head, ...tail: infer Tail]
    ? [Head?, ...PrefixOf<Tail>]
    : [];

type TaskArgs<T extends Task<any, any>> = T extends Task<any, infer Args> ? Args : never;
type TaskReturn<T extends Task<any, any>> = T extends Task<infer Return, any> ? Return : never;

type RemovePrefix<Prefix extends unknown[], Tuple extends unknown[]> = [] extends Prefix
    ? Tuple
    : [Prefix, Tuple] extends [[any?, ...infer PrefixRest], [any?, ...infer TupleRest]]
    ? RemovePrefix<PrefixRest, TupleRest>
    : [];

type PerformHelperSignature<T extends Task<any, any>, GivenArgs extends PrefixOf<TaskArgs<T>>> = {
    PositionalArgs: [T, ...GivenArgs];
    Return: (...params: RemovePrefix<GivenArgs, TaskArgs<T>>) => Promise<TaskReturn<T>>;
};

export default class PerformHelper<T extends Task<any, any>, PassedArgs extends PrefixOf<TaskArgs<T>>> extends Helper<
    PerformHelperSignature<T, PassedArgs>
> {}
