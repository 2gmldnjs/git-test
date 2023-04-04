<template>
  <q-card-selection class="row text-center">
    <q-card-seciton class="col text-h4 text-primary">
      {{ header || "welcome" }}
    </q-card-seciton>
  </q-card-selection>
 </template>

 <script>
 export default {
   name:"ShoppingList",
   title:"쇼핑 리스트",
   data(){
    return {
      header: "Shopping List App"
    }
   }
 }

 </script>

 <style>

 </style>
