<script >
import { useAttrs } from 'vue';

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
    <section class="header-top container-fluid d-flex justify-content-between align-items-center fw-bold"> 
        <!-- logo e navbar btns-->
        <div class="logo-container">
            <a href="#"><img src="../assets/img/theme_eduprime_logo.png" alt="logo EduPrime"></a>
        </div>

        <nav class="navbar">
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

    <section class="header-bottom">
        <!--Jumbo Key to your success + btns-->
    </section>
</template>

<style scoped lang="scss">
@use '../styles/general.scss' as *;
@use '../styles/partials/_variables.scss' as *;

* {
    background-color: $vivid-bg-color-2;
}


.logo-container {

    img {
        width: 300px;
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
        }
        
        a {
            text-decoration: none;
        }

        a:hover {
            color: $vivid-text-color-1;
        }   
}

.header-top {
    button {
        background-color: $vivid-bg-color-1;
        text-transform: uppercase;
        border-radius: 30px;
        padding: 1.3rem 2.5rem;
        font-weight: bolder;
    }

    button:hover {
        background-color: $main-bg-color;
        color:$vivid-text-color-3;
    }
}


</style>
