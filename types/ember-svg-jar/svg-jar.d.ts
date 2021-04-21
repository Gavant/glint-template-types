import { SafeString } from "@gavant/glint-template-types/utils/types";
import Helper from "@glint/environment-ember-loose/ember-component/helper";

interface SvgJarHelperSignature {
  PositionalArgs: [name: string];
  NamedArgs: Record<string, unknown> & {
    class?: string;
    role?: string;
    title?: string;
    desc?: string
  };
  Return: SafeString;
}

export default class SvgJarHelper extends Helper<SvgJarHelperSignature> {}
