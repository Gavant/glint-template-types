declare module 'ember-composable-helpers/helpers/values' {
  import Helper from '@ember/component/helper';

  export default class ValuesHelper extends Helper<{
    Args: {
      Positional: [Record<string, unknown>];
    };
    Return: string[];
  }> {}
}
