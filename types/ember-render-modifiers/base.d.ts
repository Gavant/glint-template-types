import Modifier from '@glint/environment-ember-loose/ember-modifier';

interface RenderModifierSignature<
  Element extends HTMLElement | SVGElement,
  Args extends any[]
> {
  PositionalArgs: [(element: Element, args: Args) => any, ...Args];
  Element: Element;
}

// TODO: Can we avoid setting the default?
export declare class RenderModifier<
  Element extends HTMLElement | SVGElement,
  Args extends any[]
> extends Modifier<RenderModifierSignature<Element, Args>> {}
