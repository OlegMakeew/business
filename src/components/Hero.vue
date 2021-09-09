<template>
    <section class="hero">
        <h3 class="hero__title">
            Find the <strong>Best</strong> Businesses in Town
            <span class="hero__bg-text">BEST BUSINESS</span>
        </h3>
        <form class="hero__form" action="">
            <input class="hero__form-place" type="search" placeholder="burgers, barbers, handymen">
            <div>
                <input class="hero__form-city" type="text" placeholder="Near San Francisco, CA">
                <button class="hero__form-button">
                    Search
                </button>
            </div>
        </form>
        <ul class="hero__list">
            <li class="hero__list-item">
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M5.35977 10.2067L8.18977 7.37666L1.99977 1.19666C1.51977 0.716657 0.689768 0.846657 0.389768 1.46666C-0.320232 2.95666 -0.0602319 4.78666 1.16977 6.02666L5.35977 10.2067ZM12.1398 8.39666C13.6698 9.10666 15.8198 8.60666 17.4098 7.01666C19.3198 5.10666 19.6898 2.36666 18.2198 0.896657C16.7598 -0.563343 14.0198 -0.203343 12.0998 1.70666C10.5098 3.29666 10.0098 5.44666 10.7198 6.97666L1.66977 16.0267C1.27977 16.4167 1.27977 17.0467 1.66977 17.4367C2.05977 17.8267 2.68977 17.8267 3.07977 17.4367L9.25977 11.2767L15.4398 17.4567C15.8298 17.8467 16.4598 17.8467 16.8498 17.4567C17.2398 17.0667 17.2398 16.4367 16.8498 16.0467L10.6698 9.86666L12.1398 8.39666Z"
                        fill="white" />
                </svg>
                <a href="" class="hero__list-link">
                    Restaurants
                </a>
            </li>
            <li class="hero__list-item">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M18.1525 12.4425L18.8725 11.7225C19.2625 11.3325 19.2625 10.7025 18.8725 10.3125L18.8525 10.2925C18.6657 10.1052 18.412 10 18.1475 10C17.883 10 17.6293 10.1052 17.4425 10.2925L14.5825 13.1525L6.0125 4.5825L8.8725 1.7225C9.2625 1.3325 9.2625 0.7025 8.8725 0.3125L8.8525 0.2925C8.66567 0.105247 8.41202 1.43942e-05 8.1475 1.43942e-05C7.88298 1.43942e-05 7.62933 0.105247 7.4425 0.2925L6.7225 1.0125L6.0025 0.2925C5.6125 -0.0975 4.9725 -0.0975 4.5825 0.2925L3.1525 1.7225L2.4325 1.0025C2.0425 0.6125 1.3925 0.6125 1.0025 1.0025C0.6125 1.3925 0.6125 2.0425 1.0025 2.4325L1.7225 3.1525L0.2925 4.5825C-0.0975 4.9725 -0.0975 5.6025 0.2925 5.9925L1.0125 6.7125L0.2925 7.4425C-0.0975 7.8325 -0.0975 8.4625 0.2925 8.8525L0.3125 8.8725C0.7025 9.2625 1.3325 9.2625 1.7225 8.8725L4.5825 6.0125L13.1525 14.5825L10.2925 17.4425C9.9025 17.8325 9.9025 18.4625 10.2925 18.8525L10.3125 18.8725C10.7025 19.2625 11.3325 19.2625 11.7225 18.8725L12.4425 18.1525L13.1625 18.8725C13.5525 19.2625 14.1825 19.2625 14.5725 18.8725L16.0025 17.4425L16.7225 18.1625C17.1125 18.5525 17.7625 18.5525 18.1525 18.1625C18.5425 17.7725 18.5425 17.1225 18.1525 16.7325L17.4325 16.0125L18.8725 14.5825C19.2625 14.1925 19.2625 13.5625 18.8725 13.1725L18.1525 12.4425Z"
                        fill="white" />
                </svg>
                <a href="" class="hero__list-link">
                    Fitness Service
                </a>
            </li>
            <li class="hero__list-item">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M20.9 4H17V1C17 0.45 16.55 0 16 0C15.45 0 15 0.45 15 1V4H11.1C10.51 4 10.05 4.51 10.1 5.1L10.22 6.31C13.9 7.16 17 9.77 17 14L17.02 22H18.72C19.56 22 20.25 21.35 20.35 20.53L21.89 5.1C21.95 4.51 21.49 4 20.9 4ZM14 20H1C0.45 20 0 20.45 0 21C0 21.55 0.45 22 1 22H14C14.55 22 15 21.55 15 21C15 20.45 14.55 20 14 20ZM1.1 14H13.9C14.52 14 15.01 13.44 14.89 12.84C14.24 9.61 10.87 7.99 7.5 7.99C4.13 7.99 0.77 9.61 0.11 12.84C-0.01 13.44 0.49 14 1.1 14ZM14 16H1C0.45 16 0 16.45 0 17C0 17.55 0.45 18 1 18H14C14.55 18 15 17.55 15 17C15 16.45 14.55 16 14 16Z"
                        fill="white" />
                </svg>
                <a href="" class="hero__list-link">
                    Fastfood
                </a>
            </li>
            <li class="hero__list-item">
                <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M18.5 4H16V2C16 0.9 15.1 0 14 0H2C0.9 0 0 0.9 0 2V11C0 12.1 0.9 13 2 13C2 14.66 3.34 16 5 16C6.66 16 8 14.66 8 13H14C14 14.66 15.34 16 17 16C18.66 16 20 14.66 20 13H21C21.55 13 22 12.55 22 12V8.67C22 8.24 21.86 7.82 21.6 7.47L19.3 4.4C19.11 4.15 18.81 4 18.5 4ZM5 14C4.45 14 4 13.55 4 13C4 12.45 4.45 12 5 12C5.55 12 6 12.45 6 13C6 13.55 5.55 14 5 14ZM18.5 5.5L20.46 8H16V5.5H18.5ZM17 14C16.45 14 16 13.55 16 13C16 12.45 16.45 12 17 12C17.55 12 18 12.45 18 13C18 13.55 17.55 14 17 14Z"
                        fill="white" />
                </svg>
                <a href="" class="hero__list-link">
                    Delivery
                </a>
            </li>
        </ul>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';

