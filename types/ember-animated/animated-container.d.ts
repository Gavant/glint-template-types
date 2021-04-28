import { ElementForTagName } from "@glint/environment-ember-loose/-private/dsl";
import Component from "@glint/environment-ember-loose/ember-component";

interface AnimatedContainerSignature<TagName extends string> {
  Element: ElementForTagName<TagName>,
  Args: {
    motion?: string;

    /** Whether to animate the initial render. You will probably also need to set initialInsertion=true on a child component of animated-container. Defaults to false. */
    onInitialRender?: boolean

    /** Use a custom tag for the container. Defaults to div. */
    tag?: TagName
  };
  Yields: {
    default: [];
  };
}

export default class AnimatedContainer<TagName extends string> extends Component<AnimatedContainerSignature<TagName>> {}
