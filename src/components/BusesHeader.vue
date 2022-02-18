<template>
    <header class="header-buses">
        <div class="header-buses-container">
            <img class="logo" src="../img/Aluxion-Web.png" alt="Logo Aluxion">

        <div v-show="!mobile" class="search-stop-input-container">
                <input class="search-stop-input" v-show="!mobile || showInput" v-model="filtroParadaInput" type="text" placeholder="¿Cuál es tu parada?">
                <RouterLink :to="`/map/${filtroParadaInput}`">
                    <svg class="search-stop-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.8504 17.1295L13.4557 12.7365C14.6418 11.3849 15.3626 9.6146 15.3626 7.67878C15.3626 3.44458 11.9164 1.56887e-07 7.68132 1.56887e-07C3.44543 -0.00084889 0 3.44458 0 7.67793C0 11.9113 3.44628 15.3567 7.68132 15.3567C9.6146 15.3567 11.3832 14.6384 12.7348 13.4557L17.1304 17.8495C17.2297 17.9497 17.3605 17.9989 17.4904 17.9989C17.6211 17.9989 17.751 17.9488 17.8504 17.8495C18.0499 17.6508 18.0499 17.3282 17.8504 17.1295ZM7.68132 14.3379C4.0075 14.3379 1.01886 11.3501 1.01886 7.67793C1.01886 4.0058 4.0075 1.01801 7.68132 1.01801C11.3551 1.01801 14.3438 4.0058 14.3438 7.67793C14.3438 11.3501 11.3551 14.3379 7.68132 14.3379Z" fill="#8993A4"/></svg>
                </RouterLink>
                
            <!-- :to="`/map/${filtroParadaInput}`" -->
        </div>

        <svg @click="sendResponsiveNavIsOpen" v-show="mobile && !responsiveNavIsOpen" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="4" y1="8" x2="20" y2="8" /><line x1="4" y1="16" x2="20" y2="16" /></svg>
        <svg @click="sendResponsiveNavIsOpen" v-show="mobile && responsiveNavIsOpen" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>

        </div>


        <div class="home-link">
            <RouterLink :to="`/`">
                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.156064 7.3187L5.72892 12.8825C5.83631 12.966 5.97048 13.0074 6.10623 12.9989C6.24198 12.9904 6.36996 12.9327 6.46614 12.8365C6.56232 12.7403 6.62006 12.6124 6.62854 12.4766C6.63702 12.3409 6.59564 12.2067 6.51218 12.0993L1.89364 7.48075L17.4418 7.48075C17.5899 7.48075 17.7318 7.42194 17.8365 7.31726C17.9412 7.21258 18 7.07061 18 6.92257C18 6.77453 17.9412 6.63255 17.8365 6.52787C17.7318 6.42319 17.5899 6.36438 17.4418 6.36438L1.90265 6.36438L6.51218 1.75485C6.57469 1.70627 6.62615 1.64495 6.66314 1.57496C6.70014 1.50497 6.72182 1.42791 6.72675 1.3489C6.73169 1.26989 6.71976 1.19073 6.69176 1.11668C6.66376 1.04264 6.62033 0.975391 6.56435 0.919413C6.50837 0.863435 6.44113 0.820004 6.36708 0.792005C6.29303 0.764005 6.21387 0.752076 6.13486 0.75701C6.05585 0.761945 5.97879 0.783628 5.90881 0.820623C5.83882 0.857618 5.7775 0.909077 5.72892 0.971584L0.156064 6.54444C0.0559374 6.64844 5.4314e-07 6.7872 5.30519e-07 6.93157C5.17898e-07 7.07594 0.0559373 7.21469 0.156064 7.3187Z" fill="#42526E"/>
                </svg>  
            </RouterLink>
        </div>
        <div class="autobuses-cercanos-messenge">
            <p>

            </p>
            <div v-show="mobile">
                <input class="search-stop-input-mobile" v-model="filtroParadaInput" type="text" placeholder="¿Cuál es tu parada?">
                <RouterLink  :to="`/map/${filtroParadaInput}`">
                    <svg class="search-stop-icon-mobile" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.8504 17.1295L13.4557 12.7365C14.6418 11.3849 15.3626 9.6146 15.3626 7.67878C15.3626 3.44458 11.9164 1.56887e-07 7.68132 1.56887e-07C3.44543 -0.00084889 0 3.44458 0 7.67793C0 11.9113 3.44628 15.3567 7.68132 15.3567C9.6146 15.3567 11.3832 14.6384 12.7348 13.4557L17.1304 17.8495C17.2297 17.9497 17.3605 17.9989 17.4904 17.9989C17.6211 17.9989 17.751 17.9488 17.8504 17.8495C18.0499 17.6508 18.0499 17.3282 17.8504 17.1295ZM7.68132 14.3379C4.0075 14.3379 1.01886 11.3501 1.01886 7.67793C1.01886 4.0058 4.0075 1.01801 7.68132 1.01801C11.3551 1.01801 14.3438 4.0058 14.3438 7.67793C14.3438 11.3501 11.3551 14.3379 7.68132 14.3379Z" fill="#8993A4"/></svg>
                </RouterLink>
            </div>
            <div v-show="!mobile" class="show-stop-number">
                <h1>{{paradaAluxioner}}</h1>
                
            </div>
            
        </div>

    </header>
