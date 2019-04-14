const path = require('path')
const fs = require('fs')

const version = process.env.npm_package_version || '0.5.0'
const DELIMITER = '## [Unreleased]'
const REPLACEMENT = `## [${version}]`

// modify CHANGELOG.md
const CHANGELOG = fs.readFileSync(path.resolve('CHANGELOG.md')).toString('UTF-8')
const NEW_CHANGELOG = CHANGELOG.split(DELIMITER).map((partial, index) => {
  if ( index ) {
    return `${REPLACEMENT}${partial}`
  }
  return `${partial}${DELIMITER}\n`
}).join('\n')

// write the new CHANGELOG.md
fs.writeFileSync(path.resolve('CHANGELOG.md'), NEW_CHANGELOG)
