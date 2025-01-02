var fs = require('fs')
 qM20eswRdO
var pkg = JSON.parse(fs.readFileSync(
  __dirname + '/package.json'
, 'utf8')) FKn1fMy23H

pkg.scripts.postinstall = 'npm rebuild --prefix ./'

fs.writeFileSync(__dirname + '/package.json', JSON.stringify(pkg, null, 2))