.hero {
    background: url("../assets/img/herobg.png") no-repeat center;
	background-size: cover;
    color: $text-white;
    text-align: center;
    padding: vw(190) 0 vw(90);
    &__title {
        @include font(400, vw(30), vw(50));
        position: relative;
        z-index: 1;
    }
    &__bg-text {
        @include font(800, vw(90), vw(160));
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        color: $herobg-text;
        opacity: 0.2;
        z-index: -1;
    }
    &__form {
        margin-top: vw(100);
        @include flex();
        &-place, &-city {
            width: vw(445);
            height: vw(50);
            border-radius: vw(30);
            margin-right: vw(30);
            background-color: $color-GrayBlue10;
            border: none;
            color: white;
            padding-left: vw(65);
            box-sizing: border-box;
            &::placeholder {
                color: white;
                @include font(700, vw(12), vw(20));
            }
        }
        &-city {
            width: vw(255);
            background-image: url("../assets/img/form-svg/compass-white.svg");
            background-repeat: no-repeat;
            background-position: vw(26) 50%;
        }
        &-place {
            background-image: url("../assets/img/form-svg/search-white.svg");
            background-repeat: no-repeat;
            background-position: vw(26) 50%;
        }
        &-button {
            @include font(700, vw(12), vw(20));
            color: $text-white;
            width: vw(160);
            height: vw(50);
            background: $orange-bg;
            border: none;
            border-radius: vw(30);
        }
    }
    &__list {
        @include flex();
        margin-top: vw(80);
        &-item {
            @include flex();
            margin-right: vw(35);
            &:last-child {
                margin-right: 0;
            }
        }
        &-link {
            @include font(700, vw(12), vw(20));
            color: $text-white;
            text-decoration: none;
            margin-left: vw(20);
        }
    }
}

