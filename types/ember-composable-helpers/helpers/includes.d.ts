declare module 'ember-composable-helpers/helpers/includes' {
  import Helper from '@ember/component/helper';

  export default class IncludesHelper extends Helper<{
    Args: {
      Positional: [...value: unknown[]];
    };
    Return: boolean;
  }> {}
}
