import NativeArray from '@ember/array/-private/native-array';

import Component from '@glint/environment-ember-loose/ember-component';

import { SignatureWithPositionedArg } from '@gavant/glint-template-types/utils/types';

export interface VerticalCollectionArgs<T> {
    items: NativeArray<T> | T[];
    tagName?: string;
    key?: string;
    estimateHeight: number;
    staticHeight?: number;
    shouldRecycle?: boolean;
    containerSelector?: string;
    bufferSize?: number;
    idForFirstItem?: string;
    renderFromLast?: boolean;
    renderAll?: boolean;
    lastReached?: () => void;
    firstReached?: () => void;
    lastVisibleChanged?: () => void;
    firstVisibleChanged?: () => void;
}

export interface VerticalCollectionSignature<T> {
    Element: HTMLElement;
    Args: VerticalCollectionArgs<T>;
    Yields: {
        default: [T];
        else: [];
    };
}

export default class VerticalCollection<T> extends Component<VerticalCollectionSignature<T>> {}
export class VerticalCollectionCurly<T> extends Component<
    SignatureWithPositionedArg<VerticalCollectionSignature<T>, 'items'>
> {}
