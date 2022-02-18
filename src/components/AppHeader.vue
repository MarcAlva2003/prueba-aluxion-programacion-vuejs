<template>
    <div class="header-container">
        <img class="logo" src="../img/Aluxion-Web.png" alt="Logo Aluxion">

        <!-- Nav Resolucion Grande -->
            <ul v-show="!mobile" class="nav-list--not-mobile">
                <li><a>metro</a></li>
                <li><a>cercanías</a></li>
                <li><a>carsharing</a></li>
            </ul>

        <!--Nav Resolucion Mobile-->
            <svg @click="sendResponsiveNavIsOpen" v-show="mobile && !responsiveNavIsOpen" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="4" y1="8" x2="20" y2="8" /><line x1="4" y1="16" x2="20" y2="16" /></svg>
            <svg @click="sendResponsiveNavIsOpen" v-show="mobile && responsiveNavIsOpen" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
    </div>
</template>

<script>
export default {
    name: 'navegation',
    data(){
        return{
            responsiveNavIsOpen: false
        }
    },
    props: {
        mobile: null
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
.header-container{
    padding: 0 1.6rem;
    height: 10rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #091E42;
    position: sticky;
    top: 0;
}
.nav-list--not-mobile{
    width: 35rem;
    display: flex;
    justify-content: space-between;
    color: #fff;
}
@media (min-width: 768px){
    .header-container{
        height: 15rem;
        padding: 0 6rem;
    } 
}
@media (min-width: 992px){
    .header-container{
        padding: 0 8rem;
    } 
}
.logo,
a{
    cursor: pointer;
}

</style>