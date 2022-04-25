import { SignatureWithPositionedArg } from '@gavant/glint-template-types/utils/types';
import Component from '@glint/environment-ember-loose/ember-component';

interface MarkdownToHtmlSignature {
    Element: HTMLDivElement;
    Args: {
        markdown: string;

        /**
         * Omit the trailing newline in a code block.
         * @default
         */
        omitExtraWLInCodeBlocks?: boolean;

        /**
         * Disable the automatic generation of header ids. Setting to true overrides prefixHeaderId
         * @default false
         */
        noHeaderId?: boolean;

        /**
         * Use text in curly braces as header id.
         * @default false
         */
        customizedHeaderId?: boolean;

        /**
         * Generate header ids compatible with github style (spaces are replaced with dashes and a bunch of non alphanumeric chars are removed)
         * @default false
         */
        ghCompatibleHeaderId?: boolean;

        /**
         * Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic 'section' prefix.
         * @default false
         */
        prefixHeaderId?: string | boolean;

        /**
         * Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix). Has no effect if prefixHeaderId is set to false.
         * @default false
         */
        rawPrefixHeaderId?: boolean;

        /**
         * Remove only spaces, ' and " from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids
         * @default false
         */
        rawHeaderId?: boolean;

        /**
         * Set the header starting level. For instance, setting this to 3 means that
         *
         *     # foo
         *
         * will be parsed as
         *
         *     <h3>foo</h3>
         *
         * @default 1
         */
        headerLevelStart?: number;

        /**
         * Enable support for setting image dimensions from within markdown syntax.
         * @default false
         */
        parseImgDimensions?: boolean;

        /**
         * Turning this option on will enable automatic linking to urls.
         * @default false
         */
        simplifiedAutoLink?: boolean;

        /**
         * This option excludes trailing punctuation from autolinking urls. Punctuation excluded: . ! ? ( ). Only applies if simplifiedAutoLink option is set to true.
         * @default false
         */
        excludeTrailingPunctuationFromURLs?: boolean;

        /**
         * Turning this on will stop showdown from interpreting underscores in the middle of words as <em> and <strong> and instead treat them as literal underscores.
         * @default false
         */
        literalMidWordUnderscores?: boolean;

        /**
         * Turning this on will stop showdown from interpreting asterisks in the middle of words as <em> and <strong> and instead treat them as literal asterisks.
         * @default false
         */
        literalMidWordAsterisks?: boolean;

        /**
         * Enable support for strikethrough syntax. ~~strikethrough~~ as <del>strikethrough</del>
         * @default false
         */
        strikethrough?: boolean;

        /**
         * Enable support for tables syntax.
         * @default false
         */
        tables?: boolean;

        /**
         * If enabled adds an id property to table headers tags.
         * @default false
         */
        tablesHeaderId?: boolean;

        /**
         * Enable support for GFM code block style.
         * @default true
         */
        ghCodeBlocks?: boolean;

        /**
         * Enable support for GFM tasklists.
         * @default false
         */
        tasklists?: boolean;

        /**
         * Prevents weird effects in live previews due to incomplete input
         * @default false
         */
        smoothLivePreview?: boolean;

        /**
         * Tries to smartly fix indentation problems related to es6 template strings in the midst of indented code.
         * @default false
         */
        smartIndentationFix?: boolean;

        /**
         * Disables the requirement of indenting sublists by 4 spaces for them to be nested, effectively reverting to the old behavior where 2 or 3 spaces were enough.
         * @default false
         */
        disableForced4SpacesIndentedSublists?: boolean;

        /**
         * Parses line breaks as <br>, without needing 2 spaces at the end of the line.
         * @default false
         */
        simpleLineBreaks?: boolean;

        /**
         * Makes adding a space between # and the header text mandatory
         * @default false
         */
        requireSpaceBeforeHeadingText?: boolean;

        /**
         * Enables github @mentions, which link to the username mentioned
         * @default false
         */
        ghMentions?: boolean;

        /**
         * Changes the link generated by @mentions. Showdown will replace {u} with the username. Only applies if ghMentions option is enabled. Example: @tivie with ghMentionsOption set to //mysite.com/{u}/profile will result in <a href="//mysite.com/tivie/profile">@tivie</a>
         * @default https://github.com/{u}
         */
        ghMentionsLink?: string;

        /**
         * Enable e-mail addresses encoding through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities.
         * @default true
         */
        encodeEmails?: boolean;

        /**
         * Open all links in new windows (by adding the attribute target="_blank" to <a> tags)
         * @default false
         */
        openLinksInNewWindow?: boolean;

        /**
         * Support for HTML Tag escaping. ex: \<div>foo\</div>
         * @default false
         */
        backslashEscapesHTMLTags?: boolean;

        /**
         * Enable emoji support. Ex: this is a :smile: emoji For more info on available emojis, see https://github.com/showdownjs/showdown/wiki/Emojis
         * @default false
         */
        emoji?: boolean;

        /**
         * EXPERIMENTAL FEATURE Enable support for underline. Syntax is double or triple underscores ex: __underlined word__. With this option enabled, underscores are no longer parses into <em> and <strong>.
         * @default false
         */
        underline?: boolean;

        /**
         * Outputs a complete html document, including <html>, <head> and <body> tags' instead of an HTML fragment.
         * @default false
         */
        completeHTMLDocument?: boolean;

        /**
         * Enable support for document metadata (defined at the top of the document between ««« and »»» or between --- and ---).
         * @default false
         */
        metadata?: boolean;

        /**
         * Split adjacent blockquote blocks.
         * @default false
         */
        splitAdjacentBlockquotes?: boolean;
    };
}

export default class MarkdownToHtml extends Component<MarkdownToHtmlSignature> {}

export class MarkdownToHtmlCurly extends Component<SignatureWithPositionedArg<MarkdownToHtmlSignature, 'markdown'>> {}
