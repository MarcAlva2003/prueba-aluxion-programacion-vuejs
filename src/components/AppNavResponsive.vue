<template>
    <div class="mobilehiddennav">
                <ul class="nav-list--mobile">
                    <li><a>metro</a></li>   
                    <li><a>cercanías</a></li>
                    <li><a>carsharing</a></li>
                </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    props:{
        
    }
}
</script>

<style>
    .mobilehiddennav{
    position: fixed;
    left: 0;
    height: 100%;
    width: 100%;
    top: 10rem;
    background-color: #091E42;
    transition: all 1s ease;
}
.nav-list--mobile{
    display: flex;
    height: 40%;
    padding: 9rem 0 0;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: #fff;
    font-size: 2.8rem;
}
</style>