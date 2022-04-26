import { htmlSafe } from '@ember/template';
import { ExpandSignature } from '@glimmer/component/-private/component';

/**
 * Workaround for https://discord.com/channels/480462759797063690/484421406659182603/827512106696966154
 *
 * @template T
 */
export type GlintTemporaryTypeFix<T> = { [K in keyof T]: T[K] };

/**
 * Base Signature for Glimmer component. Temporary until strict mode comes
 *
 * @export
 * @interface BaseGlimmerSignature
 * @template T
 */
export interface BaseGlimmerSignature<T> {
    Element?: HTMLElement;
    Args: GlintTemporaryTypeFix<T>;
    Blocks: {
        default?: [];
    };
}
/**
 * Helper to modify the yields property when the `BaseGlimmerSignature` wont work for you. Temporary until strict mode comes
 *
 * @export
 * @interface BaseGlimmerSignature
 * @template T
 */
export type ModifyBlocks<T, B> = Omit<T, 'Blocks'> & B;

// WARNING: This is not guaranteed to maintain argument position if more than one args name is passed!
export type SignatureWithPositionedArg<S, K extends keyof ExpandSignature<S>['Args']['Named']> = {
    Element: ExpandSignature<S>['Element'];
    Args: {
        Named: Omit<ExpandSignature<S>['Args']['Named'], K>;
        Positional: [ExpandSignature<S>['Args']['Named'][K]];
    };
    Blocks: ExpandSignature<S>['Blocks'];
};

export type SafeString = ReturnType<typeof htmlSafe>;
