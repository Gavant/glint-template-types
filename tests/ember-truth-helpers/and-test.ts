import AndHelper from '@gavant/glint-template-types/types/ember-truth-helpers/and';
import { expectTypeOf } from 'expect-type'
import { ReturnOf } from "../util";

// string could be an empty string and get returned, otherwse we get null
declare const return1: ReturnOf<AndHelper<string, null, undefined, number | null>>;
expectTypeOf(return1).toEqualTypeOf<string | null>();

// could get empty string or null in first spot, or either item in the last spot
declare const return2: ReturnOf<AndHelper<string | null, number | null>>;
expectTypeOf(return2).toEqualTypeOf<string | number | null>();

// could get empty string or null in first spot, or last spot
declare const return3: ReturnOf<AndHelper<string | null, number>>;
expectTypeOf(return3).toEqualTypeOf<string | number | null>();

// could get empty string or null in first spot, 0 or undefined in second, or last spot
declare const return4: ReturnOf<AndHelper<string | null, number | undefined, boolean>>;
expectTypeOf(return4).toEqualTypeOf<string | number | boolean | null | undefined>();

// could get empty string or null in first spot, 0 or undefined in second, or last spot
declare const return5: ReturnOf<AndHelper<string | null, number | undefined, null>>;
expectTypeOf(return5).toEqualTypeOf<string | number | null | undefined>();

// could get 0 in first spot or undefined in last
declare const return6: ReturnOf<AndHelper<number, undefined>>;
expectTypeOf(return6).toEqualTypeOf<number | undefined>();
