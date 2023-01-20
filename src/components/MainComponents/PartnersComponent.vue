<script>
export default {
    
}
</script>

<template>
    <section class="partners text-center pt-5">
        <h2>Partners</h2>
        <p class="w-25 m-auto py-5">Laverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy.</p>

        <div class="partners-logos">
            <img src="../../assets/img/partner-2.png" alt="medals logo">
            <img src="../../assets/img/partner-3.png" alt="lamp logo">
            <img src="../../assets/img/partner-4.png" alt="books logo">
            <img src="../../assets/img/partner-5.png" alt="school building logo">
            <img src="../../assets/img/partner-6.png" alt="handmade logo">
            <img src="../../assets/img/partner-8.png" alt="cup logo">
            <img src="../../assets/img/partner-1.png" alt="paper logo">
            <img src="../../assets/img/partner-7.png" alt="communication logo">
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


    .partners {
    padding-bottom: 10rem;
    background-image: url();

    .partners-logos img {
        width: 100px;
        margin: 0 1rem;
        opacity: 20%;

    &:hover {
        opacity: 100%;
    }

    }
}
</style>