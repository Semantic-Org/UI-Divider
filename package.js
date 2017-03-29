
Package.describe({
  name    : 'semantic:ui-divider',
  summary : 'Semantic UI - Divider: Single component release',
  version : '2.2.10',
  git     : 'git://github.com/Semantic-Org/UI-Divider.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    'divider.css'
  ], 'client');
});
