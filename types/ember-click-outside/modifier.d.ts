import Modifier from "@glint/environment-ember-loose/ember-modifier";

interface OnClickOutsideSignature<K extends keyof DocumentEventMap = 'click'> {
  Args: {
    /** Undocumented */
    capture?: boolean;

    /** Undocumented */
    eventType?: K;

    /** Undocumented */
    exceptSelector?: string;
  }

  PositionalArgs: [handler: (event: DocumentEventMap[K]) => void];
}

export default class OnClickOutsideModifier extends Modifier<OnClickOutsideSignature> {}
