---
title: Examples
---

## Tagging

<tagging/>

<<< @/docs/.vuepress/components/Tagging.vue

## Email Contacts

<email-contacts/>

This demonstrates two main things:
1. custom item and option rendering
2. item creation on-the-fly. Try typing a valid and invalid email address.

<<< @/docs/.vuepress/components/EmailContacts.vue

## Single Item Select

<single-item-select/>
The most vanilla of examples. 

<<< @/docs/.vuepress/components/SingleItemSelect.vue

## Country Selector
<country-selector/>
A good example of:
1. support for international characters (diacritics) and
2. how items are scored and sorted. Try typing "islands", for instance.

<<< @/docs/.vuepress/components/CountrySelector.vue

## Limit Dropdown option
<limit-dropdown-options/>
This demo limits the dropdown to have only 10 contries listed.

<<< @/docs/.vuepress/components/LimitDropdownOptions.vue

## Remote Source — Github
<remote-git-hub/>
This example shows how to integrate third-party data from the GitHub API.

<<< @/docs/.vuepress/components/RemoteGitHub.vue

## Remote Source — Rotten Tomatoes
This demo shows how to integrate third-party
data from the Rotten Tomatoes API. Try searching for "Iron Man".
Note: if this doesn't work, it's because the API limit has been reached...
try again later :smile:

<style lang='scss'>
@import('https://cdn.jsdelivr.net/npm/selectize@0.12.6/dist/css/selectize.default.css')
<style/>