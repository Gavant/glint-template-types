declare module 'ember-composable-helpers/helpers/inc' {
  import Helper from '@ember/component/helper';

  export default class IncHelper extends Helper<{
    Args: {
      Positional: [value: number];
    };
    Return: number;
  }> {}
}
