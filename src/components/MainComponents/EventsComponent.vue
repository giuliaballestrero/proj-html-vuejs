<script>
export default {
    data() {
      return {
        eventsList: [
        {
            title: 'Coaching Sessions',
            date: '20 may 21:30 PM',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing fugit nisi reprehenderit[...]',
            btn:'Find More',
          },
          {
            title: 'Coaching Sessions',
            date: '24 mar 18:00 PM',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing fugit nisi reprehenderit[...]',
            btn:'Find More',
          },          
          {
            title: 'Coaching Sessions',
            date: '12 feb 13:30 PM',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing fugit nisi reprehenderit[...]',
            btn:'Find More',
          },

        ]
      }
    },

    /*methods: {
        getImagePath: function(imgPath) {
            return new URL(`../../assets/img/${imgPath}`, import.meta.url).href;
        }
    },*/
}
</script>

<template>
    <section class="up-events d-flex flex-column align-items-center">
        <!--upcomigs events cards + btn-->
        <img src="../../assets/img/upcoming-events-calendar-icon.png" alt="event calendar" class="small-ico py-3">
        <h2 class="text-center">Upcoming Events</h2>    

        <div class="my-card-wrapper d-flex justify-content-between">

            <div class="my-card" v-for="event in eventsList">
                <h3 class="fw-bold py-1">{{ event.title }}</h3>
                <font-awesome-icon icon="fa-solid fa-calendar-days" /><span class="px-2">{{event.date}}</span>
                <p class="py-3">{{ event.text }}</p>
                <button type="button" class="btn"><font-awesome-icon icon="fa-solid fa-plus" />{{ event.btn }}</button>
            </div>
        </div>

        <button type="button" class="btn">View All Events</button>

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

    .up-events {
    background-color: $vivid-bg-color-3;
    color: $main-light-text-color;
    padding-bottom: 2rem;

    h2 {
        padding-bottom: 5rem;
    }

    .my-card-wrapper {
        width: 70%;
        padding-bottom: 4rem;
    }
        .my-card {
            width: calc(100% / 3 - 2rem);
            background-color: $main-bg-color;
            color: $main-dark-text-color;
            border-radius: 20px;
            padding: 1.5rem;
            text-align: center;
            position: relative;

            span,
            p,
            .fa-calendar-days {
                color: $grey-text-color-1;
            }
            
            span {
                font-size: .8rem;
            }

            button {
                background-color: $vivid-bg-color-3;
                box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
                color: $main-light-text-color;
                border-radius: 50px;
                padding: .5rem 1rem;
                font-weight: bolder;
                position: absolute;
                left: 140px;

                &:hover {
                    background-color: $vivid-bg-color-1;
                }

            }
    }

    button {
        background-color: $vivid-bg-color-1;
        color: $main-light-text-color;
        border-radius: 50px;
        padding: 1.3rem 3rem;
        font-weight: bolder;

        &:hover {
            background-color: $vivid-bg-color-3;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        }
    }
}

    
</style>