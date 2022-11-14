declare module 'ember-basic-dropdown/utils/calculate-position' {
    interface CalculatePositionOptions {
        horizontalPosition: string;
        verticalPosition: string;
        matchTriggerWidth: boolean;
        previousHorizontalPosition?: string;
        previousVerticalPosition?: string;
        renderInPlace: boolean;
        dropdown: any;
    }
    export type CalculatePositionResultStyle = {
        top?: number;
        left?: number;
        right?: number;
        width?: number;
        height?: number;
        [key: string]: string | number | undefined;
    };
    export type CalculatePositionResult = {
        horizontalPosition: string;
        verticalPosition: string;
        style: CalculatePositionResultStyle;
    };
    export type CalculatePosition = (
        trigger: Element,
        content: HTMLElement,
        destination: HTMLElement,
        options: CalculatePositionOptions
    ) => CalculatePositionResult;
}
