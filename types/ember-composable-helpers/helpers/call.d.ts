declare module 'ember-composable-helpers/helpers/call' {
  import Helper from '@ember/component/helper';

  import { AnyFunction } from '@glint/template/-private/integration';

  export default class CallHelper<T extends AnyFunction> extends Helper<{
    Args: {
      Positional: [fn: T];
    };
    Return: ReturnType<T>;
  }> {}
}
