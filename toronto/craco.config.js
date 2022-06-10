const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@contexts': path.resolve(__dirname, 'src/contexts'),
      '@pages': path.resolve(__dirname, 'src/pages'),
    },
  },
};
