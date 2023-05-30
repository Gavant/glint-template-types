declare module 'ember-composable-helpers/helpers/call' {
  import Helper from '@ember/component/helper';

  export default class CallHelper<T extends (...args: any) => any> extends Helper<{
    Args: {
      Positional: [fn: T];
    };
    Return: ReturnType<T>;
  }> {}
}
