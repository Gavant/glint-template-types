declare module 'ember-composable-helpers/helpers/slice' {
  import Helper from '@ember/component/helper';

  export default class SliceHelper<T> extends Helper<{
    Args: {
      Positional: [a: number, arr: T[]] | [a: number, b: number, arr: T[]];
    };
    Return: T[];
  }> {}
}
