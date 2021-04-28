import AnimatedContainer from '@gavant/glint-template-types/types/ember-animated/animated-container';
import { emitComponent, resolve } from '@glint/environment-ember-loose/-private/dsl';
import { expectTypeOf } from 'expect-type';

emitComponent(resolve(AnimatedContainer)({ tag: 'div' }));

// @ts-expect-error invalid tag type
emitComponent(resolve(AnimatedContainer)({ tag: 123 }));

expectTypeOf(emitComponent(resolve(AnimatedContainer)({ tag: 'div' })).element).toEqualTypeOf<HTMLDivElement>();
expectTypeOf(emitComponent(resolve(AnimatedContainer)({ tag: 'svg' })).element).toEqualTypeOf<SVGSVGElement>();
expectTypeOf(emitComponent(resolve(AnimatedContainer)({ tag: 'a' })).element).toEqualTypeOf<HTMLAnchorElement & SVGAElement>();
