declare module 'ember-composable-helpers/helpers/optional' {
  import Helper from '@ember/component/helper';

  export default class OptionalHelper extends Helper<{
    Args: {
      Positional: [value?: unknown];
    };
    Return: () => void;
  }> {}
}
