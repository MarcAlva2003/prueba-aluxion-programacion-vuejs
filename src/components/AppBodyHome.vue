<template>
        <div class="spam">

        </div>
    <body class="body-container">
        
        <div class="hero">
            <div :class="[{title:!letraChica},{smallTitle:letraChica}]">
                <h1>Don´t be late, aluxioner</h1>
            </div>
            <div class="search-input">
                <input class="search" v-show="!mobile || showInput" v-model="filterAluxioners" type="text" placeholder="¿Cuál es tu parada?">
                <svg class="search-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.8504 17.1295L13.4557 12.7365C14.6418 11.3849 15.3626 9.6146 15.3626 7.67878C15.3626 3.44458 11.9164 1.56887e-07 7.68132 1.56887e-07C3.44543 -0.00084889 0 3.44458 0 7.67793C0 11.9113 3.44628 15.3567 7.68132 15.3567C9.6146 15.3567 11.3832 14.6384 12.7348 13.4557L17.1304 17.8495C17.2297 17.9497 17.3605 17.9989 17.4904 17.9989C17.6211 17.9989 17.751 17.9488 17.8504 17.8495C18.0499 17.6508 18.0499 17.3282 17.8504 17.1295ZM7.68132 14.3379C4.0075 14.3379 1.01886 11.3501 1.01886 7.67793C1.01886 4.0058 4.0075 1.01801 7.68132 1.01801C11.3551 1.01801 14.3438 4.0058 14.3438 7.67793C14.3438 11.3501 11.3551 14.3379 7.68132 14.3379Z" fill="#8993A4"/></svg>
            </div>
        </div>
    </body>
    <AluxionTeam :filter="filterAluxioners"/>
</template>

<script>
import AluxionTeam from './AluxionTeam.vue'

export default {
    data(){
        return{
            padd: 180,
            letraChica: false,
            filterAluxioners: ''
        }
    },
    props: {
        mobile: null,
        
    },
    mounted(){
        window.onscroll = ()=>{
            window.scrollY >= 180 ? this.letraChica = true : this.letraChica =  false;
        }
    },
    components:{
        AluxionTeam
    }
    
}
</script>

<style>
    h1{
        transition: all .1s linear;
    }
    .spam{
        height: 18rem;
        background-color: #091E42;

    }
    .body-container{
        background: #091E42;
        padding: 0 1.6rem;
        position: sticky;
        top: 10rem;
    }
    .hero{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 4.2rem;
        flex-wrap: nowrap;
    }
    .title h1{
        font-size: 4.2rem;
        color: #fff;
    }
    .smallTitle h1{
        font-size: 2.6rem;
        color: #fff;
    }
    .search{
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
    .search:focus{
        border-bottom:1px solid #fff;
        outline: none;
    }
    .search-input{
        display: flex;
        justify-content: end;
        align-items: center;
    }
    @media (min-width: 768px){
    .hero{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
    .body-container{
        top: 15rem;
        padding-left: 6rem;
        padding-right: 6rem;
    }
    .title h1{
        font-size: 5rem;
    }
    .smallTitle h1{
        font-size: 3rem;
    }
    .search-input{
        width: 100%;
    }
    .search{
        width: 90%;
    }
    
    .search-icon{
        position: absolute;
    }

}
@media (min-width: 992px){
    .body-container{
        padding-left: 8rem;
        padding-right: 8rem;
    }
    .title h1{
        font-size: 6rem;
    }
    .smallTitle h1{
        font-size: 4rem;
    }
}
@media (min-width: 1200px){
    
    .title h1{
        font-size: 9rem;
    }
    .smallTitle h1{
        font-size: 5rem;
    }
}
</style>
