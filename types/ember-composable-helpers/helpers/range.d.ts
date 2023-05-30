declare module 'ember-composable-helpers/helpers/range' {
  import Helper from '@ember/component/helper';

  export default class RangeHelper extends Helper<{
    Args: {
      Positional: [number, number];
    };
    Return: number[];
  }> {}
}