@include Desctop {
    .hero {
        padding: vdes(190) 0 vdes(90);
        &__title {
            @include font(400, vdes(35), vdes(50));
        }
        &__bg-text {
            @include font(800, vdes(95), vdes(160));
        }
        &__form {
            margin-top: vdes(100);
            &-place, &-city {
                width: vdes(445);
                height: vdes(50);
                border-radius: vdes(30);
                margin-right: vdes(30);
                &::placeholder {
                    @include font(700, vdes(17), vdes(20));
                }
            }
        &-city {
            width: vdes(255);
            background-position: vdes(25) 50%;
        }
        &-place {
            background-position: vdes(25) 50%;
        }
            &-button {
                @include font(700, vdes(17), vdes(20));
                width: vdes(160);
                height: vdes(50);
                border-radius: vdes(30);
            }
        }
        &__list {
            margin-top: vdes(80);
            &-item {
                margin-right: vdes(35);
            }
            &-link {
                @include font(700, vdes(17), vdes(20));
                margin-left: vdes(20);
            }
        }
    }
}
@include Laptop {
    .hero {
        padding: vlap(190) 0 vlap(90);
        &__title {
            @include font(400, vlap(35), vlap(50));
        }
        &__bg-text {
            @include font(800, vlap(80), vlap(160));
        }
        &__form {
            margin-top: vlap(100);
            &-place, &-city {
                width: vlap(445);
                height: vlap(50);
                border-radius: vlap(30);
                margin-right: vlap(30);
                &::placeholder {
                    @include font(700, vlap(17), vlap(20));
                }
            }
            &-city {
                width: vlap(255);
                background-position: vlap(15) 50%;
            }
            &-place {
                background-position: vlap(15) 50%;
            }
            &-button {
                @include font(700, vlap(17), vlap(20));
                width: vlap(160);
                height: vlap(50);
                border-radius: vlap(30);
            }
        }
        &__list {
            margin-top: vlap(80);
            &-item {
                margin-right: vlap(35);
            }
            &-link {
                @include font(700, vlap(17), vlap(20));
                margin-left: vlap(20);
            }
        }
    }
}
@include Tablet {
    .hero {
        padding: vtab(190) 0 vtab(90);
        &__title {
            @include font(400, vtab(30), vtab(50));
        }
        &__bg-text {
            @include font(800, vtab(55), vtab(70));
        }
        &__form {
            margin-top: vtab(100);
            flex-wrap: wrap;
            &-place, &-city {
                width: vtab(445);
                height: vtab(50);
                border-radius: vtab(30);
                margin-right: vtab(30);
                &::placeholder {
                    @include font(700, vtab(17), vtab(20));
                }
            }
            &-city {
                margin-top: vtab(25);
                width: vtab(255);
                background-position: vtab(5) 50%;
            }
            &-place {
                background-position: vtab(5) 50%;
            }
            &-button {
                margin-top: vtab(25);
                @include font(700, vtab(17), vtab(20));
                width: vtab(160);
                height: vtab(50);
                border-radius: vtab(30);
            }
        }
        &__list {
            margin-top: vtab(80);
            &-item {
                margin-right: vtab(35);
            }
            &-link {
                @include font(700, vtab(17), vtab(20));
                margin-left: vtab(20);
            }
        }
    }
}
@include Phone {
    .hero {
        padding: vmin(190) 0 vmin(90);
        &__title {
            @include font(400, vmin(30), vmin(50));
        }
        &__bg-text {
            @include font(800, vmin(55), vmin(70));
        }
        &__form {
            margin-top: vmin(100);
            flex-wrap: wrap;
            &-place, &-city {
                width: vmin(400);
                height: vmin(50);
                border-radius: vmin(30);
                margin-right: 0;
                padding-left: vmin(45);
                &::placeholder {
                    @include font(700, vmin(17), vmin(20));
                }
            }
            &-city {
                margin-top: vmin(25);
                width: vmin(230);
                margin-right: vmin(30);                
                background-position: vmin(15) 50%;
            }
            &-place {
                background-position: vmin(15) 50%;
            }
            &-button {
                margin-top: vmin(25);
                @include font(700, vmin(17), vmin(20));
                width: vmin(140);
                height: vmin(50);
                border-radius: vmin(30);
            }
        }
        &__list {
            flex-wrap: wrap;
            margin-top: vmin(80);
            &-item {
                margin:0 vmin(35) vmin(15);
            }
            &-link {
                @include font(700, vmin(17), vmin(20));
                margin-left: vmin(20);
            }
        }
    }
}
</style>