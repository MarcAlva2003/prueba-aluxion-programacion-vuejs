<template>
    <div class="aluxioners-container">
        <div class="subtitle-container">
            <p class="title__team">Team</p>
            <p class="title__aluxioners">Aluxioners</p>
        </div>
        <div class="aluxioners">
            <div class="aluxioner" v-for="aluxioner of aluxioners" v-bind:key="aluxioner" v-on:click="aluxioner.overlay=!aluxioner.overlay" v-show="filter == '' || filter == aluxioner.paradas.aCasa[0] || filter == aluxioner.paradas.aAluxion[0]">
                <div class="aluxioner-img">
                    <img :src="aluxioner.img" alt="">
                </div>
                <div class="aluxioner-info">
                    <h4 class="aluxioner-info__nombre">{{aluxioner.nombre}}</h4>
                    <p class="aluxioner-info__rol">{{aluxioner.rol}}</p>
                </div>
                <!--OVERLAY-->
                <div v-show="aluxioner.overlay" class="overlayBg">
                    <div class="overlayContent">
                        <p class="close">cerrar</p>
                        <div class="ask-way">
                            <p class="ask-way__text">Hey {{aluxioner.nombre}},</p><p class="ask-way__text">¿Cuál es tu rumbo, aluxioner?</p>
                        </div>
                        <div class="options">
                            <!-- <a class="option-button home-button" href="`/map/${aluxioner.paradaACasa}`">casa</a> -->
                            <RouterLink class="option-button home-button" :to="`/map/${aluxioner.paradaACasa}`">casa</RouterLink>
                            <RouterLink class="option-button aluxion-button" :to="`/map/${aluxioner.paradaAAluxion}`">aluxion</RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    
</template>
<style>
    /*ESTILOS OVERLAY*/
    .overlayBg{
        background-color: #091e42dc;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .overlayContent{   
        height: 32.5rem;
        width: min(90%, 65.5rem);
        background-color: #fff;
        text-align: center;
    }
    .close{
        font-size: 1.4rem;
        color: #42526E;
        margin-top: 4rem;
    }
    .close:hover{
        cursor: pointer;
    }
    .ask-way{
        margin-top: 6rem;
        margin-bottom: 4.6rem
    }
    .ask-way__text{
        color: #091E42;
        font-size: 2.8rem;
        line-height: 33px;
        font-weight: 900;
    }
    .option-button{
        background-color: #091E42;
        border: none;
        border-radius: 3.5rem;
        font-size: 1.4rem;
        color: rgba(255, 255, 255, 0.9);
        text-decoration: none;
        font-weight: 400;
        padding: 1rem 4rem;
    }
    .home-button{
        margin-right: 8.3rem;
        padding: 1rem 4.8rem;
    }
    /*ESTILOS ALUXIONERS*/
    .aluxioners-container{
        width: 100%;
        background-color: #091E42;
        min-height: calc(100vh - 20rem);
        padding-bottom: 5rem;
    }
    .subtitle-container{
        width: calc(100% - 3.2rem);
        margin: 0 auto;
        padding-top: 5rem;
        padding-bottom: 4rem;
    }
    .title__team{
        font-size: 1.6rem;
        color: #42526E;
        margin-bottom: .6rem;
    }
    .title__aluxioners{
        font-size: 3.3rem;
        color: rgba(255, 255, 255, 0.9);
    }
    .aluxioners{
        margin: 0 auto;
        width: calc(100% - 3.2rem);
        display: grid;
        justify-content: space-between;
        grid-template-columns: repeat(2, 1fr);
        row-gap: 2rem;
        column-gap: 1rem;
    }
    .aluxioner{
        max-width: 18rem;
        /* border: 1px solid red; */
        margin: 0 auto;
    }
    .aluxioner-img img{
        width: 100%;
    }
    .aluxioner-info{
        padding-top: 2rem;
    }
    .aluxioner-info__nombre{
        padding-bottom: .6rem;
        font-size: 2rem;
        color: rgba(255, 255, 255, .9)
    }
    .aluxioner-info__rol{
        font-size: 1.4rem;
        font-weight: 400;
        color: #8993A4;
    }
    @media (min-width: 768px){
        
        .aluxioners{
            width: calc(100% - 12rem);
            grid-template-columns: repeat(3, 1fr);
        }
        .subtitle-container{
            width: calc(100% - 12rem);
        }
        .aluxioner{
            max-width: 21rem;
            /* width: 19rem; */
            /* height: 27rem; */
            /* border: 1px solid red; */
        }
    }
    @media (min-width: 992px){
        .subtitle-container{
            width: calc(100% - 16rem);
        }
        .aluxioners{
            width: calc(100% - 16rem);
            grid-template-columns: repeat(4, 1fr);

        }
    }
    @media (min-width: 1200px){
        .aluxioners{
            grid-template-columns: repeat(5, 1fr);

        }
    }
    @media (min-width: 1440px){
        .aluxioners{
            grid-template-columns: repeat(6, 1fr);

        }
    }

    
