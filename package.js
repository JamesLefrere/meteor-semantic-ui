Package.describe({
  name: "jameslefrere:semantic-ui",
  summary: "Semantic UI 1.0",
  version: "0.1.0",
  git: ""
});

Package.onUse(function(api) {
  api.versionsFrom("1.0");
  api.use("jquery", "client");
  api.addFiles([
    "Semantic-UI/dist/semantic.min.css",
    "Semantic-UI/dist/semantic.min.js",
    "Semantic-UI/dist/themes/default/assets/fonts/icons.ttf",
    "Semantic-UI/dist/themes/default/assets/fonts/icons.woff"
  ], "client");
});
