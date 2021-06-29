<template>
  <div class="events" :class="{ supported: $store.state.providerType == 'metamask' }">
    <b-card title="💥 Événements">
        <b-card-text>
          Depuis le dernier chargement.
        </b-card-text>
        <table class="events">
          <thead><tr><td>Date</td><td>Hashcode</td><td>Certifié</td></tr></thead>
          <tbody>
            <tr class="event" v-for="e in $store.state.newEvents" v-bind:key="e.transaction">
              <td class="date">{{e.date}}</td>
              <td class="hashcode"><code>{{e.data.hash}}</code></td>
              <td v-if="e.transactionUrl" class="transaction link" :title="e.transaction"><a :href="e.transactionUrl" target="_blank" rel="noopener"><i class="icon icon-pin"></i></a></td>
              <td v-if="e.data.from.toUpperCase() == $store.state.provider.selectedAddress.toUpperCase()">
                <p  class="certificat"><i class="icon icon-certificatealt"></i></p>
              </td>
            </tr>
          </tbody>
        </table>
    </b-card>
  </div>
</template>



<style scoped>
div.events {
  display: none;
}
div.events.supported {
  display: block;
}
table.events {
  text-align: center;
}
.transaction a, .certificat {
  text-decoration: none;
}
.icon {
  font-size: 1.5em;
  color: green;
}
</style>