</template>
<script>
export default {
    data(){
        return{
            responsiveNavIsOpen: false,
            filtroParada: '',
            filtroParadaInput: ''
        }
    },
    props: {
        mobile: null,
        paradaAluxioner: null
    },
    methods:{
        sendResponsiveNavIsOpen(){
            this.responsiveNavIsOpen = !this.responsiveNavIsOpen;
            //Se envia un dato al componente padre.
            //Parametro 1: evento que se ejecuta del lado del padre
            //Parametro 2: el dato a enviar
            this.$emit('sendNavState', this.responsiveNavIsOpen);
        }
    }
}
</script>
<style>
.header-buses{
    background-color: #091E42;

    position: sticky;
    top: 0;
}
.header-buses-container{
    padding: 0 1.6rem;
    height: 10rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* background-color: #091E42; */
}
.home-link{
    padding: 1rem 1.6rem;
}
.search-stop-input-container{
    width: 22rem;
    display: flex;
}
.search-stop-input{
        width: 100%;
        padding: 0;
        margin: 0;
        border: none;
        height: 4rem;
        max-width: 40rem;
        background-color: transparent;
        border-bottom:1px solid #8993A4;
        color: #fff;
}
.search-stop-input:focus,
.search-stop-input-mobile:focus{
        border-bottom:1px solid #fff;
        outline: none;
    }
.search-stop-icon{
    position: absolute;
    right: 7rem;
    top: 4rem;
}
.autobuses-cercanos-messenge{
    padding: 1rem 1.6rem;
}
.search-stop-input-mobile{
        width: 100%;
        padding: 0;
        margin: 0 auto;
        border: none;
        height: 4rem;
        background-color: transparent;
        border-bottom:1px solid #8993A4;
        color: #fff;
}
.search-stop-icon-mobile{
    position: absolute;
    right: 2rem;
    top: 15.7rem
}
@media (min-width: 768px){
    .autobuses-cercanos-messenge{
        width: 100%;
        padding: 1rem 6rem;
    }
    .show-stop-number{
        padding: 1rem 0;
        border-bottom:1px solid #8993A4;
        color: #fff;
    }
    .header-buses-container{
        padding-left: 6rem;
        padding-right: 6rem;
    }
    .home-link{
        padding: 1rem 6rem;
    }
}
@media (min-width: 992px){
    .autobuses-cercanos-messenge{
        padding: 1rem 8rem;
    }
    .header-buses-container{
        padding-left: 8rem;
        padding-right: 8rem;
    }
    .home-link{
        padding: 1rem 8rem;
    }
}
</style>