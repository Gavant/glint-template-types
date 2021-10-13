declare module 'ember-power-select/components/power-select-multiple/trigger';

declare module 'ember-power-select/types/power-select-api' {
    export type RepositionChanges = {
        hPosition: string;
        vPosition: string;
        otherStyles: Record<string, string | number | undefined>;
        top?: string;
        left?: string;
        right?: string;
        width?: string;
        height?: string;
    };
    export class PowerSelectAPI<T> {
        disabled: boolean;
        highlighted: T;
        isActive: boolean;
        isOpen: boolean;
        lastSearchedText: string;
        loading: boolean;
        options: T[];
        results: T[];
        resultsCount: number;
        searchText: string;
        selected: T;
        uniqueId: string;
        actions: {
            choose(option: T, event: Event): void;
            close(): void;
            highlight(option: T): void;
            open(): void;
            reposition(): RepositionChanges | undefined;
            scrollTo(option: T): void;
            search(term: string): void;
            select(option: T): void;
            toggle(): void;
        };
    }
}
