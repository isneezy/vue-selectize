<template>
    <div>
        <div>Tags:</div>
        <v-selectize :searchFn="search" :create-item="false" :options="options" v-model="selected" disableSearch>
            <template slot="item" slot-scope="{item}">{{item.username}}</template>
        </v-selectize>
        <div>Current Value: {{ selected }}</div>
    </div>
</template>

<script>
import VSelectize from '@isneezy/vue-selectize'
import debounce from 'lodash.debounce'
export default {
  name: 'remote-git-hub',
  data: () => ({
    options: [],
    selected: null
  }),
  methods: {
    search: debounce (function (text, done) {
      if (text.length < 3) done()
      fetch(`https://api.github.com/legacy/repos/search/${text}`).then(response => {
        return response.json()
      }).then(data => {
        this.options = data['repositories'] || []
        done()
      })
    }, 300)
  },
  components: {VSelectize}
}
</script>