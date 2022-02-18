<template>
    <div class="asd">
        <div class="info-container">
            <BusesHeader :mobile="this.mobile" v-on:sendNavState="getIfNavIsOpen" :paradaAluxioner="$route.params.parada"/>
            <MapBody :paradaAluxioner="$route.params.parada"/>
            <AppNavResponsive v-if="navIsOpen"/>    
        </div>
        <div class="map-container">

        </div>
        <div v-show="mobile" class="mapa-bubble" @click="mapaMobileOpened = true">

        </div>
    </div>
    <div v-show="mapaMobileOpened" class="mapa-mobile">
        <div class="mapa-mobile__header"  @click="mapaMobileOpened = false">
            <div>
                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.156064 7.3187L5.72892 12.8825C5.83631 12.966 5.97048 13.0074 6.10623 12.9989C6.24198 12.9904 6.36996 12.9327 6.46614 12.8365C6.56232 12.7403 6.62006 12.6124 6.62854 12.4766C6.63702 12.3409 6.59564 12.2067 6.51218 12.0993L1.89364 7.48075L17.4418 7.48075C17.5899 7.48075 17.7318 7.42194 17.8365 7.31726C17.9412 7.21258 18 7.07061 18 6.92257C18 6.77453 17.9412 6.63255 17.8365 6.52787C17.7318 6.42319 17.5899 6.36438 17.4418 6.36438L1.90265 6.36438L6.51218 1.75485C6.57469 1.70627 6.62615 1.64495 6.66314 1.57496C6.70014 1.50497 6.72182 1.42791 6.72675 1.3489C6.73169 1.26989 6.71976 1.19073 6.69176 1.11668C6.66376 1.04264 6.62033 0.975391 6.56435 0.919413C6.50837 0.863435 6.44113 0.820004 6.36708 0.792005C6.29303 0.764005 6.21387 0.752076 6.13486 0.75701C6.05585 0.761945 5.97879 0.783628 5.90881 0.820623C5.83882 0.857618 5.7775 0.909077 5.72892 0.971584L0.156064 6.54444C0.0559374 6.64844 5.4314e-07 6.7872 5.30519e-07 6.93157C5.17898e-07 7.07594 0.0559373 7.21469 0.156064 7.3187Z" fill="#42526E"/>
                </svg>
            </div>
        </div>
        <div class="mapa-mobile__map">

        </div>
    </div>
</template>
<script>
import BusesHeader from '../components/BusesHeader.vue'
import MapBody from '../components/MapBody.vue'
import AppNavResponsive from '../components/AppNavResponsive.vue'

export default {
    data(){
        return{
            screenWidth: window.innerWidth,
            mobile: null,
            navIsOpen: false,
            mapaMobileOpened: false
        }
    },
    components:{
        BusesHeader,
        MapBody,
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
<style>
.mapa-bubble{
    width: 6rem;
    height: 6rem;
    position: fixed;
    bottom: 1.6rem;
    right: 1.6rem;
    border-radius: 50%;
    background-image: url('../img/mapa.jpg');
    background-repeat: no-repeat;
}
.mapa-mobile{
    position: fixed;
    top:0;
    right: 0;
    left: 0;
    bottom: 0;
}
.mapa-mobile__header{
    height: 6.8rem;
    width: 100%;
    background-color: #091E42;
    padding: 3rem 1.6rem;
}
.mapa-mobile__map{
    height: calc(100vh - 6.8rem);
    width: 100%;
    background-image: url('../img/mapa.jpg');
            background-repeat: no-repeat;
            background-size: cover;
}
    @media (min-width: 992px){
        .asd{
            display: flex;
        }
        .info-container{
            width: 50%;
        }
        .map-container{
            height: 100vh;
            width: 50%;
            background-image: url('../img/mapa.jpg');
            background-repeat: no-repeat;
            background-size: cover;
            position: sticky;
            top: 0
        }
    }
</style>
