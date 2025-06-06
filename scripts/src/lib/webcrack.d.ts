import type Matchers from '@codemod/matchers';
import * as m from '@codemod/matchers';
import type { Sandbox } from './deobfuscate';
import type { Plugin } from './plugin';
import type { Bundle } from './unpack';
export { type Sandbox } from './deobfuscate';
export type { Plugin, PluginAPI, PluginObject, Stage } from './plugin';
type Matchers = typeof m;
export interface WebcrackResult {
  code: string;
  bundle: Bundle | undefined;
  /**
   * Save the deobfuscated code and the extracted bundle to the given directory.
   * @param path Output directory
   */
  save(path: string): Promise<void>;
}
export interface Options {
  /**
   * Decompile react components to JSX.
   * @default true
   */
  jsx?: boolean;
  /**
   * Extract modules from the bundle.
   * @default true
   */
  unpack?: boolean;
  /**
   * Deobfuscate the code.
   * @default true
   */
  deobfuscate?: boolean;
  /**
   * Unminify the code. Required for some of the deobfuscate/unpack/jsx transforms.
   * @default true
   */
  unminify?: boolean;
  /**
   * Mangle variable names.
   * @default false
   */
  mangle?: boolean | 'stable' | ((id: string) => boolean | 'stable');
  /**
   * Run AST transformations after specific stages
   */
  plugins?: Plugin[];
  /**
   * Assigns paths to modules based on the given matchers.
   * This will also rewrite `require()` calls to use the new paths.
   *
   * @example
   * ```js
   * m => ({
   *   './utils/color.js': m.regExpLiteral('^#([0-9a-f]{3}){1,2}$')
   * })
   * ```
   */
  mappings?: (m: Matchers) => Record<string, m.Matcher<unknown>>;
  /**
   * Function that executes a code expression and returns the result (typically from the obfuscator).
   */
  sandbox?: Sandbox;
  /**
   * @param progress Progress in percent (0-100)
   */
  onProgress?: (progress: number) => void;
}
export declare function webcrack(code: string, options?: Options): Promise<WebcrackResult>;
//# sourceMappingURL=index.d.ts.map
