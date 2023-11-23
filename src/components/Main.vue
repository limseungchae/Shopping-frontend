<template>
  <main>
    <div class="album py-5 bg-body-tertiary">
      <div class="container">

        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div class="col" v-for="(item, idx) in  state.items" :key="idx">
            {{item}}
            <Card :item="item"/>
          </div>
        </div>
      </div>
    </div>

  </main>
</template>

<script>
import axios from "axios";
import {reactive} from "vue";
import Card from "@/components/Card.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Main',
  components: {Card},
  setup() {
    const state = reactive({
      items: []
    })

    axios.get("/api/items").then(({data}) => {
      state.items = data;
    })

    return {state}
  }
}
</script>
