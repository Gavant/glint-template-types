import NativeArray from '@ember/array/-private/native-array';
import Component from '@ember/component';
import { SignatureWithPositionedArg } from '@gavant/glint-template-types/utils/types';

export interface VerticalCollectionArgs<T> {
    items: NativeArray<T> | T[];
    estimateHeight: number;
    tagName?: string;
    key?: string;
    staticHeight?: boolean;
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
    Args: {
        Named: VerticalCollectionArgs<T>;
    };
    Blocks: {
        default: [T, number];
        else: [];
    };
}

export default class VerticalCollection<T> extends Component<VerticalCollectionSignature<T>> {}
export class VerticalCollectionCurly<T> extends Component<
    SignatureWithPositionedArg<VerticalCollectionSignature<T>, 'items'>
> {}