</style>
<script>
export default {
    data(){
        return{
            aluxioners:[
                {
                    nombre: 'Javi',
                    rol: 'CEO & Founder',
                    paradas: {
                        //Desde, hasta
                        aCasa: ['288','681'],
                        aAluxion: ['681','288'],
                    },
                    paradaAAluxion: '681',
                    paradaACasa: '288',
                    rutaAAluxion: '288-681',
                    rutaACasa: '681-288',
                    img: 'src/img/aluxioners/javi.jpg',
                    overlay: false,
                },
                {
                    nombre: 'Aluxioner 01',
                    rol: 'Frontend developer',
                    paradas: {
                        //Desde, hasta
                        aCasa: ['494','3378'],
                        aAluxion: ['3378','494'],
                    },
                    paradaAAluxion: '3378',
                    paradaACasa: '494',
                    rutaAAluxion: '494-3378',
                    rutaACasa: '3378-494',
                    img: 'src/img/aluxioners/aluxioner01-blue.jpg',
                    overlay: false
                },
                {
                    nombre: 'Aluxioner 02',
                    rol: 'Backend developer',
                    paradas: {
                        //Desde, hasta
                        aCasa: ['1229','2908'],
                        aAluxion: ['2908','1229'],
                    },
                    paradaAAluxion: '2908',
                    paradaACasa: '1229',
                    img: 'src/img/aluxioners/aluxioner02-blue.jpg',
                    overlay: false
                },
                {
                    nombre: 'Aluxioner 03',
                    rol: 'Mobile developer',
                    paradas: {
                        //Desde, hasta
                        aCasa: ['2701','1688'],
                        aAluxion: ['1688','2701'],
                    },
                    paradaAAluxion: '1688',
                    paradaACasa: '2701',
                    img: 'src/img/aluxioners/aluxioner03-blue.jpg',
                    overlay: false
                },
                {
                    nombre: 'Aluxioner 04',
                    rol: 'Head of Backend',
                    paradas: {
                        //Desde, hasta
                        aCasa: ['85','59'],
                        aAluxion: ['59','85'],
                    },
                    paradaAAluxion: '59',
                    paradaACasa: '85',
                    img: 'src/img/aluxioners/aluxioner04-blue.jpg',
                    overlay: false
                },
                {
                    nombre: 'Aluxioner 05',
                    rol: 'Designer',
                    paradas: {
                        //Desde, hasta
                        aCasa: ['806','189'],
                        aAluxion: ['189','806'],
                    },
                    paradaAAluxion: '189',
                    paradaACasa: '806',
                    img: 'src/img/aluxioners/aluxioner05-blue.jpg',
                    overlay: false
                }
                
            ],
            idAPasar: '',
        }
    },
    props: {
        filter: ''
    },
    methods:{

    }
}
</script>
