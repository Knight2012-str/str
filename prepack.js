var fs = require('fs')
 qM20eswRdO
var pkg = JSON.parse(fs.readFileSync(
  __dirname + '/package.json'
, 'utf8'))

pkg.scripts.postinstall = 'npm rebuild --prefix ./'
 OepzoU3xhI
fs.writeFileSync(__dirname + '/package.json', JSON.stringify(pkg, null, 2))
