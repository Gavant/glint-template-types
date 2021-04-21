import { ComponentSignature } from "@glint/environment-ember-loose";
import { htmlSafe } from '@ember/template';

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
    Yields: {
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
export type ModifyYields<T, Y> = Omit<T, 'Yields'> & Y;

export type SignatureWithPositionedArg<S extends ComponentSignature, K extends keyof S['Args']> = {
  Args: Omit<S['Args'], K>,
  PositionalArgs: [S['Args'][K]],
  Yields: 'Yields' extends keyof S ? S['Yields'] : undefined
};

export type SafeString = ReturnType<typeof htmlSafe>;
