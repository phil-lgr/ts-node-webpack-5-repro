import * as webpack from 'webpack';
import { commonOutput } from './webpack.common.config.cjs';

const config: webpack.Configuration = {
  mode: 'production',
  entry: './foo.js',
  output: {
    // commenting this line (not importing from './webpack.common.config.cjs')
    // will remove the error
    ...commonOutput,
  },
};

export default config;
