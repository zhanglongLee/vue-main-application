<template>
  <div class="nav">
    <h1>{{ msg }} Page</h1>
  </div>
</template>

<script>
  export default {
    name: 'Nav',
    components: {

    },
    mixins: [],
    props: {
      msg: {
        type: String,
        default: 'Nav'
      }
    },
    data: function () {
      return {

      }
    },
    computed: {

    },
    watch: {

    },
    created() {

    },
    mounted() {

    },
    methods: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .nav {}
</style>
