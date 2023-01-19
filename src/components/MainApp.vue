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

    <section class="university py-4 d-flex flex-column align-items-center">
        <!--University year timeline -->
        <img src="../assets/img/Clock-and-Bell.png" alt="bell" class="small-ico py-3">
        <h2 class="text-center">University Year</h2>
        <div class="top-line py-5 text-center d-flex justify-content-center">
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

        <img src="../assets/img/Timeline-Item.png" alt="timeline" id="timeline">

        <div class="bottom-line py-5 text-center d-flex justify-content-center">
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


    <section class="up-events d-flex flex-column align-items-center">
        <!--upcomigs events cards + btn-->
        <img src="../assets/img/upcoming-events-calendar-icon.png" alt="event calendar" class="small-ico py-3">
        <h2 class="text-center">Upcoming Events</h2>    

        <div class="my-card-wrapper d-flex justify-content-between">

            <div class="my-card">
                <h3 class="fw-bold py-1">Coaching Sessions</h3>
                <font-awesome-icon icon="fa-solid fa-calendar-days" /><span class="px-2">20 may 21:30 PM</span>
                <p class="py-3">Lorem ipsum dolor sit amet consectetur adipisicing fugit nisi reprehenderit[...]</p>
                <button type="button" class="btn"><font-awesome-icon icon="fa-solid fa-plus" />Find More</button>
            </div>
            <div class="my-card">
                <h3 class="fw-bold py-1">Coaching Sessions</h3>
                <font-awesome-icon icon="fa-solid fa-calendar-days" /><span class="px-2">20 may 21:30 PM</span>
                <p class="py-3">Lorem ipsum dolor sit amet consectetur adipisicing fugit nisi reprehenderit[...]</p>
                <button type="button" class="btn"><font-awesome-icon icon="fa-solid fa-plus" />Find More</button>
            </div>
            <div class="my-card">
                <h3 class="fw-bold py-1">Coaching Sessions</h3>
                <font-awesome-icon icon="fa-solid fa-calendar-days" /><span class="px-2">20 may 21:30 PM</span>
                <p class="py-3">Lorem ipsum dolor sit amet consectetur adipisicing fugit nisi reprehenderit[...]</p>
                <button type="button" class="btn"><font-awesome-icon icon="fa-solid fa-plus" />Find More</button>
            </div>

        </div>

        <button type="button" class="btn">View All Events</button>
    </section>

    <section>
        <!--Latest Courses cards + 2 layout = inverted (Ex method + Variable Fee)-->
        <div class="latest-courses">
            <div class="text-container">
                <h2 class="py-4">Latest Courses</h2>
            </div>

            <div class="my-card-wrapper d-flex justify-content-between mb-5">

                <div class="my-card">
                    <img src="../assets/img/Decisions-icon.png" alt="decision">
                    <h5 class="fw-bold py-1">Make Better Decisions</h5>
                    <p class="py-3">
                        <font-awesome-icon icon="fa-solid fa-user" />
                        <span class="px-2">Teacher:</span>
                        <span class="fw-bold">James Collins</span>
                    </p>
                    
                    <p class="pb-4">
                        <font-awesome-icon icon="fa-regular fa-money-bill-1" />
                        <span class="px-2">Price:</span>
                        <span class="fw-bold">$21.00</span>  
                    </p>  
                    <button type="button" class="btn"><font-awesome-icon icon="fa-regular fa-eye" />View Course</button>          
                </div>
                <div class="my-card">
                    <img src="../assets/img/Speaker-icon.png" alt="speaker">
                    <h5 class="fw-bold py-3">How to be a Speaker</h5>
                    <p class="py-1">
                        <font-awesome-icon icon="fa-solid fa-user" />
                        <span class="px-2">Teacher:</span>
                        <span class="fw-bold">James Collins</span>
                    </p>
                    
                    <p class="pb-4">
                        <font-awesome-icon icon="fa-regular fa-money-bill-1" />
                        <span class="px-2">Price:</span>
                        <span class="fw-bold">$21.00</span>  
                    </p>
                    <button type="button" class="btn"><font-awesome-icon icon="fa-solid fa-plus" />Find More</button>          
                </div>
                <div class="my-card">
                    <img src="../assets/img/Network-icon.png" alt="network">
                    <h5 class="fw-bold py-3">Network Introductions</h5>
                    <p class="py-1">
                        <font-awesome-icon icon="fa-solid fa-user" />
                        <span class="px-2">Teacher:</span>
                        <span class="fw-bold">James Collins</span>
                    </p>
                    
                    <p class="pb-4">
                        <font-awesome-icon icon="fa-regular fa-money-bill-1" />
                        <span class="px-2">Price:</span>
                        <span class="fw-bold">$21.00</span>  
                    </p>   
                    <button type="button" class="btn"><font-awesome-icon icon="fa-solid fa-plus" />Find More</button>          
                </div>
                <div class="my-card">
                    <img src="../assets/img/Brand-icon.png" alt="brand">
                    <h5 class="fw-bold py-3">Brand Management</h5>
                    <p class="py-1">
                        <font-awesome-icon icon="fa-solid fa-user" />
                        <span class="px-2">Teacher:</span>
                        <span class="fw-bold">James Collins</span>
                    </p>
                    
                    <p class="pb-4">
                        <font-awesome-icon icon="fa-regular fa-money-bill-1" />
                        <span class="px-2">Price:</span>
                        <span class="fw-bold">$21.00</span>  
                    </p>
                       
                    <button type="button" class="btn"><font-awesome-icon icon="fa-solid fa-plus" />Find More</button>          
                </div>

            </div>

            <div class="exam-wrapper d-flex justify-content-center">

                <div class="col-left">
                    <img src="../assets/img/Exam-icon.png" alt="exam icon">

                    <h2 class="py-4">
                        The most efficient examination method 
                    </h2>

                    <p class="py-4 mb-4">
                        EduPrime has gathered teachers from around the globe to brainstorm in order to facilitate the evalutation of our students. Every teacher from our university has an influence on how students are evaluated at his/her subject.
                    </p>

                    <button type="button" class="btn">Discover the Method</button>
                </div>

                <div class="col-right">
                    <img src="../assets/img/Exam-Illustration.png" alt="exam img">
                </div>

            </div>


            <div class="fees-wrapper d-flex justify-content-center">

                
                <div class="fees-left">
                    <img src="../assets/img/Girl-Illustration.png" alt="girl books" class="w-100">
                </div>
                

                <div class="fees-right">
                    <img src="../assets/img/Exam-icon-1.png" alt="fees icon">

                    <h2 class="py-4">
                        variable fees for international students
                    </h2>

                    <p class="py-4 mb-4">
                        EduPrime has gathered teachers from around the globe to brainstorm in order to facilitate the evalutation of our students. Every teacher from our university has an influence on how students are evaluated at his/her subject.
                    </p>

                    <button type="button" class="btn">List of fees</button>
                </div>

            </div>

        </div>
    </section>

    <section class="subscrition">
        <div class="subs-wrapper d-flex justify-content-center">
            <h1>Subscribe Now tu Our Newsletter!</h1>
            <input class="px-5" type="text" placeholder="Email address...">
            <button type="button" class="btn">
                <font-awesome-icon icon="fa-solid fa-paper-plane" />
            </button>
        </div>
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

