import { join } from 'path';
import type { Config } from 'tailwindcss';

import { skeleton } from '@skeletonlabs/tw-plugin';
import { defaultTheme } from './defaultTheme';

const config = {
  darkMode: 'class',
  content: [
    './src/**/*.{html,js,svelte,ts}',
    join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
  ],
  theme: {
    extend: {
      screens: {
        xs: '320px'
      },
      fontFamily: {
        tiltprism: 'TiltPrism'
      }
    }
  },
  plugins: [
    skeleton({
      themes: {
        custom: [defaultTheme]
      }
    })
  ]
} satisfies Config;

export default config;
