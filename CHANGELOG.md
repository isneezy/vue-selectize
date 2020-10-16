# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Fixed
- To reduce verbosity `keys` prop now uses `[this.label, this.keyBy]` as default value.
### Security
- We have updated a lot of our dependencies.

## [0.6.0]
### Fixed
- Input text truncated when nothing is selected
### Added
- prettier 
### Changed
- Updated dependencies (vue-cli v4)
- Updated documentation and examples

## [0.5.0]
### Added
- add spinner loader while fetching async data

## [0.4.1]
### Fixed
- input takes 2 rows on single selection #22

## [0.4.0]
### Added
- add ability to limit dropdown options using `limit` property [#14](https://github.com/isneezy/vue-selectize/issues/9)
### Fixed
- long phrases were get truncated or hidden behind
- searchText remains after select an option #19

## [0.3.0] - 2018-07-26
### Added
- disabled property control to input and prop
- `search` event [#9](https://github.com/isneezy/vue-selectize/issues/9)
- ability to disable built in search engine (disable search)
### Fixed
- `searchText` input after adding item
### Changed
- `hasFocus` to use the disabled prop to show options

## [0.2.1] - 2018-07-23
### Added
- Distifies to the repository
- theme property
- CHANGELOG.md

### Removed
- `.form-control` class [#3](https://github.com/isneezy/vue-selectize/issues/3)

### Fixed
- This dependency where not found (possible fix) [#5](https://github.com/isneezy/vue-selectize/issues/5)
- Some styles issues

## [0.2.0] - 2017-07-17
### Changed
- `create-function` to be promisse based

## [0.1.1] - 2018-07-09
### Added
- README.md
- Build commad

## [0.1.0] - 2018-07-09
### Added
- VSelectize component
- Demo example

