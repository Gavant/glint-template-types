import EqHelper from 'ember-truth-helpers/helpers/eq';

import { expectTypeOf } from 'expect-type';

import type { ReturnOf } from '../util';

declare const ret: ReturnOf<EqHelper>;
expectTypeOf(ret).toBeBoolean();
