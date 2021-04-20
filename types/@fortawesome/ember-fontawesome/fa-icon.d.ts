import Component from '@glint/environment-ember-loose/ember-component';

import {
    FlipProp, IconName, IconPrefix, PullProp, RotateProp, SizeProp, Transform
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
        flip?: FlipProp;
        fixedWidth?: boolean;
        transform?: Transform;
        symbol?: boolean;
    };
}

declare class FaIconComponent extends Component<FaIconComponentSignature> {}

export { FaIconComponent };
export default FaIconComponent;
