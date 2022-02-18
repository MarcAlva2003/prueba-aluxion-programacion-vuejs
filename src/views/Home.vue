<template>
    <AppHeader :mobile="this.mobile" v-on:sendNavState="getIfNavIsOpen"/>
    <AppBodyHome :mobile="this.mobile"/>
    <!--SIEMPRE ULTIMO-->
    <AppNavResponsive v-if="navIsOpen"/>
</template>

<script>
import AppHeader from '../components/AppHeader.vue'
import AppBodyHome from '../components/AppBodyHome.vue'
import AppNavResponsive from '../components/AppNavResponsive.vue'

export default {
    data(){
        return{
            screenWidth: window.innerWidth,
            mobile: null,
            navIsOpen: false
        }
    },
    components:{
        AppHeader,
        AppBodyHome,
        AppNavResponsive
    },
    methods:{
        getIfNavIsOpen(value){
            this.navIsOpen = value;
        }
    },
    created(){
        this.screenWidth < 768 ?  this.mobile = true : this.mobile = false;
    },
    mounted(){
        window.onresize = ()=>{
            this.screenWidth = window.innerWidth;
            this.screenWidth < 768 ? this.mobile = true : this.mobile = false;
        }
    }
}
</script>