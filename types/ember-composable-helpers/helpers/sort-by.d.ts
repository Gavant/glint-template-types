declare module 'ember-composable-helpers/helpers/sort-by' {
  import Helper from '@ember/component/helper';

  export default class SortByHelper<T, K extends keyof T> extends Helper<{
    Args: {
      Positional: [key: K | `${K & string}:desc` | string, arr: T[]];
    };
    Return: T[];
  }> {}
}
