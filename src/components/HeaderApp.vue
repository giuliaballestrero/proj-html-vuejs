<script >

export default {

name: 'HeaderApp',

components:  {

},

data() {
      return {
        navItems: [
          'Home', 'Courses', 'About Us', 'News', 'Pages',
        ]
      }
    }
}

</script>

<template>
    <section class="header-top container-fluid d-flex justify-content-between align-items-center"> 
        <!-- logo e navbar btns-->
        <div class="logo-container">
            <a href="#"><img src="../assets/img/theme_eduprime_logo.png" alt="logo EduPrime"></a>
        </div>

        <nav class="navbar fw-bold">
            <ul class="d-flex">
                <li v-for="item in navItems">
                    <a class="dropdown-toggle px-3" href="#">
                        {{ item }}
                    </a>
                </li>
                <li>
                    <a href="#" class="px-3">Contact</a> 
                </li>
                <li>
                    <a href="#" class="px-3">Purchase</a> 
                </li>
            </ul>
            <button type="button" class="btn">View Courses</button>
        </nav>
    </section>

    <section class="header-bottom text-center">
       <div class="text-wrapper">
            <h1 class="">
                Key to your success
            </h1>
            <p class="py-5">
                EduPrime is the most versatile WordPress theme for educational purposes,
                showcasing universities, courses, secondary schools, etc.
            </p>

            <button type="button" class="btn b-left">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                <span>Search courses</span> 
            </button>
            <button type="button" class="btn b-right">
                <font-awesome-icon icon="fa-solid fa-user-plus" />
               <span>Apply for university</span> 
            </button>
       </div> 
       <aside class="sidebar">
         <div class="d-flex flex-column">
            <a href="#"><font-awesome-icon icon="fa-solid fa-cart-shopping" /></a>
            <a href="#"><font-awesome-icon icon="fa-solid fa-book-open" /></a>
            <a href="#"><font-awesome-icon icon="fa-solid fa-palette" /></a>
         </div>
       </aside>
       <img src="../assets/img/Wave-1.png" alt="wave">
    </section>
    
</template>

<style scoped lang="scss">
@use '../styles/general.scss' as *;
@use '../styles/partials/_variables.scss' as *;


.logo-container {

    img {
        width: 350px;
        padding: 3rem 2rem;
    }
}

nav,
a,
button {
    color: $main-light-text-color;
}

nav {
    padding-right: 2rem;
        ul {
            padding-right: 2rem;
            font-size: 1.2rem;
        }
        
        a {
            text-decoration: none;
        }

        a:hover {
            color: $vivid-text-color-1;
        }   
}

.sidebar {
    background-color: $vivid-bg-color-1;
    width: 40px;
    height: 120px;
    border-radius: 5px;
    position: absolute;
    bottom: 450px;
    position: fixed;

    a:hover {
        color:$vivid-text-color-3;
    }

    .fa-cart-shopping,
    .fa-book-open,
    .fa-palette {
        height: 20px;
        padding: .5rem 0;
    }

}

.header-top {
    background-color: $vivid-bg-color-3;

    button {
        background-color: $vivid-bg-color-1;
        text-transform: uppercase;
        border-radius: 50px;
        padding: 1.3rem 2.5rem;
        font-weight: bolder;
    }

    button:hover {
        background-color: $main-bg-color;
        color:$vivid-text-color-3;
    }

}

.header-bottom {
    //background-image: url(../assets/img/theme_slider2_bg-1.jpg);
    background-color: $vivid-bg-color-3;
    color: $main-light-text-color;
    
    img {
        width: 100%;
        object-position: center;
    }

    .text-wrapper {
        width:45%;
        margin: auto;
        padding-bottom: 7rem;

        h1 {
            font-size: 4rem;
            padding-top: 4rem;
            font-weight: bolder;
            }
        p {
            font-size: 1.4rem;
            line-height: 2.5rem;
        }

        span {
            padding-left: 1rem;
        }

        .b-left,
        .b-right {
            border-radius: 50px;
            padding: 1.3rem 2.5rem;
            font-weight: bolder;
        }

        .b-left {
            background-color: $vivid-bg-color-1; 
            margin-right: 3rem;

            &:hover {
            background-color: $main-bg-color;
            color:$vivid-text-color-3;
    }
        }

        .b-right {
            background-color: $main-bg-color; 
            color: $vivid-text-color-3;

        }
   
    }   
}


</style>
