import { SignatureWithPositionedArg } from "@gavant/glint-template-types/utils/types";
import Component from "@glint/environment-ember-loose/ember-component";
import { AnimatedEachSignature } from "./animated-each";

type AnimatedIfSignature = {
  Args: Omit<AnimatedEachSignature<any>['Args'], 'items'> & {
    predicate: any
  };
  Yields: {
    default: [];
    else: [];
  };
}

export default class AnimatedIf extends Component<AnimatedIfSignature> {}

export class AnimatedIfCurly extends Component<SignatureWithPositionedArg<AnimatedIfSignature, 'predicate'>> {}
