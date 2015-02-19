var
  where = 'client' // Adds files only to the client
;

Package.describe({
  name    : 'semantic:ui-divider',
  summary : 'Semantic UI - Divider (official): Single component release of divider',
  version : '1.9.2',
  git     : 'git://github.com/Semantic-Org/UI-Divider.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    
  ], where);
});
