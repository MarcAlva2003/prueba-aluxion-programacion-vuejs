<template>
  <div>
    <BusesList :parada="paradaAluxioner" :paradaFiltro="stopFilter"/>
  </div>
</template>

<script>
import BusesList from './BusesList.vue'

export default {
  data() {
    return {
      
    };
  },
  props: {
    paradaAluxioner: null,
    stopFilter: ''
  },
  components:{
      BusesList
  },
  updated(){
    
    if(this.stopFilter != ''){
      console.log(this.stopFilter);
    }
  }
};
</script>
<style>

</style>
