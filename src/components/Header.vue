<template>
    <header class="header">
        <div class="header__logo">
            <img src="../assets/img/Logo.svg" alt="logo">
            <h3 class="header__logo-text">
                Constructor
            </h3>
        </div>
        <nav class="header__nav">
            <ul class="header__nav-list">
                <li class="header__nav-item">
                    <a href="" class="header__nav-link">
                        Write a Review
                    </a>
                </li>
                <li class="header__nav-item">
                    <a href="" class="header__nav-link">
                        Categories
                    </a>
                </li>
                <li class="header__nav-item">
                    <a href="" class="header__nav-link">
                        Log In
                    </a>
                </li>
                <li class="header__nav-item">
                    <a href="" class="header__nav-link">
                        Sing Up
                    </a>
                </li>
            </ul>
        </nav>
        <div class="search">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd"
                    d="M12.5006 11.0006H11.7106L11.4306 10.7306C12.6306 9.33063 13.2506 7.42063 12.9106 5.39063C12.4406 2.61063 10.1206 0.390626 7.32063 0.0506256C3.09063 -0.469374 -0.469374 3.09063 0.0506256 7.32063C0.390626 10.1206 2.61063 12.4406 5.39063 12.9106C7.42063 13.2506 9.33063 12.6306 10.7306 11.4306L11.0006 11.7106V12.5006L15.2506 16.7506C15.6606 17.1606 16.3306 17.1606 16.7406 16.7506C17.1506 16.3406 17.1506 15.6706 16.7406 15.2606L12.5006 11.0006ZM6.50063 11.0006C4.01063 11.0006 2.00063 8.99063 2.00063 6.50063C2.00063 4.01063 4.01063 2.00063 6.50063 2.00063C8.99063 2.00063 11.0006 4.01063 11.0006 6.50063C11.0006 8.99063 8.99063 11.0006 6.50063 11.0006Z"
                    fill="white" />
            </svg>
            <input type="text" placeholder="Search...">
        </div>
        <div class="header__location">
            <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M7 0C3.13 0 0 3.13 0 7C0 11.17 4.42 16.92 6.24 19.11C6.64 19.59 7.37 19.59 7.77 19.11C9.58 16.92 14 11.17 14 7C14 3.13 10.87 0 7 0ZM7 9.5C5.62 9.5 4.5 8.38 4.5 7C4.5 5.62 5.62 4.5 7 4.5C8.38 4.5 9.5 5.62 9.5 7C9.5 8.38 8.38 9.5 7 9.5Z"
                    fill="white" />
            </svg>
            <ul class="location__citys">
                <li class="location__citys-item">
                    New York
                </li>
            </ul>
            <button class="location__citys-button">
                <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M9.4625 0.292486L5.5825 4.17249L1.7025 0.292486C1.51567 0.105233 1.26202 0 0.9975 0C0.732982 0 0.479331 0.105233 0.2925 0.292486C-0.0975 0.682486 -0.0975 1.31249 0.2925 1.70249L4.8825 6.29249C5.2725 6.68249 5.9025 6.68249 6.2925 6.29249L10.8825 1.70249C11.2725 1.31249 11.2725 0.682486 10.8825 0.292486C10.4925 -0.0875144 9.8525 -0.0975144 9.4625 0.292486Z"
                        fill="white" />
                </svg>
            </button>
        </div>
        <div class="header__categories">
            <div class="burger">
                <span></span>
            </div>
            <div class="header__categories-text">
                Categories Business
            </div>
        </div>
    </header>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';


</style>