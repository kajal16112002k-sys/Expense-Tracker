// Babel configuration for the Expo / React Native project.
// "babel-preset-expo" bundles all the transforms React Native + Expo need
// (JSX, TypeScript, class properties, etc.) so we don't have to configure
// them individually.
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
