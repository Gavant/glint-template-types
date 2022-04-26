import OrHelper from '@gavant/glint-template-types/types/ember-truth-helpers/or';
import { expectTypeOf } from 'expect-type';
import { ReturnOf } from '../util';

// if number is 0, we'll eventually end up on string, it may be empty but we'll get it either way
declare const return1: ReturnOf<OrHelper<number | null, undefined, null, string>>;
expectTypeOf(return1).toEqualTypeOf<number | string>();

declare const return2: ReturnOf<OrHelper<string | null, number | null>>;
expectTypeOf(return2).toEqualTypeOf<string | number | null>();

// number could be 0 and we could still get string or null
declare const return3: ReturnOf<OrHelper<number, string | null>>;
expectTypeOf(return3).toEqualTypeOf<number | string | null>();

// boolean could be false and we could end up with a number or undefined in last spot
declare const return4: ReturnOf<OrHelper<string | null, boolean, number | undefined>>;
expectTypeOf(return4).toEqualTypeOf<string | boolean | number | undefined>();

declare const return5: ReturnOf<OrHelper<null, string | null, number | undefined, null>>;
expectTypeOf(return5).toEqualTypeOf<string | number | null>();

// string could be empty
declare const return6: ReturnOf<OrHelper<string, undefined>>;
expectTypeOf(return6).toEqualTypeOf<string | undefined>();

declare const return7: ReturnOf<OrHelper<undefined, string>>;
expectTypeOf(return7).toEqualTypeOf<string>();

declare const return8: ReturnOf<OrHelper<string>>;
expectTypeOf(return8).toEqualTypeOf<string>();
