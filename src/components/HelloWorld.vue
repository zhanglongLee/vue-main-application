<template>
  <div>
    imgArr:{{imgArr}}
    <br>
    <button @click="changeImg([1,2,3])">修改home的imgA</button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const {mapState,mapMutations,mapActions} = createNamespacedHelpers('home');
export default {
  data () {
    return {}
  },
  computed:{
    ...mapState(['imgArr'])
  },
  methods: {
    ...mapMutations(['changeImg'])
  },
}
</script>

<style scoped>
</style>
