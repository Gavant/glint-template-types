declare module 'ember-composable-helpers/helpers/noop' {
  import Helper from '@ember/component/helper';

  export default class NoopHelper extends Helper<{
    Return: () => void;
  }> {}
}
