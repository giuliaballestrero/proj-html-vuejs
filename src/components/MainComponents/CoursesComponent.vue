<script>
export default {
    data() {
      return {
        myCards: [
          {
            path: 'Decisions-icon.png',
            alt: 'decision',
            title: 'Make Better Decisions',
            teacher: 'James Collins',
            price: '$21.00',
            icon: 'fa-regular fa-eye',
            btntext: 'View Course'
          },
          {
            path: 'Speaker-icon.png',
            alt: 'speaker',
            title: 'How to be a Speaker',
            teacher: 'James Collins',
            price: '$21.00',
            icon: 'fa-solid fa-plus',
            btntext: 'Find More',
          },
          {
            path: 'Network-icon.png',
            alt: 'network',
            title: 'Network Introductions',
            teacher: 'James Collins',
            price: '$21.00',
            icon: 'fa-solid fa-plus',
            btntext: 'Find More'
          },
          
          {
            path: 'Brand-icon.png',
            alt: 'brand',
            title: 'Brand Management',
            teacher: 'James Collins',
            price: '$21.00',
            icon: 'fa-solid fa-plus',
            btntext: 'Find More'
          },    
        ]
      }
    },
    methods: {
        getImagePath: function(imgPath) {
            return new URL(`../../assets/img/${imgPath}`, import.meta.url).href;
        }
    },
}

</script>

<template>
    <section> <!--latest courses-->
        <!--Latest Courses cards + 2 layout = inverted (Ex method + Variable Fee)-->
        <img src="../../assets/svg/svg-1.svg" alt="wave">
        <div class="latest-courses">
            <div class="text-container">
                <h2 class="pb-4">Latest Courses</h2>
            </div>

            <div class="my-card-wrapper d-flex justify-content-between mb-5">

                <div class="my-card" v-for="card in myCards">
                    <img :src="getImagePath(card.path)" :alt="card.alt">
                    <h5 class="fw-bold py-1">{{card.title}}</h5>
                    <p class="py-3">
                        <font-awesome-icon icon="fa-solid fa-user" />
                        <span class="px-2">Teacher:</span>
                        <span class="fw-bold">{{card.teacher}}</span>
                    </p>
                    
                    <p class="pb-4">
                        <font-awesome-icon icon="fa-regular fa-money-bill-1" />
                        <span class="px-2">Price:</span>
                        <span class="fw-bold">{{ card.price }}</span>  
                    </p>  
                    <button type="button" class="btn"><font-awesome-icon :icon="card.icon" />
                        <span class="ps-3">{{ card.btntext }}</span>
                    </button>          
                </div>
                <!--<div class="my-card">
                    <img src="../../assets/img/Speaker-icon.png" alt="speaker">
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
                    <img src="../../assets/img/Network-icon.png" alt="network">
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
                    <img src="../../assets/img/Brand-icon.png" alt="brand">
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
                </div>-->

            </div>

            <div class="exam-wrapper d-flex justify-content-center">

                <div class="col-left">
                    <img src="../../assets/img/Exam-icon.png" alt="exam icon">

                    <h2 class="py-4">
                        The most efficient examination method 
                    </h2>

                    <p class="py-4 mb-4">
                        EduPrime has gathered teachers from around the globe to brainstorm in order to facilitate the evalutation of our students. Every teacher from our university has an influence on how students are evaluated at his/her subject.
                    </p>

                    <button type="button" class="btn">Discover the Method</button>
                </div>

                <div class="col-right">
                    <img src="../../assets/img/Exam-Illustration.png" alt="exam img">
                </div>

            </div>


            <div class="fees-wrapper d-flex justify-content-center">

                
                <div class="fees-left">
                    <img src="../../assets/img/Girl-Illustration.png" alt="girl books" class="w-100">
                </div>
                

                <div class="fees-right">
                    <img src="../../assets/img/Exam-icon-1.png" alt="fees icon">

                    <h2 class="py-4">
                        Variable fees for international students
                    </h2>

                    <p class="py-4 mb-4">
                        EduPrime has gathered teachers from around the globe to brainstorm in order to facilitate the evalutation of our students. Every teacher from our university has an influence on how students are evaluated at his/her subject.
                    </p>

                    <button type="button" class="btn">List of fees</button>
                </div>

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
  

    .latest-courses {
    padding-top: 1rem;

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
            position: relative;

            p {
                color: $grey-text-color-1;
            }
            
            span {
                font-size: .8rem;
            }

            img {
                width: 25%;
                filter: invert(50);
            }

            button {
            background-color: $vivid-bg-color-3;
            color: $main-light-text-color;
            border-radius: 50px;
            padding: .5rem 1rem;
            font-weight: bolder;
            position: absolute;
            left: 94px;
            }

        }
    }
}

.exam-wrapper {

    width: 70%;
    margin: auto;
    padding-bottom: 6rem;

    .col-right {
        img {
            width: 550px;
        }
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

    p {
        padding-right: 4rem;
    }

    button {
        background-color: $vivid-bg-color-3;
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
            background-color: $vivid-bg-color-3;
            color: $main-light-text-color;
            border-radius: 50px;
            padding: 1.3rem 3rem;
            font-weight: bolder;

            &:hover {
                background-color: $vivid-bg-color-1;
                color: $main-light-text-color;
            }
        }

    }
}

    
</style>