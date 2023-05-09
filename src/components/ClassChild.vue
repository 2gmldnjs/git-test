<template class="q-pa-md q-gutter-md">
    <q-card-section :class="{foo:true, bar:true}">안녕!</q-card-section>
    <!-- 컴포넌트가 사용될 때  -->
    <class-child></class-child>
    <!-- 컴포넌트가 사용시 클래스 추가 -->
    <class-child :class="[baz, boo]"></class-child>
    <!-- 컴포넌트가 사용시 active 클래스 추가 -->
    <class-child :class="{ active: isActive }"></class-child>
  </template>
  
  <script>
  import ClassChild from "components/ClassChild.vue";

    export default {
      title: "Vue Basic",
      name: 'VueEx',
      components:{ClassChild},
      
      data(){
        return{

        }
      },

      computed: {

      },
  
  
      watch:{

      },
  
      mounted(){

  
      },
  
      methods: {
  
        
      },
  
    }
  </script>
  
<style>
	.foo {
	  background-color: red;
	  color:white;
	}
	.bar{
	  color:white;
	}
</style>

  