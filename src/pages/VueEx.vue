<template class="q-pa-md q-gutter-md">
  <div class="text-h4">템플릿 문법</div>
  <q-card-selection>Message:{{ msg }}</q-card-selection>
  <q-separator />

  <q-card-section>Using v-html directive: <span v-html="rawHtml"></span></q-card-section>
  <q-separator />

  <q-card-section>
      <q-btn
        unelevated
        color="primary"
        type="a"
        target="_blank"
        v-bind:id="linkId"
        v-bind:href="link.to"
        :title="link.title"
        :label="link.label"
      ></q-btn>
    </q-card-section>
    <q-separator />

</template>

<script>
  export default {
    name: 'VueEx',
    components:{},
    data(){
      return{
        msg:'hello Vue',
        rawHtml: `<span style="color: red">빨간색이어야 합니다.</span>`,
        linkId: "vue",
        link:{
          to: "http://vuejs.org",
          title: "뷰 공식 사이트",
          label: "vuejs.org",
        },
      }
    },
    computed:{

    },
    watch:{

    },
    mounted(){

    },
    methods:{

    },

    title: "Vue Basic",
  }
</script>

<style>

</style>
