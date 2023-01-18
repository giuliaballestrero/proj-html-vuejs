<script >
export default {

name: 'MainApp',

components:  {

},
}

</script>

<template>
    <section class="container-fluid">
        <div class="bubble-container">
           <p class="speech-bubble">Purchase Eduprime on Envato Market</p> 
        </div>

        

        <div class="content-wrapper d-flex justify-content-center">
            <div class="col-left">
                <img src="../assets/img/Books-icon.png" alt="book icon">

                <h2 class="fw-bolder py-4">
                    Thousands of courses for any type of student
                </h2>

                <p class="py-4">
                    At EduPrime, it doesn't matter what domain you wish to pursue a career in. Here you can find a course  that satisfies your needs within a click away and applies for a course in a matter of minutes. Eduprime is a ranked as the most versatile university in the world, thanks to the number of courses it provides.
                </p>

                <button type="button" class="btn">Browse through courses</button>
            </div>

            <div class="col-right">
                <img src="../assets/img/Graduation-Illustration.png" alt="graduation img">
            </div>

        </div>
    </section>

    <section>
        <!--Faculties availables + logos-->
    </section>

    <section>
        <!--University year timeline + upcomigs events cards + btn-->
    </section>

    <section>
        <!--Latest Courses cards + 2 layout = inverted (Ex method + Variable Fee)-->
    </section>

    <section>
        <!--Newsletter subs-->
    </section>

    <section>
        <!--Partners logos list-->
    </section>
</template>

<style scoped lang="scss">
@use '../styles/general.scss' as *;
@use '../styles/partials/_variables.scss' as *;

    .bubble-container {
        padding-left: 2rem;
    }
    .speech-bubble {
        position: relative;
        color: $main-light-text-color;
        background: $dark-bg-color-1;
        border-radius: .4em;
        width: 230px;
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
    }

    .col-left {
        padding-right: 5rem;
            img {
                width: 80px;
                padding-bottom: 2rem;
            }

            h2 {
                font-size: 3.6rem;
                padding-right: 2rem;
            }

            button {
            background-color: $vivid-bg-color-1;
            color: $main-light-text-color;
            border-radius: 50px;
            padding: 1.3rem 3rem;
            font-weight: bolder;
            }

    }

    .col-right {
        img {
            max-width: 550px;
            padding-top: 8rem;
        }
    }

    

</style>

