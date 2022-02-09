/**
 * Copyright (c) Microsoft Corporation.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import path from 'path';
import { Generator } from './generator';

(async () => {
  const argv = process.argv.slice(2);
  const args = argv.filter(a => !a.startsWith('--'));
  const options = argv.filter(a => a.startsWith('--'));
  const rootDir = path.resolve(process.cwd(), args[0] || '');
  const generator = new Generator(rootDir, options.includes('--next'));
  await generator.run();
})().catch(error => {
  console.error(error);
  process.exit(1);
});
