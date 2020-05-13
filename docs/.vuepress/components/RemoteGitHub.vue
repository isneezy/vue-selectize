<template>
    <div>
        <div>Tags:</div>
        <v-selectize key-by="url" label="name" :searchFn="search" :create-item="false" :options="options" v-model="selected" disableSearch>
            <template v-slot:option="{ option }">
              <div class="text-base">
                <i class="fa fa-code-fork"></i>
                <b class="ml-1">{{ option.name }}</b>
                <small class="ml-1">by {{ option.owner }}</small>
              </div>
              <div class="text-gray-500">{{ option.description }}</div>
              <div class="text-xs">
                <span>{{ option.language }}</span>
                <span class="ml-2"><b>{{ option.watchers }}</b> watchers</span>
                <span class="ml-2"><b>{{ option.forks }}</b> forks</span>
              </div>
            </template>
        </v-selectize>
        <div>Current Value: {{ url }}</div>
    </div>
</template>

<script>
import VSelectize from '@isneezy/vue-selectize'
import debounce from 'lodash.debounce'
export default {
  name: 'remote-git-hub',
  data: () => ({
    options: [
      {
        "name": "vue-selectize",
        "owner": "isneezy",
        "description": "Vanila Vue.js component that mimics Selectize behaviour (no need jquery dependency)",
        "language": "Vue",
        "watchers": 30,
        "forks": 5,
        "url": "https://github.com/isneezy/vue-selectize"
      }
    ],
    selected: null
  }),
  computed: {
    url() {
      return this.selected ? this.selected.url : null
    }
  },
  methods: {
    search: debounce (function (text, done) {
      if (text.length < 3) done()
      fetch(`https://api.github.com/legacy/repos/search/${text}`).then(response => {
        return response.json()
      }).then(data => {
        this.options = data.repositories || []
        done()
      }).catch(done)
    }, 500)
  },
  components: {VSelectize}
}
</script>
