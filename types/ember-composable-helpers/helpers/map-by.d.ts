declare module 'ember-composable-helpers/helpers/map-by' {
  import Helper from '@ember/component/helper';

  export default class MapByHelper<T, K extends keyof T> extends Helper<{
    Args: {
      Positional: [key: K | string, arr: T[]];
    };
    Return: T[K][];
  }> {}
}
