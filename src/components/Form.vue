<template>
    <section class="form">
        <div class="container">
            <div class="form__content">
                <div class="form__img">
                    <img src="@/assets/img/form-img.svg" alt="">
                </div>
                <div class="form__info">
                    <div class="form__info-text">
                        <div>
                            <h6 class="form__info-title">
                                Help the Community
                            </h6>
                            <p class="form__info-description">
                                Start helping others by sharing your experience.
                            </p>
                        </div>
                        <button class="form__button-close">
                            <svg width="15" height="15" viewBox="0 0 14 14" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M12.8925 0.302486C12.7057 0.115233 12.452 0.01 12.1875 0.01C11.923 0.01 11.6693 0.115233 11.4825 0.302486L6.5925 5.18249L1.7025 0.292486C1.51567 0.105233 1.26202 0 0.9975 0C0.732982 0 0.479331 0.105233 0.2925 0.292486C-0.0975 0.682486 -0.0975 1.31249 0.2925 1.70249L5.1825 6.59249L0.2925 11.4825C-0.0975 11.8725 -0.0975 12.5025 0.2925 12.8925C0.6825 13.2825 1.3125 13.2825 1.7025 12.8925L6.5925 8.00249L11.4825 12.8925C11.8725 13.2825 12.5025 13.2825 12.8925 12.8925C13.2825 12.5025 13.2825 11.8725 12.8925 11.4825L8.0025 6.59249L12.8925 1.70249C13.2725 1.32249 13.2725 0.682486 12.8925 0.302486Z"
                                    fill="#C3CAD9" />
                            </svg>
                        </button>
                    </div>
                    <div class="form__info-form">
                        <form action="">
                            <input class="form__info-search" type="text" placeholder="Name Company">
                            <input class="form__info-compass" type="text" placeholder="Near San Francisco, CA">
                            <button class="form__button-next"> Next
                                <svg width="7" height="11" viewBox="0 0 7 11" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M0.473012 0.67408C0.109012 1.03808 0.109012 1.62608 0.473012 1.99008L4.09435 5.61141L0.473012 9.23275C0.109012 9.59675 0.109012 10.1847 0.473012 10.5487C0.837012 10.9127 1.42501 10.9127 1.78901 10.5487L6.07301 6.26475C6.43701 5.90075 6.43701 5.31275 6.07301 4.94875L1.78901 0.664747C1.43435 0.31008 0.837012 0.31008 0.473012 0.67408Z"
                                        fill="white" />
                                    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0"
                                        width="7" height="11">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M0.473012 0.67408C0.109012 1.03808 0.109012 1.62608 0.473012 1.99008L4.09435 5.61141L0.473012 9.23275C0.109012 9.59675 0.109012 10.1847 0.473012 10.5487C0.837012 10.9127 1.42501 10.9127 1.78901 10.5487L6.07301 6.26475C6.43701 5.90075 6.43701 5.31275 6.07301 4.94875L1.78901 0.664747C1.43435 0.31008 0.837012 0.31008 0.473012 0.67408Z"
                                            fill="white" />
                                    </mask>
                                    <g mask="url(#mask0)">
                                    </g>
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';

.form {
    .container {
        padding-bottom:vw(30);
    }
    &__content {
        background: $bg-white;
        box-shadow: 0 vw(2) vw(5) rgba(54, 61, 77, 0.03);
        border-radius: vw(10);
        padding: vw(60);
        @include flex($justify: left);
    }
    &__button {
        &-next {
            width: vw(125);
            height: vw(50);
            background-color: $orange-bg;
            border-radius: vw(30);
            border: none;
            color: $text-white;
            @include font(700, vw(12), vw(20));
        }
        &-close {
            height: vw(25);
            border: none;
            background-color: $bg-white;
        }
    }
    &__info {
        margin-left: vw(80);
        &-text {
            display: flex;
            justify-content: space-between
        }
        &-title {
            @include font(700, vw(16), vw(30));
            color: $color-GrayBlue50;
        }
        &-description {
            @include font(600, vw(13), vw(25));
            color: $color-GrayBlue70;
            margin: vw(20) 0 vw(30);
        }
        &-form {
            input {
                box-sizing: border-box;
                padding-left: vw(65);
                width: vw(250);
                height: vw(50);
                border: vw(2) solid $border-color;
                border-radius: vw(30);
                margin-right: vw(20);
                &::placeholder {
                    @include font(700, vw(12), vw(20));
                    color: $color-GrayBlue70;
                }
            }
        }
        &-search {
            background-image: url("../assets/img/form-svg/search-grayblue.svg");
            background-repeat: no-repeat;
            background-position: vw(26) 50%;
        }
        &-compass {
            background-image: url("../assets/img/form-svg/compass-grayblue.svg");
            background-repeat: no-repeat;
            background-position: vw(26) 50%;
        }
    }
}

@include Desctop {
    .form {
        .container {
            padding-bottom:vdes(30);
        }
        &__content {
            padding: vdes(60);
        }
        &__button {
            &-next {
                width: vdes(125);
                height: vdes(50);
                @include font(700, vdes(17), vdes(25));
            }
            &-close {
                height: vdes(25);
            }
        }
        &__info {
            margin-left: vdes(80);
            &-title {
                @include font(700, vdes(20), vdes(30));
            }
            &-description {
                @include font(600, vdes(18), vdes(25));
                margin: vdes(20) 0 vdes(30);
            }
            &-form {
                input {
                    padding-left: vdes(65);
                    width: vdes(250);
                    height: vdes(50);
                    margin:0 vdes(20) vdes(20) 0;

                    &::placeholder {
                        @include font(700, vdes(17), vdes(25));
                    }
                }
                
            }
            &-search {
                background-position: vdes(26) 50%;
            }
            &-compass {
                background-position: vdes(26) 50%;
            }
        }
    }
}
@include Laptop {
    .form {
        &__content {
            width: 90%;
            padding: vlap(60);
        }
        &__button {
            &-next {
                width: vlap(200);
                height: vlap(50);
                border-radius: vlap(30);
                @include font(700, vlap(17), vlap(25));
            }
        }
        &__info {
            &-title {
                @include font(700, vlap(20), vlap(30));
            }
            &-description {
                @include font(600, vlap(18), vlap(25));
            }
            &-form {
                text-align: center;
                input {
                    width: vlap(200);
                    height: vlap(50);
                    border-radius: vlap(30);
                    &::placeholder {
                        @include font(700, vlap(17), vlap(25));
                    }
                }
                
            }
        }
    }
}
@include Phone {
    .form {
        &__content {
            position: relative;
            width: 70%;
            padding: vmin(60);
            display: flex;
            flex-direction: column;
        }
        &__button {
            &-next {
                width: vmin(250);
                height: vmin(50);
                border-radius: vmin(30);
                @include font(700, vmin(17), vmin(25));
            }
            &-close {
                position: absolute;
                top: 10%;
                right: 10%;
            }
        }
        &__info {
            &-title {
                @include font(700, vmin(20), vmin(30));
            }
            &-description {
                @include font(600, vmin(18), vmin(25));
            }
            &-form {
                input {
                    width: vmin(250);
                    height: vmin(50);
                    border-radius: vmin(30);
                    padding-left: vmin(50);
                    &::placeholder {
                        @include font(700, vmin(17), vmin(25));
                    }
                }
                
            }
        }
    }
}
</style>