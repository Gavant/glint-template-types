declare module '@fortawesome/ember-fontawesome/components/fa-icon' {
    import Component from '@ember/component';

    import {
        FlipProp,
        IconName,
        IconPrefix,
        PullProp,
        RotateProp,
        SizeProp,
        Transform
    } from '@fortawesome/fontawesome-svg-core';

    export interface FaIconComponentSignature {
        Element: SVGElement;
        Args: {
            icon: IconName;
            prefix?: IconPrefix;
            size?: SizeProp;
            rotation?: RotateProp;
            pull?: PullProp;
            pulse?: boolean;
            border?: boolean;
            listItem?: boolean;
            flip?: FlipProp;
            spin?: boolean;
            fixedWidth?: boolean;
            transform?: Transform | string;
            symbol?: boolean;
        };
    }

    export class FaIcon extends Component<FaIconComponentSignature> {}
    export default FaIcon;
}
