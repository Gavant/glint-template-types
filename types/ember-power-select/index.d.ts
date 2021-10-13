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
        readonly disabled: boolean;
        readonly highlighted: T;
        readonly isActive: boolean;
        readonly isOpen: boolean;
        readonly lastSearchedText: string;
        readonly loading: boolean;
        readonly options: T[];
        readonly results: T[];
        readonly resultsCount: number;
        readonly searchText: string;
        readonly selected: T;
        readonly uniqueId: string;
        readonly actions: {
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
