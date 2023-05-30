declare module 'ember-composable-helpers/helpers/join' {
  import Helper from '@ember/component/helper';

  export default class JoinHelper extends Helper<{
    Args: {
      Positional: [string, unknown[]];
    };
    Return: string;
  }> {}
}
