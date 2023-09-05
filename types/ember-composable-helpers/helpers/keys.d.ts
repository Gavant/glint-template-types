declare module 'ember-composable-helpers/helpers/keys' {
  import Helper from '@ember/component/helper';

  export default class KeysHelper extends Helper<{
    Args: {
      Positional: [Record<string, unknown>];
    };
    Return: string[];
  }> {}
}
