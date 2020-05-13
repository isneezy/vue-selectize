<template>
  <div>
    <div>Movie:</div>
    <VSelectize :options="movies" :searchFn="search" v-model="selected" disableSearch key-by="id" label="title" :create-item="false">
      <template v-slot:option="{ option }">
        <div class="flex overflow-hidden">
          <img class="w-16" style="background: rgba(0,0,0,0.04);" :src="option.posters.thumbnail" alt="">
          <div class="flex-1 pl-2">
            <div class="truncate text-base font-bold">{{ option.title }}</div>
            <div class="mt-2 flex flex-wrap">
              <span class="px-1 rounded text-xs text-white bg-gray-500">
                <i class="fa fa-exclamation-circle mr-1"></i>
                {{ option.mpaa_rating }}
              </span>
              <span class="ml-1 px-1 rounded text-xs text-white bg-green-500">
                <i class="fa fa-clock-o mr-1"></i>
                {{ option.runtime }}
              </span>
            </div>
            <div class="truncate mt-1">{{ option.synopsis || 'No synopsis available at this time.' }}</div>
            <div class="truncate text-sm text-gray-500">
              <template v-if="option.abridged_cast.length">
                <span>Starring </span>
                <span class="text-gray-700">
                {{ option.abridged_cast.map(act => act.name).join(', ') }}
              </span>
              </template>
              <template v-else>Actors unavailable</template>
            </div>
          </div>
        </div>
      </template>
    </VSelectize>
  </div>
</template>

<script>
  import VSelectize from '@isneezy/vue-selectize'
  import debounce from 'lodash.debounce'
  export default {
    name: 'RemoteRottenTomatoes',
    components: { VSelectize },
    data: () => ({
      movies: [],
      selected: null
    }),
    methods: {
      search:  debounce (function (text, done) {
        if (text.length < 3) done()
        fetch(`https://www.rottentomatoes.com/api/private/v1.0/movies.json?q=${text}&page_limit=10`).then(response => {
          return response.json()
        }).then(data => {
          this.movies = data.movies || []
          done()
        }).catch(done)
      }, 300)
    }
  }
</script>

<style scoped>

</style>
