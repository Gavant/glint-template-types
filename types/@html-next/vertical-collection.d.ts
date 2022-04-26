import NativeArray from '@ember/array/-private/native-array';

import Component from '@ember/component';

export interface VerticalCollectionArgs<T> {
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
    Args: { Named: VerticalCollectionArgs<T>; Positional: { items: NativeArray<T> | T[] } };
    Blocks: {
        default: [T, number];
        else: [];
    };
}

export default class VerticalCollection<T> extends Component<VerticalCollectionSignature<T>> {}
export class VerticalCollectionCurly<T> extends Component<VerticalCollectionSignature<T>> {}
