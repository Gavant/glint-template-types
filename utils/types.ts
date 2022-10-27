import { htmlSafe } from '@ember/template';
import { ExpandSignature } from '@glimmer/component/-private/component';

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

export type GetOrElse<Obj, K, Fallback> = K extends keyof Obj ? Obj[K] : Fallback;
