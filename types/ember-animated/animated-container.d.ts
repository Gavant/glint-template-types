import Component from "@glint/environment-ember-loose/ember-component";

interface AnimatedContainerSignature {
  Args: {
    motion?: string;

    /** Whether to animate the initial render. You will probably also need to set initialInsertion=true on a child component of animated-container. Defaults to false. */
    onInitialRender?: boolean

    /** Use a custom tag for the container. Defaults to div. */
    tag?: String
  };
  Yields: {
    default: [];
  };
}

export default class AnimatedContainer extends Component<AnimatedContainerSignature> {}