.small-ico {
        width: 70px;
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
    background-color: $vivid-bg-color-3;
    color: $main-light-text-color;

    h2 {
        background-color: #db2a2c;
        width: 25%;
        font-size: 3rem;
    }

    h5 {
        font-weight: bolder;
        padding-top: 3rem;
    }

    p {
        padding: 1rem 0;
        font-size: .9rem;
    }


}

.up-events {
    background-color: $vivid-bg-color-3;
    color: $main-light-text-color;
    padding-bottom: 5rem;

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

            span,
            p,
            .fa-calendar-days {
                color: $grey-text-color-1;
            }
            
            span {
                font-size: .8rem;
            }

            button {
            background-color: $vivid-bg-color-2;
            color: $main-light-text-color;
            border-radius: 50px;
            padding: .5rem 1rem;
            font-weight: bolder;
        }


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

.latest-courses {
    padding-top: 5rem;

    .text-container {
        width: 70%;
        margin: auto;
        padding-bottom: 2rem;
    }
    
    .my-card-wrapper {
        width: 70%;
        margin: auto;
        padding-bottom: 4rem;

        .my-card {
            width: calc(100% / 4 - 1rem);
            background-color: $main-bg-color;
            color: $main-dark-text-color;
            padding: 1rem;
            text-align: center;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;

            p {
                color: $grey-text-color-1;
            }
            
            span {
                font-size: .8rem;
            }

            img {
                width: 25%;
            }

            button {
            background-color: $vivid-bg-color-2;
            color: $main-light-text-color;
            border-radius: 50px;
            padding: .5rem 1rem;
            font-weight: bolder;
            }

        }
    }
}

.exam-wrapper {

    width: 70%;
    margin: auto;
    padding-bottom: 6rem;

    .col-left {
    padding-right: 5rem;

    img {
        width: 70px;
        padding-bottom: 2rem;
    }

    h2 {
        padding-right: 2rem;
    }

    p {
        padding-right: 4rem;
    }

    button {
        background-color: $vivid-bg-color-2;
        color: $main-light-text-color;
        border-radius: 50px;
        padding: 1.3rem 3rem;
        font-weight: bolder;

        &:hover {
          
        }
    }

}
}

.fees-wrapper {

width: 70%;
margin: auto;
padding-top: 5rem;
padding-bottom: 6rem;
    .fees-right {
        padding-left: 8rem;
        width: 100%;

        img {
            width: 70px;
            padding-bottom: 2rem;
        }

        h2 {
            padding-right: 2rem;
        }

        p {
            padding-right: 4rem;
        }

        button {
            background-color: $vivid-bg-color-2;
            color: $main-light-text-color;
            border-radius: 50px;
            padding: 1.3rem 3rem;
            font-weight: bolder;

            &:hover {
            
            }
        }

    }
}

.subscrition {
    background-color: $vivid-bg-color-3;
    color: $main-light-text-color;
    padding: 4rem;
    position: relative;

    .subs-wrapper {
        h1{
            padding-right: 4rem;
        }
        input {
            border-radius: 30px;
            border: none;
            padding: 1rem 0;
            
            
        }
        button {
            background-color: $vivid-bg-color-1;
            color: $main-light-text-color ;
            border-radius: 50%;
            padding: 1rem 1.2rem;
            position: absolute;
            right: 430px;
            top: 63px;


        }
    }
}
</style>

