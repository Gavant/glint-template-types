declare module 'ember-composable-helpers/helpers/dec' {
  import Helper from '@ember/component/helper';

  export default class DecHelper extends Helper<{
    Args: {
      Positional: [value: number | unknown];
    };
    Return: number;
  }> {}
}
