<script >
export default {

name: 'FooterApp',

components:  {

},

data() {
      return {
        eduItems: [
            'Request a website',
            'Browsw Themes', 
            'Payment options', 
            'Support System', 
            'Checkout',
            'Purchase Theme',
        ],

        netItems: [
            'Purchase Theme',
            'Our Benefits',
            'Our Team',
            'Our Services',
            'Other Products',
            'My account',
        ],

        catItems: [
            'Economy',
            'Design',
            'Coaching',
            'Business',
            'Medicine',
            'Law',
            'Fitness',
        ]
      }
    }
}

</script>

<template>
    <footer>
        <section class="f-wrapper d-flex">
        <!--Social + nav ul  + search bar w/categories-->

        <div class="f-left">
            <img src="../assets/img/theme_eduprime_logo.png" alt="eduprime logo">
            <p class="py-4">Eduprime is the most versatile WordPress theme for educational purposes, showcasing universities, courses, secondary schools, etc.</p>
            <div class="social pt-5">
                <a href="#">
                    <font-awesome-icon icon="fa-brands fa-facebook-f" />
                </a>
                <a href="#">
                    <font-awesome-icon icon="fa-brands fa-twitter" />
                </a>
                <a href="#">
                    <font-awesome-icon icon="fa-brands fa-instagram" />
                </a>
            </div>
        </div>

        <div class="f-center d-flex justify-content-center">

            <div class="pe-5">
                <h5 class="fw-bold">Get EduPrime</h5>
                <ul class="py-4">
                    <li v-for="item in eduItems" class="py-2">
                        <a href="#">{{ item }}</a>
                    </li>
                </ul>
            </div>

            <div>
                <h5 class="fw-bold">Networking</h5>
                <ul class="py-4">
                    <li v-for="item in netItems"  class="py-2">
                        <a href="#">{{ item }}</a> 
                    </li>
                </ul>
            </div>

        </div>

        <div class="f-right d-flex flex-column align-items-end">
            <div>
                <input class="px-5" type="text" placeholder="Email address...">
                <button type="button" class="btn">
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                </button>
            </div>
            
            <div>
                <p class="fw-bold pt-4">Search Categories</p>

                <div class="py-4 d-flex flex-wrap justify-content-end">
                    <a href="#" v-for="category in catItems"> 
                        <span>{{ category }}</span>
                    </a>
                </div>

                <p class="py-2">ModelTheme. All rights reserved.</p>

            </div>

        </div>
        </section>

        <div class="d-flex justify-content-between align-items-center px-5">

            <div class="theme-btns">
                <div>
                    <a href="#">
                       <img src="../assets/svg/svg-3.svg" alt="leaf icon">
                        <span>Purchase Theme</span> 
                    </a>
                    
                </div>

                <div>
                    <a href="#">
                        <img src="../assets/svg/svg-2.svg" alt="theme icon">
                        <span>Related Themes</span> 
                    </a>
                </div> 
                   
            </div>
            
            <a href="#" id="top-page">
                <img src="../assets/img/back-to-top-arrow.svg" alt="top arrow">
            </a>
        </div>
    </footer>
</template>

<style scoped lang="scss">
@use '../styles/general.scss' as *;
@use '../styles/partials/_variables.scss' as *;

a {
    text-decoration: none;
    color: inherit;

    &:hover {
        color: $vivid-text-color-1;
    }
}

footer {
    background-color: $vivid-bg-color-3;
    color: $main-light-text-color;
    padding-top: 8rem;
    padding-bottom: 2rem;
}

.f-left,
.f-center,
.f-right {
width: calc( 100% / 3 - 1rem);
}
.f-wrapper {
    width: 70%;
    margin: auto;

    .f-left {

        padding-right: 4rem;
        img {
            width: 300px;
        }

        a {
            padding: 1rem 1.2rem;
            border: 2px solid $border-color-4;
            border-radius: 50%;
            margin-right: 1rem;
        }
        
    }

    .f-right {

        text-align: end;

        input {
            border-radius: 30px;
            border: none;
            padding: 1rem 0;
            position: relative;
            
            
        }
        button {
            background-color: $vivid-bg-color-1;
            color: $main-light-text-color ;
            border-radius: 50%;
            padding: 1rem 1.2rem;
            position: absolute;
            right: 330px;
        }

        a {
            border: 1px solid $border-color-1;
            border-radius: 20px;
            padding: .2rem .7rem;
            margin: .3rem .6rem;

            span {
                text-transform: uppercase;
                font-size: .7rem;
                vertical-align: middle;
            }
        }

        p:last-child{
            color: $vivid-text-color-1;
        }
    }
}

a#top-page {
    background-color: $vivid-bg-color-1;
    color: $main-light-text-color ;
    border-radius: 50%;
    padding: .7rem 1rem;
    }


.theme-btns {

}
.theme-btns div {
    background-color:#000000cc;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    opacity: 90%;
    width: 180px;
    border-radius: 10px;
    padding: .5rem;
    margin-bottom: .5rem;


    img {
        width: 15%;
        padding-left: .5rem;
    }
        
    span {
        padding-left: 1.5rem;
        font-size: .7rem;
        vertical-align: middle;
    }

}
</style>

