<template>
    <div>
        <div>Email:</div>
        <v-selectize :options="options" @search="text = $event" v-model="selected" :create-item="maybeCreate()" multiple placeholder="Pick some people..." keyBy="email"
                     label="name"
                     :keys="['name', 'email']">
            <template slot="item" slot-scope="{item}">{{item.name}} <{{item.email}}></template>
            <template slot="option" slot-scope="{option}">
                <label>{{ option.name }}</label>
                <span>{{ option.email }}</span>
            </template>
        </v-selectize>
        <div>Current Value: {{ selected }}</div>
    </div>
</template>

<script>
  import VSelectize from '@isneezy/vue-selectize'

  const REGEX_EMAIL = '([a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@' +
    '(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)'
  export default {
    name: 'email-contacts',
    data: () => ({
      text: '',
      options: [
        {name: 'Brian Reavis', email: 'brian@thirdroute.com'},
        {name: 'Nikola Tesla', email: 'nicola@tesla.com'},
        {email: 'someone@gmail.com'}
      ],
      selected: null
    }),
    methods: {
      maybeCreate () {
        const regex = new RegExp('^' + REGEX_EMAIL + '$', 'i')
        const match = this.text.match(regex)
        if (match) return this.createContact
        return false
      },
      createContact (email) {
        const contact = {email}
        this.options.push(contact)
        return contact
      }
    },
    components: {VSelectize}
  }
</script>

<style scoped>
    label, span{
        display: block;
    }
</style>
