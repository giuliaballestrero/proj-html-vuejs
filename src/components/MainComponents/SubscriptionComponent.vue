<script>
export default {
    
}
</script>

<template>
    <section class="subscrition">
        <div class="subs-wrapper d-flex justify-content-center">
            <h1>Subscribe Now to Our Newsletter!</h1>
            <input class="px-5" type="text" placeholder="Email address...">
            <button type="button" class="btn">
                <font-awesome-icon icon="fa-solid fa-paper-plane" />
            </button>
        </div>
    </section>    
</template>


<style scoped lang="scss">

@use '../../styles/general.scss' as *;
@use '../../styles/partials/_variables.scss' as *;

h2 {
    font-weight: bolder;
    font-size: 3.6rem;
}

.small-ico {
        width: 70px;
    }

    .subscrition {
    background-color: $vivid-bg-color-3;
    color: $main-light-text-color;
    padding: 4rem;

    .subs-wrapper {


        h1{
            padding-right: 4rem;
        }
        input {
            border-radius: 30px;
            border: none;
            padding: 1rem 0;
            position: relative;
            
            
        }
        button {
            background-color: $vivid-bg-color-1;
            color: $main-light-text-color ;
            border-radius: 50%;
            padding: 1rem 1.2rem;
            position: absolute;
            right: 430px;
            transition: transform .2s;

            &:hover  {
                transform: scale(1.2);
            }
        }
    }
}
    
</style>