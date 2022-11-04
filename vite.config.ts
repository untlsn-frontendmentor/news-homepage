import solid from 'vite-plugin-solid';
import { defineConfig } from 'vite';
import css from 'unocss/vite';
import autoImport from 'unplugin-auto-import/vite';
import path from 'path';
import ssr from 'vite-plugin-ssr/plugin';
import inspect from 'vite-plugin-inspect';

export default defineConfig({
  server: {
    port: 3333,
  },
  build: {
    polyfillModulePreload: false,
  },
  resolve: {
    alias: {
      '~': path.join(__dirname, '/src/'),
      $css: path.join(__dirname, '/src/assets/style/index.ts'),
    },
  },
  plugins: [
    inspect(),
    ssr(),
    solid({ ssr: true }),
    css(),
    autoImport({
      dts: 'src/auto-imports.d.ts',
      imports: [
        'solid-js',
        {
          '@tanstack/solid-query': ['createQuery', 'createInfiniteQuery', 'useQueryClient'],
          clsx: ['clsx'],
          '@solidjs/router': ['Link', 'NavLink', 'Navigate', 'Outlet', 'Route', 'Router', 'Routes', '_mergeSearchString', 'createIntegration', 'hashIntegration', 'normalizeIntegration', 'pathIntegration', 'staticIntegration', 'useHref', 'useIsRouting', 'useLocation', 'useMatch', 'useNavigate', 'useParams', 'useResolvedPath', 'useRouteData', 'useRoutes', 'useSearchParams'],
        },
      ],
    }),
  ],
});
