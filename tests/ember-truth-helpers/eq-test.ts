import EqHelper from '@gavant/glint-template-types/types/ember-truth-helpers/eq';
import { expectTypeOf } from 'expect-type';

import { ReturnOf } from '../util';

declare const ret: ReturnOf<EqHelper>;
expectTypeOf(ret).toBeBoolean();
