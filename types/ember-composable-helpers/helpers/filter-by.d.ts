declare module 'ember-composable-helpers/helpers/filter-by' {
  import Helper from '@ember/component/helper';

  export default class FilterByHelper<T, K extends keyof T> extends Helper<{
    Args: {
      Positional: [key: K, value: T[K] | unknown, arr: T[]];
    };
    Return: T[];
  }> {}
}
