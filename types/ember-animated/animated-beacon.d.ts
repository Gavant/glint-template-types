import Component from '@glint/environment-ember-loose/ember-component';

interface AnimatedBeaconSignature {
    Args: {
        name: string;
    };
    Yields: {
        default: [];
    };
}

export default class AnimatedBeacon extends Component<AnimatedBeaconSignature> {}
