<script >

import FacultiesComponent from '../components/MainComponents/FacultiesComponent.vue';
import UniversityComponent from '../components/MainComponents/UniversityComponent.vue';
import EventsComponent from '../components/MainComponents/EventsComponent.vue';
import CoursesComponent from '../components/MainComponents/CoursesComponent.vue';
import SubscriptionComponent from '../components/MainComponents/SubscriptionComponent.vue';
import PartnersComponent from '../components/MainComponents/PartnersComponent.vue';


export default {

    name: 'MainApp',

    components: {
        FacultiesComponent,
        UniversityComponent,
        EventsComponent,
        CoursesComponent,
        SubscriptionComponent,
        PartnersComponent,

    },
}

</script>

<template>
    <section id="introduction" class="container-fluid">
        <div class="bubble-container">
            <p class="speech-bubble">Purchase Eduprime on Envato Market</p>
        </div>



        <div class="content-wrapper d-flex justify-content-center">
            <div class="col-left">
                <img src="../assets/img/Books-icon.png" alt="book icon">

                <h2 class="py-4">
                    Thousands of courses for any type of student
                </h2>

                <p class="py-4">
                    At EduPrime, it doesn't matter what domain you wish to pursue a career in. Here you can find a
                    course that satisfies your needs within a click away and applies for a course in a matter of
                    minutes. Eduprime is a ranked as the most versatile university in the world, thanks to the number of
                    courses it provides.
                </p>

                <button type="button" class="btn">Browse through courses</button>
            </div>

            <div class="col-right">
                <img src="../assets/img/Graduation-Illustration.png" alt="graduation img">
            </div>

        </div>
    </section>
    <FacultiesComponent/>
    <UniversityComponent/>
    <EventsComponent/>
    <CoursesComponent/>
    <SubscriptionComponent/>
    <PartnersComponent/>
    
</template>

<style scoped lang="scss">
@use '../styles/general.scss' as *;
@use '../styles/partials/_variables.scss' as *;

h2 {
    font-weight: bolder;
    font-size: 3.6rem;
}

.small-ico {
        width: 70px;
    }

#introduction {
    background-image: url(../assets/img/home-background.png);
    background-repeat: no-repeat;

}
.bubble-container {
    padding-left: 2rem;
    padding-bottom: 5rem;
}

.speech-bubble {
    position: relative;
    color: $main-light-text-color;
    background: $dark-bg-color-1;
    border-radius: .4em;
    width: 200px;
    padding: .5rem;
    font-size: .8rem;
    text-align: center;

}

.speech-bubble:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 15px solid transparent;
    border-top-color: $secondary-border-color;
    border-bottom: 0;
    margin-left: -15px;
    margin-bottom: -15px;
}

.content-wrapper {
    width: 70%;
    margin: auto;
    padding-bottom: 6rem;
    //background-image: url(../assets/img/home-background.png);
}

.col-left {
    padding-right: 5rem;

    img {
        width: 70px;
        padding-bottom: 2rem;
    }

    h2 {
        padding-right: 2rem;
    }

    button {
        background-color: $vivid-bg-color-1;
        color: $main-light-text-color;
        border-radius: 50px;
        padding: 1.3rem 3rem;
        font-weight: bolder;

        &:hover {
            background-color: $vivid-bg-color-2;
        }
    }

}

.col-right {
    img {
        max-width: 550px;
        padding-top: 8rem;
    }
}

</style>

