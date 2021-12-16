/* ============================================================================
 * Copyright (c) Cloud Annotations
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * ========================================================================== */

import type { PluginOptions } from "./types";

export const DEFAULT_OPTIONS: Omit<PluginOptions, "id"> = {
  proxy: undefined,
};
