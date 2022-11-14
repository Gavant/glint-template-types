import { resolve } from '@glint/environment-ember-loose/-private/dsl';
import { task, timeout } from 'ember-concurrency';
import 'ember-concurrency-async';
import { taskFor } from 'ember-concurrency-ts';
import 'ember-concurrency-ts/async';
import PerformHelper from 'ember-concurrency/helpers/perform';

import { expectTypeOf } from 'expect-type';

class TaskWrapper {
    @task
    standardTask = taskFor(function* (ms: number, additional?: number) {
        yield timeout(ms);
        if (additional) {
            yield timeout(additional);
        }
        return true;
    });

    @task
    asyncTask = taskFor(async (ms: number, additional?: number, _another?: number): Promise<boolean> => {
        await timeout(ms);
        if (additional) {
            await timeout(additional);
        }
        return true;
    });
}

let wrapper = new TaskWrapper();

let perform = resolve(PerformHelper);

expectTypeOf(perform({}, wrapper.standardTask)).toEqualTypeOf<(ms: number, additional?: number) => Promise<boolean>>();
expectTypeOf(perform({}, wrapper.standardTask, 100)).toEqualTypeOf<(additional?: number) => Promise<boolean>>();
expectTypeOf(perform({}, wrapper.standardTask, 100, 200)).toEqualTypeOf<() => Promise<boolean>>();

expectTypeOf(perform({}, wrapper.asyncTask)).toEqualTypeOf<
    (ms: number, additional?: number, another?: number) => Promise<boolean>
>();
expectTypeOf(perform({}, wrapper.asyncTask, 100)).toEqualTypeOf<
    (additional?: number, another?: number) => Promise<boolean>
>();
expectTypeOf(perform({}, wrapper.asyncTask, 100, 200)).toEqualTypeOf<(another?: number) => Promise<boolean>>();
expectTypeOf(perform({}, wrapper.asyncTask, 100, 200, 300)).toEqualTypeOf<() => Promise<boolean>>();
