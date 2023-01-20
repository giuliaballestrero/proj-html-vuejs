<script>
export default {
    data() {
      return {
        partnersList: [
        {
            path: 'partner-2.png',
            alt:'medals logo',

          },
          {
            path: 'partner-3.png',
            alt:'lamp logo',
          },          
          {
            path: 'partner-4.png',
            alt:'books logo',
          },
          {
            path: 'partner-5.png',
            alt:'school building logo',
          },
          {
            path: 'partner-6.png',
            alt:'handmade logo',
          },
          {
            path: 'partner-8.png',
            alt:'cup logo',
          },
          {
            path: 'partner-1.png',
            alt:'paper logo',
          },
          {
            path: 'partner-7.png',
            alt:'communication logo',
          },                                        
        ]
      }
    },

    methods: {
        getImagePath: function(imgPath) {
            return new URL(`../../assets/img/${imgPath}`, import.meta.url).href;
        }
    }
}
</script>

<template>
    <section class="partners text-center pt-5">
        <h2>Partners</h2>
        <p class="w-25 m-auto py-5">Laverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy.</p>

        <div class="partners-logos d-flex justify-content-center">
            <div v-for="partner in partnersList">
                <img :src="getImagePath(partner.path)" :alt="partner.alt">
            </div>
        </div>

        <div class="wave">

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

        .partners-logos div {

            width: 150px;
            height: 50px;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    margin: 0 1rem;
                    opacity: 20%;

                &:hover {
                    opacity: 100%;
                }
                }
        }
}
</style>