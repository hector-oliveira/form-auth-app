module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module-resolver', {
        root: ['./src'],
        alias: {
          '@components': './src/components',
          '@allScreens': './src/screens',
          '@appScreens': './src/screens/app',
          '@authScreens': './src/screens/auth',
          '@themes': './src/themes'
        }
      }]
    ]
  };
};
