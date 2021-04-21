import PerformHelper from '@gavant/glint-template-types/types/ember-concurrency/perform';
import { resolve } from '@glint/environment-ember-loose/-private/dsl';
import { expectTypeOf } from 'expect-type'
import { task, timeout } from 'ember-concurrency';
import { taskFor } from 'ember-concurrency-ts';
import 'ember-concurrency-async';
import 'ember-concurrency-ts/async';

class TaskWrapper {
  @task
  standardTask = taskFor(function * (ms: number, additional?: number) {
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

expectTypeOf(perform({}, wrapper.standardTask)).toEqualTypeOf<((ms: number, additional?: number) => Promise<boolean>)>();
expectTypeOf(perform({}, wrapper.standardTask, 100)).toEqualTypeOf<((additional?: number) => Promise<boolean>)>();
expectTypeOf(perform({}, wrapper.standardTask, 100, 200)).toEqualTypeOf<(() => Promise<boolean>)>();

expectTypeOf(perform({}, wrapper.asyncTask)).toEqualTypeOf<((ms: number, additional?: number, another?: number) => Promise<boolean>)>();
expectTypeOf(perform({}, wrapper.asyncTask, 100)).toEqualTypeOf<((additional?: number, another?: number) => Promise<boolean>)>();
expectTypeOf(perform({}, wrapper.asyncTask, 100, 200)).toEqualTypeOf<((another?: number) => Promise<boolean>)>();
expectTypeOf(perform({}, wrapper.asyncTask, 100, 200, 300)).toEqualTypeOf<(() => Promise<boolean>)>();
