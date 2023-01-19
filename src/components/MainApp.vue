<script >
export default {

    name: 'MainApp',

    components: {

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

    <section class="faculties py-5">
        <!--Faculties availables + logos-->
        <h2 class="text-center">
            Faculties available at EduPrime
        </h2>
        <p class="text-center py-5">
            A single university with a load of courses, tailored to satisfy any student's needs,
        </p>

        <div class="squares-container d-flex justify-content-center">
            <div class="square">
                <img src="../assets/img/Gavel-v2.png" alt="gavel">
                <span>Law facolty</span>
            </div>
            <div class="square">
                <img src="../assets/img/Coins-tabs-v2.png" alt="coins">
                <span>Economy</span>
            </div>
            <div class="square">
                <img src="../assets/img/Medicine-tabs-v2.png" alt="medicine">
                <span>Medicine</span>
            </div>
            <div class="square">
                <img src="../assets/img/Computer-tabs-v2.png" alt="computer">
                <span>Computer Science</span>
            </div>
            <div class="square">
                <img src="../assets/img/Palette-tabs-v2.png" alt="graphic">
                <span>Graphic Design</span>
            </div>
        </div>

        <div class="d-flex justify-content-center py-5" >
            <img src="../assets/img/Gavel-Illustration-e1556884768193.png" alt="gavel illustration">

            <div class="law-f">
                <h3 class="py-4 fw-bold fs-1">
                    Law Faculty
                </h3>

                <span class="py-4 d-block">
                    Learning from world-leading academics and practitioners, you'll not only receive an outstanding grounding in the theory of law, but you will be able to understand how those principles are applied in practice through a range of student-led activities and competitions.
                </span>

                <button type="button" class="btn">Read More</button>

            </div>
        </div>

    </section>

    <section class="university py-4">
        <!--University year timeline + upcomigs events cards + btn-->
        <h2>University Year</h2>
        <div>
            <h5>
                Demo classes
            </h5>
            <h5>
                Graduation Day
            </h5>
            <img src="" alt="">
            <h5>
                Oreintation
            </h5>
            <h5>
                Evalutation
            </h5>
        </div>

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

h2 {
    font-weight: bolder;
    font-size: 3.6rem;
}

.bubble-container {
    padding-left: 2rem;
    padding-bottom: 7rem;
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
    }

}

.col-right {
    img {
        max-width: 550px;
        padding-top: 8rem;
    }
}

.faculties {
    
    h2 {
        width: 45%;
        margin: auto;
        padding-top: 4rem;
    }

    p {
        width: 20%;
        margin: auto;
        font-size: .9rem;
    }

    .squares-container {
        box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    }

    .square {
        width: calc(100% / 7.5);
        height: 200px;
        border: 1px solid $border-color-5;
        display: flex;
        flex-direction: column;

        img {
            width: 35%;
            align-self: center;
            padding: 2rem 0;;
        }

        // aggiungere hover sulla card //

        span {
            color: $vivid-text-color-3;
            font-weight: bolder;
            align-self: center;
        }
    }

    .law-f {
        width: 35%;
        padding-left: 9rem;

        span {
            color: $grey-text-color-1;
        }

        button {
            background-color: $vivid-bg-color-2;
            color: $main-light-text-color;
            border-radius: 50px;
            padding: 1.3rem 3rem;
            font-weight: bolder;
        }
    }


}

.university {
    background-color: $vivid-bg-color-2;
    color: $main-light-text-color;
}
</style>

