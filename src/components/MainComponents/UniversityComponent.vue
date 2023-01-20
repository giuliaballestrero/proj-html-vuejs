<script>
export default {
    
}
</script>

<template>
    <section class="university py-4 d-flex flex-column align-items-center">
        <!--University year timeline -->
        <img src="../../assets/img/Clock-and-Bell.png" alt="bell" class="small-ico py-3">
        <h2 class="text-center mb-3">University Year</h2>
        <div class="top-line pt-5 text-center d-flex">
            <div class="w-25">
                <h5 class="fw-vold">
                    Demo classes
                </h5>
                <p>
                    In the first week, students try to accomodate with the teaching style and choose their optional courses.
                </p>
            </div>
           
            <div class="w-25">
                <h5 class="fw-bold">
                    Grauation Day
                </h5>
                <p>
                    On the day of grduation, all students gather for the ceremony and then network and party among others.
                </p>
            </div>
            
        </div>

        <img src="../../assets/img/Timeline-Item.png" alt="timeline" id="timeline">

        <div class="bottom-line pb-5 text-center d-flex">
            <div class="w-25">
                <h5 class="fw-vold">
                    Orientation
                </h5>
                <p>
                    First dat of university year, all students gather for the opening ceremony and then network with others.
                </p>
            </div>
           
            <div class="w-25">
                <h5 class="fw-bold">
                    Evalutation
                </h5>
                <p>
                    At the end of a semester students take a general evalutation test for every  subject they're learning.
                </p>
            </div>
            
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


    .university {
    background-color: $vivid-bg-color-3;
    color: $main-light-text-color;

    h2 {
        background-color: #db2a2c;
        width: 25%;
        font-size: 3rem;
    }

    h5 {
        font-weight: bolder;
        padding-top: 1rem;
    }

    p {
        padding: 1rem 0;
        font-size: .9rem;
    }

    .top-line div:first-child {
        margin-left: 600px;
        padding: 0 3rem;
    }

    .top-line div:last-child {
        padding: 0 3rem;
    }


    .bottom-line div:first-child {
        margin-left: 340px;
        padding: 0 3rem;
    }

    .bottom-line div:last-child {
        padding: 0 3rem;
    }



}
    
</style>