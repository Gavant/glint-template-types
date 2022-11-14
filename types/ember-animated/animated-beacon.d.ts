declare module 'ember-animated/components/animated-beacon' {
    import Component from '@ember/component';

    interface AnimatedBeaconSignature {
        Args: {
            name: string;
        };
        Blocks: {
            default: [];
        };
    }

    export default class AnimatedBeacon extends Component<AnimatedBeaconSignature> {}
}
