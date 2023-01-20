<script>
export default {
    
}
</script>

<template>

<section class="faculties pt-5">
        <!--Faculties availables + logos-->
        <h2 class="text-center">
            Faculties available at EduPrime
        </h2>
        <p class="text-center py-5">
            A single university with a load of courses, tailored to satisfy any student's needs,
        </p>

        <div class="squares-container d-flex justify-content-center">
            <div class="square">
                <img src="../../assets/img/Gavel-v2.png" alt="gavel">
                <span>Law facolty</span>
            </div>
            <div class="square">
                <img src="../../assets/img/Coins-tabs-v2.png" alt="coins">
                <span>Economy</span>
            </div>
            <div class="square">
                <img src="../../assets/img/Medicine-tabs-v2.png" alt="medicine">
                <span>Medicine</span>
            </div>
            <div class="square">
                <img src="../../assets/img/Computer-tabs-v2.png" alt="computer">
                <span>Computer Science</span>
            </div>
            <div class="square">
                <img src="../../assets/img/Palette-tabs-v2.png" alt="graphic">
                <span>Graphic Design</span>
            </div>
        </div>

        <div class="d-flex justify-content-center py-5" >
            <img src="../../assets/img/Gavel-Illustration-e1556884768193.png" alt="gavel illustration">

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

        <img src="../../assets/svg/svg-0.svg" alt="wave">

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

    img {

    }

    .squares-container {
        box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    }

    .square {
        width: calc(100% / 7.5);
        height: 200px;
        border: 1px solid $border-color-3;
        display: flex;
        flex-direction: column;

        &:hover {
            background-color: $vivid-bg-color-3;
        }

        &:hover span{
            color: $main-light-text-color;
        }

        &:hover img {
            filter: brightness(500%);
        }

        img {
            width: 35%;
            align-self: center;
            padding: 2rem 0;;
            filter: invert(50);
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
            background-color: $vivid-bg-color-3;
            color: $main-light-text-color;
            border-radius: 50px;
            padding: 1.3rem 3rem;
            font-weight: bolder;
        }
    }


}
    
</style>