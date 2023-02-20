module.exports = {
  purge: false,
  extract: {
    include: ['**/*.{jsx,tsx,css}'],
    exclude: ['node_modules', '.git', '.next'],
  },
  theme: {
    extend: {
      colors: {
        c: {
          pink: '#C77E79',
          red: '#F15D51',
          gold: '#F3AB5C',
          navy: '#00001A',
        },
      },
    },
  },
  plugins: [],
};
