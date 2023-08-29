import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const defaultTheme: CustomThemeConfig = {
  name: 'default-theme',
  properties: {
    // =~= Theme Properties =~=
    '--theme-font-family-base':
      "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    '--theme-font-family-heading':
      "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    '--theme-font-color-base': '0 0 0',
    '--theme-font-color-dark': '255 255 255',
    '--theme-rounded-base': '8px',
    '--theme-rounded-container': '4px',
    '--theme-border-base': '1px',
    // =~= Theme On-X Colors =~=
    '--on-primary': '255 255 255',
    '--on-secondary': '0 0 0',
    '--on-tertiary': '0 0 0',
    '--on-success': '0 0 0',
    '--on-warning': '0 0 0',
    '--on-error': '255 255 255',
    '--on-surface': '255 255 255',
    // =~= Theme Colors  =~=
    // primary | #00188f
    '--color-primary-50': '217 220 238', // #d9dcee
    '--color-primary-100': '204 209 233', // #ccd1e9
    '--color-primary-200': '191 197 227', // #bfc5e3
    '--color-primary-300': '153 163 210', // #99a3d2
    '--color-primary-400': '77 93 177', // #4d5db1
    '--color-primary-500': '0 24 143', // #00188f
    '--color-primary-600': '0 22 129', // #001681
    '--color-primary-700': '0 18 107', // #00126b
    '--color-primary-800': '0 14 86', // #000e56
    '--color-primary-900': '0 12 70', // #000c46
    // secondary | #FFEBD0
    '--color-secondary-50': '255 252 248', // #fffcf8
    '--color-secondary-100': '255 251 246', // #fffbf6
    '--color-secondary-200': '255 250 243', // #fffaf3
    '--color-secondary-300': '255 247 236', // #fff7ec
    '--color-secondary-400': '255 241 222', // #fff1de
    '--color-secondary-500': '255 235 208', // #FFEBD0
    '--color-secondary-600': '230 212 187', // #e6d4bb
    '--color-secondary-700': '191 176 156', // #bfb09c
    '--color-secondary-800': '153 141 125', // #998d7d
    '--color-secondary-900': '125 115 102', // #7d7366
    // tertiary | #BBFEF0
    '--color-tertiary-50': '245 255 253', // #f5fffd
    '--color-tertiary-100': '241 255 252', // #f1fffc
    '--color-tertiary-200': '238 255 251', // #eefffb
    '--color-tertiary-300': '228 255 249', // #e4fff9
    '--color-tertiary-400': '207 254 245', // #cffef5
    '--color-tertiary-500': '187 254 240', // #BBFEF0
    '--color-tertiary-600': '168 229 216', // #a8e5d8
    '--color-tertiary-700': '140 191 180', // #8cbfb4
    '--color-tertiary-800': '112 152 144', // #709890
    '--color-tertiary-900': '92 124 118', // #5c7c76
    // success | #15cb52
    '--color-success-50': '220 247 229', // #dcf7e5
    '--color-success-100': '208 245 220', // #d0f5dc
    '--color-success-200': '197 242 212', // #c5f2d4
    '--color-success-300': '161 234 186', // #a1eaba
    '--color-success-400': '91 219 134', // #5bdb86
    '--color-success-500': '21 203 82', // #15cb52
    '--color-success-600': '19 183 74', // #13b74a
    '--color-success-700': '16 152 62', // #10983e
    '--color-success-800': '13 122 49', // #0d7a31
    '--color-success-900': '10 99 40', // #0a6328
    // warning | #EAB308
    '--color-warning-50': '252 244 218', // #fcf4da
    '--color-warning-100': '251 240 206', // #fbf0ce
    '--color-warning-200': '250 236 193', // #faecc1
    '--color-warning-300': '247 225 156', // #f7e19c
    '--color-warning-400': '240 202 82', // #f0ca52
    '--color-warning-500': '234 179 8', // #EAB308
    '--color-warning-600': '211 161 7', // #d3a107
    '--color-warning-700': '176 134 6', // #b08606
    '--color-warning-800': '140 107 5', // #8c6b05
    '--color-warning-900': '115 88 4', // #735804
    // error | #d21959
    '--color-error-50': '248 221 230', // #f8dde6
    '--color-error-100': '246 209 222', // #f6d1de
    '--color-error-200': '244 198 214', // #f4c6d6
    '--color-error-300': '237 163 189', // #eda3bd
    '--color-error-400': '224 94 139', // #e05e8b
    '--color-error-500': '210 25 89', // #d21959
    '--color-error-600': '189 23 80', // #bd1750
    '--color-error-700': '158 19 67', // #9e1343
    '--color-error-800': '126 15 53', // #7e0f35
    '--color-error-900': '103 12 44', // #670c2c
    // surface | #1B1F3C
    '--color-surface-50': '221 221 226', // #dddde2
    '--color-surface-100': '209 210 216', // #d1d2d8
    '--color-surface-200': '198 199 206', // #c6c7ce
    '--color-surface-300': '164 165 177', // #a4a5b1
    '--color-surface-400': '95 98 119', // #5f6277
    '--color-surface-500': '27 31 60', // #1B1F3C
    '--color-surface-600': '24 28 54', // #181c36
    '--color-surface-700': '20 23 45', // #14172d
    '--color-surface-800': '16 19 36', // #101324
    '--color-surface-900': '13 15 29' // #0d0f1d
  }
};
