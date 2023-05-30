declare module 'ember-composable-helpers/helpers/without' {
  import Helper from '@ember/component/helper';

  export default class WithoutHelper<T> extends Helper<{
    Args: {
      Positional: [obj: T | T[], arr: T[]];
    };
    Return: T[];
  }> {}
}
