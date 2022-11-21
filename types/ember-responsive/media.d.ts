declare module 'ember-responsive/helpers/media' {
    import Helper from '@ember/component/helper';

    /**
     * By default, will allow anything for the positional arg to the `media` helper.
     * If you want to limit the type to the breakpoints you support, you can do something like this:
     * `declare class MyMediaHelper extends MediaHelper<'isMobile' | 'isTablet' | 'isDesktop'> {}`
     * Then register `MyMediaHelper` with the registry instead of `MediaHelper`.
     */
    export default class MediaHelper<T> extends Helper<{
        Args: { Positional: [sizeCheck: T] };
        Return: boolean;
    }> {}
}
