<template>
    <section class="reviews">
        <div class="container">
            <div class="reviews__content">
                <div class="title">
                    Recent <strong>Activity</strong> Reviews and Photos
                    <span class="bg-text">
                        RECENT ACTIVITY
                    </span>
                </div>
                <div class="profile__container">
                    <div v-masonry="containerId" transition-duration="0.3s" item-selector=".mason-brick" class="mason">
                        <div v-masonry-tile class="mason-brick col-3">
                            <div class="profile">
                                <div class="profile__header">
                                    <div class="profile__header-img">
                                        <img src="@/assets/img/reviews-img1.png" alt="">
                                    </div>
                                    <div class="profile__header-info">
                                        <h6 class="profile__header-name">
                                            Mabelle Houston
                                        </h6>
                                        <div class="profile__header-data">
                                            21.03.2024
                                        </div>
                                    </div>
                                    <div class="profile__header-options">
                                        <svg width="16" height="4" viewBox="0 0 16 4" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0ZM14 0C12.9 0 12 0.9 12 2C12 3.1 12.9 4 14 4C15.1 4 16 3.1 16 2C16 0.9 15.1 0 14 0ZM8 0C6.9 0 6 0.9 6 2C6 3.1 6.9 4 8 4C9.1 4 10 3.1 10 2C10 0.9 9.1 0 8 0Z"
                                                fill="#C3CAD9" />
                                        </svg>
                                    </div>
                                </div>
                                <div class="profile__info">
                                    <div class="profile__rating">
                                        <div class="profile__rating-name">
                                            Restaurant Burger
                                        </div>
                                        <div class="profile__rating-content">
                                            <span>
                                                <img src="@/assets/img/star.svg" alt="star">
                                                <img src="@/assets/img/star.svg" alt="star">
                                                <img src="@/assets/img/star.svg" alt="star">
                                                <img src="@/assets/img/star.svg" alt="star">
                                                <img src="@/assets/img/star.svg" alt="star">
                                            </span>
                                            <span class="profile__rating-review">
                                                4.8
                                            </span>
                                            <span class="profile__rating-coment">
                                                1565
                                            </span>
                                        </div>
                                    </div>
                                    <p class="profile__comment">
                                        Baz loves this class. While I've only personally been with him to one
                                        session, Adam reports that he has adored the times he's been there before.
                                        This is their second go-around with Jon's School of Mus...
                                    </p>
                                    <a href="" class="profile__info-more">
                                        Continue Reading
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div v-masonry-tile class="mason-brick col-3">
                            <div class="profile">
                                <div class="profile__header">
                                    <div class="profile__header-img">
                                        <img src="@/assets/img/reviews-img2.png" alt="">
                                    </div>
                                    <div class="profile__header-info">
                                        <h6 class="profile__header-name">
                                            Troy Zimmerman
                                        </h6>
                                        <div class="profile__header-data">
                                            21.03.2024
                                        </div>
                                    </div>
                                    <div class="profile__header-options">
                                        <svg width="16" height="4" viewBox="0 0 16 4" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0ZM14 0C12.9 0 12 0.9 12 2C12 3.1 12.9 4 14 4C15.1 4 16 3.1 16 2C16 0.9 15.1 0 14 0ZM8 0C6.9 0 6 0.9 6 2C6 3.1 6.9 4 8 4C9.1 4 10 3.1 10 2C10 0.9 9.1 0 8 0Z"
                                                fill="#C3CAD9" />
                                        </svg>
                                    </div>
                                </div>
                                <div class="profile__info">
                                    <div class="profile__rating">
                                        <div class="profile__rating-name">
                                            Restaurant Burger
                                        </div>
                                        <div class="profile__rating-content">
                                            <span>
                                                <img src="@/assets/img/star.svg" alt="star">
                                                <img src="@/assets/img/star.svg" alt="star">
                                                <img src="@/assets/img/star.svg" alt="star">
                                                <img src="@/assets/img/star.svg" alt="star">
                                                <img src="@/assets/img/star.svg" alt="star">
                                            </span>
                                            <span class="profile__rating-review">
                                                4.8
                                            </span>
                                            <span class="profile__rating-coment">
                                                1565
                                            </span>
                                        </div>
                                    </div>
                                    <div class="profile__info-content">
                                        <img src="@/assets/img/review-content1.png" alt="">
                                        <div class="profile__info-like">
                                            <svg width="16" height="14" viewBox="0 0 16 14" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M8.74666 0.629213L5.05332 4.32255C4.80666 4.56921 4.66666 4.90921 4.66666 5.26255V11.9225C4.66666 12.6559 5.26666 13.2559 5.99999 13.2559H12C12.5333 13.2559 13.0133 12.9359 13.2267 12.4492L15.4 7.37588C15.96 6.05588 14.9933 4.58921 13.56 4.58921H9.79332L10.4267 1.53588C10.4933 1.20255 10.3933 0.862546 10.1533 0.622546C9.75999 0.235879 9.13332 0.235879 8.74666 0.629213ZM1.99999 13.2559C2.73332 13.2559 3.33332 12.6559 3.33332 11.9225V6.58921C3.33332 5.85588 2.73332 5.25588 1.99999 5.25588C1.26666 5.25588 0.666656 5.85588 0.666656 6.58921V11.9225C0.666656 12.6559 1.26666 13.2559 1.99999 13.2559Z"
                                                    fill="white" />
                                            </svg>
                                            Like
                                        </div>
                                    </div>
                                    <router-link to="/review" class="profile__info-more">
                                        Continue Reading
                                    </router-link>
                                </div>
                            </div>
                        </div>
                        <div v-masonry-tile class="mason-brick col-3">
                            <div class="profile">
                                <div class="profile__header">
                                    <div class="profile__header-img">
                                        <img src="@/assets/img/reviews-img3.png" alt="">
                                    </div>
                                    <div class="profile__header-info">
                                        <h6 class="profile__header-name">
                                            Phillip Johnston
                                        </h6>
                                        <div class="profile__header-data">
                                            21.03.2024
                                        </div>
                                    </div>
                                    <div class="profile__header-options">
                                        <svg width="16" height="4" viewBox="0 0 16 4" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0ZM14 0C12.9 0 12 0.9 12 2C12 3.1 12.9 4 14 4C15.1 4 16 3.1 16 2C16 0.9 15.1 0 14 0ZM8 0C6.9 0 6 0.9 6 2C6 3.1 6.9 4 8 4C9.1 4 10 3.1 10 2C10 0.9 9.1 0 8 0Z"
                                                fill="#C3CAD9" />
                                        </svg>
                                    </div>
                                </div>
                                <div class="profile__info">
                                    <div class="profile__rating">
                                        <div class="profile__rating-name">
                                            Restaurant Burger
                                        </div>
                                        <div class="profile__rating-content">
                                            <span>
                                                <img src="@/assets/img/star.svg" alt="star">
                                                <img src="@/assets/img/star.svg" alt="star">
                                                <img src="@/assets/img/star.svg" alt="star">
                                                <img src="@/assets/img/star.svg" alt="star">
                                                <img src="@/assets/img/star.svg" alt="star">
                                            </span>
                                            <span class="profile__rating-review">
                                                4.8
                                            </span>
                                            <span class="profile__rating-coment">
                                                1565
                                            </span>
                                        </div>
                                    </div>
                                    <div class="profile__info-content">
                                        <div class="grid-container">
                                            <div class="grid-item col-md-2">
                                                <img src="@/assets/img/review-content2.png" alt="">
                                            </div>
                                            <div class="grid-item">
                                                <img src="@/assets/img/review-content3.png" alt="">
                                            </div>
                                            <div class="grid-item">
                                                <img src="@/assets/img/review-content4.png" alt="">
                                            </div>
                                        </div>
                                        <div class="profile__info-like">
                                            <svg width="16" height="14" viewBox="0 0 16 14" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M8.74666 0.629213L5.05332 4.32255C4.80666 4.56921 4.66666 4.90921 4.66666 5.26255V11.9225C4.66666 12.6559 5.26666 13.2559 5.99999 13.2559H12C12.5333 13.2559 13.0133 12.9359 13.2267 12.4492L15.4 7.37588C15.96 6.05588 14.9933 4.58921 13.56 4.58921H9.79332L10.4267 1.53588C10.4933 1.20255 10.3933 0.862546 10.1533 0.622546C9.75999 0.235879 9.13332 0.235879 8.74666 0.629213ZM1.99999 13.2559C2.73332 13.2559 3.33332 12.6559 3.33332 11.9225V6.58921C3.33332 5.85588 2.73332 5.25588 1.99999 5.25588C1.26666 5.25588 0.666656 5.85588 0.666656 6.58921V11.9225C0.666656 12.6559 1.26666 13.2559 1.99999 13.2559Z"
                                                    fill="white" />
                                            </svg>
                                            Like
                                        </div>
                                    </div>
                                    <a href="" class="profile__info-more">
                                        Continue Reading
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div v-masonry-tile class="mason-brick col-3">
                            <div class="profile">
                                <div class="profile__header">
                                    <div class="profile__header-img">
                                        <img src="@/assets/img/reviews-img4.png" alt="">
                                    </div>
                                    <div class="profile__header-info">
                                        <h6 class="profile__header-name">
                                            Troy Zimmerman
                                        </h6>
                                        <div class="profile__header-data">
                                            21.03.2024
                                        </div>
                                    </div>
                                    <div class="profile__header-options">
                                        <svg width="16" height="4" viewBox="0 0 16 4" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0ZM14 0C12.9 0 12 0.9 12 2C12 3.1 12.9 4 14 4C15.1 4 16 3.1 16 2C16 0.9 15.1 0 14 0ZM8 0C6.9 0 6 0.9 6 2C6 3.1 6.9 4 8 4C9.1 4 10 3.1 10 2C10 0.9 9.1 0 8 0Z"
                                                fill="#C3CAD9" />
                                        </svg>
                                    </div>
                                </div>
                                <div class="profile__info">
                                    <div class="profile__rating">
                                        <div class="profile__rating-name">
                                            Restaurant Burger
                                        </div>
                                        <div class="profile__rating-content">
                                            <span>
                                                <img src="@/assets/img/star.svg" alt="star">
                                                <img src="@/assets/img/star.svg" alt="star">
                                                <img src="@/assets/img/star.svg" alt="star">
                                                <img src="@/assets/img/star.svg" alt="star">
                                                <img src="@/assets/img/star.svg" alt="star">
                                            </span>
                                            <span class="profile__rating-review">
                                                4.8
                                            </span>
                                            <span class="profile__rating-coment">
                                                1565
                                            </span>
                                        </div>
                                    </div>
                                    <p class="profile__comment">
                                        Classifieds are usually the first place you think of when you are getting
                                        ready to make a purchase. Whether you want to purchase a vehicle, bed, or
                                        pet, the classified section of your local newspaper can be one of the best
                                        resources.
                                    </p>
                                    <a href="" class="profile__info-more">
                                        Continue Reading
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div v-masonry-tile class="mason-brick col-3">
                            <div class="profile">
                                <div class="profile__header">
                                    <div class="profile__header-img">
                                        <img src="@/assets/img/reviews-img5.png" alt="">
                                    </div>
                                    <div class="profile__header-info">
                                        <h6 class="profile__header-name">
                                            Phillip Johnston
                                        </h6>
                                        <div class="profile__header-data">
                                            21.03.2024
                                        </div>
                                    </div>
                                    <div class="profile__header-options">
                                        <svg width="16" height="4" viewBox="0 0 16 4" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0ZM14 0C12.9 0 12 0.9 12 2C12 3.1 12.9 4 14 4C15.1 4 16 3.1 16 2C16 0.9 15.1 0 14 0ZM8 0C6.9 0 6 0.9 6 2C6 3.1 6.9 4 8 4C9.1 4 10 3.1 10 2C10 0.9 9.1 0 8 0Z"
                                                fill="#C3CAD9" />
                                        </svg>
                                    </div>
                                </div>
                                <div class="profile__info">
                                    <div class="profile__rating">
                                        <div class="profile__rating-name">
                                            Restaurant Burger
                                        </div>
                                        <div class="profile__rating-content">
                                            <span>
                                                <img src="@/assets/img/star.svg" alt="star">
                                                <img src="@/assets/img/star.svg" alt="star">
                                                <img src="@/assets/img/star.svg" alt="star">
                                                <img src="@/assets/img/star.svg" alt="star">
                                                <img src="@/assets/img/star.svg" alt="star">
                                            </span>
                                            <span class="profile__rating-review">
                                                4.8
                                            </span>
                                            <span class="profile__rating-coment">
                                                1565
                                            </span>
                                        </div>
                                    </div>
                                    <div class="profile__info-content">
                                        <img src="@/assets/img/review-content5.png" alt="">
                                        <div class="profile__info-like">
                                            <svg width="16" height="14" viewBox="0 0 16 14" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M8.74666 0.629213L5.05332 4.32255C4.80666 4.56921 4.66666 4.90921 4.66666 5.26255V11.9225C4.66666 12.6559 5.26666 13.2559 5.99999 13.2559H12C12.5333 13.2559 13.0133 12.9359 13.2267 12.4492L15.4 7.37588C15.96 6.05588 14.9933 4.58921 13.56 4.58921H9.79332L10.4267 1.53588C10.4933 1.20255 10.3933 0.862546 10.1533 0.622546C9.75999 0.235879 9.13332 0.235879 8.74666 0.629213ZM1.99999 13.2559C2.73332 13.2559 3.33332 12.6559 3.33332 11.9225V6.58921C3.33332 5.85588 2.73332 5.25588 1.99999 5.25588C1.26666 5.25588 0.666656 5.85588 0.666656 6.58921V11.9225C0.666656 12.6559 1.26666 13.2559 1.99999 13.2559Z"
                                                    fill="white" />
                                            </svg>
                                            Like
                                        </div>
                                    </div>
                                    <a href="" class="profile__info-more">
                                        Continue Reading
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div v-masonry-tile class="mason-brick col-3">
                            <div class="profile">
                                <div class="profile__header">
                                    <div class="profile__header-img">
                                        <img src="@/assets/img/reviews-img8.png" alt="">
                                    </div>
                                    <div class="profile__header-info">
                                        <h6 class="profile__header-name">
                                            Mabelle Houston
                                        </h6>
                                        <div class="profile__header-data">
                                            21.03.2024
                                        </div>
                                    </div>
                                    <div class="profile__header-options">
                                        <svg width="16" height="4" viewBox="0 0 16 4" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0ZM14 0C12.9 0 12 0.9 12 2C12 3.1 12.9 4 14 4C15.1 4 16 3.1 16 2C16 0.9 15.1 0 14 0ZM8 0C6.9 0 6 0.9 6 2C6 3.1 6.9 4 8 4C9.1 4 10 3.1 10 2C10 0.9 9.1 0 8 0Z"
                                                fill="#C3CAD9" />
                                        </svg>
                                    </div>
                                </div>
                                <div class="profile__info">
                                    <div class="profile__rating">
                                        <div class="profile__rating-name">
                                            Restaurant Burger
                                        </div>
                                        <div class="profile__rating-content">
                                            <span>
                                                <img src="@/assets/img/star.svg" alt="star">
                                                <img src="@/assets/img/star.svg" alt="star">
                                                <img src="@/assets/img/star.svg" alt="star">
                                                <img src="@/assets/img/star.svg" alt="star">
                                                <img src="@/assets/img/star.svg" alt="star">
                                            </span>
                                            <span class="profile__rating-review">
                                                4.8
                                            </span>
                                            <span class="profile__rating-coment">
                                                1565
                                            </span>
                                        </div>
                                    </div>
                                    <p class="profile__comment">
                                        There is a lot of exciting stuff going on in the stars above us that make
                                        astronomy so much fun. The truth is the universe is a constantly changing,
                                        moving, some would say “living” thing because you just never know what you
                                        are going to see on any given.
                                    </p>
                                    <a href="" class="profile__info-more">
                                        Continue Reading
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div v-masonry-tile class="mason-brick col-3">
                            <div class="profile">
                                <div class="profile__header">
                                    <div class="profile__header-img">
                                        <img src="@/assets/img/reviews-img1.png" alt="">
                                    </div>
                                    <div class="profile__header-info">
                                        <h6 class="profile__header-name">
                                            Mabelle Houston
                                        </h6>
                                        <div class="profile__header-data">
                                            21.03.2024
                                        </div>
                                    </div>
                                    <div class="profile__header-options">
                                        <svg width="16" height="4" viewBox="0 0 16 4" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0ZM14 0C12.9 0 12 0.9 12 2C12 3.1 12.9 4 14 4C15.1 4 16 3.1 16 2C16 0.9 15.1 0 14 0ZM8 0C6.9 0 6 0.9 6 2C6 3.1 6.9 4 8 4C9.1 4 10 3.1 10 2C10 0.9 9.1 0 8 0Z"
                                                fill="#C3CAD9" />
                                        </svg>
                                    </div>
                                </div>
                                <div class="profile__info">
                                    <div class="profile__rating">
                                        <div class="profile__rating-name">
                                            Restaurant Burger
                                        </div>
                                        <div class="profile__rating-content">
                                            <span>
                                                <img src="@/assets/img/star.svg" alt="star">
                                                <img src="@/assets/img/star.svg" alt="star">
                                                <img src="@/assets/img/star.svg" alt="star">
                                                <img src="@/assets/img/star.svg" alt="star">
                                                <img src="@/assets/img/star.svg" alt="star">
                                            </span>
                                            <span class="profile__rating-review">
                                                4.8
                                            </span>
                                            <span class="profile__rating-coment">
                                                1565
                                            </span>
                                        </div>
                                    </div>
                                    <p class="profile__comment">
                                        One of the earliest activities we engaged in when we first got into
                                        astronomy is the same one we like to show our children just as soon as their
                                        excitement about the night sky begins to surface. That is the fun of finding
                                        constellations. But finding constellations and using them to navigate the
                                        sky is a discipline that goes back virtually to the dawn of man. In fact, we
                                        have cave pictures to show that the more primitive. But finding
                                        constellations and using them to navigate the sky is a discipline that goes
                                        back virtually to the dawn of man.
                                    </p>
                                    <a href="" class="profile__info-more">
                                        Continue Reading
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div v-masonry-tile class="mason-brick col-3">
                            <div class="profile">
                                <div class="profile__header">
                                    <div class="profile__header-img">
                                        <img src="@/assets/img/reviews-img7.png" alt="">
                                    </div>
                                    <div class="profile__header-info">
                                        <h6 class="profile__header-name">
                                            Sadie Floyd
                                        </h6>
                                        <div class="profile__header-data">
                                            21.03.2024
                                        </div>
                                    </div>
                                    <div class="profile__header-options">
                                        <svg width="16" height="4" viewBox="0 0 16 4" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0ZM14 0C12.9 0 12 0.9 12 2C12 3.1 12.9 4 14 4C15.1 4 16 3.1 16 2C16 0.9 15.1 0 14 0ZM8 0C6.9 0 6 0.9 6 2C6 3.1 6.9 4 8 4C9.1 4 10 3.1 10 2C10 0.9 9.1 0 8 0Z"
                                                fill="#C3CAD9" />
                                        </svg>
                                    </div>
                                </div>
                                <div class="profile__info">
                                    <div class="profile__rating">
                                        <div class="profile__rating-name">
                                            Restaurant Burger
                                        </div>
                                        <div class="profile__rating-content">
                                            <span>
                                                <img src="@/assets/img/star.svg" alt="star">
                                                <img src="@/assets/img/star.svg" alt="star">
                                                <img src="@/assets/img/star.svg" alt="star">
                                                <img src="@/assets/img/star.svg" alt="star">
                                                <img src="@/assets/img/star.svg" alt="star">
                                            </span>
                                            <span class="profile__rating-review">
                                                4.8
                                            </span>
                                            <span class="profile__rating-coment">
                                                1565
                                            </span>
                                        </div>
                                    </div>
                                    <p class="profile__comment">
                                        Buying the right telescope to take your love of astronomy to the next level
                                        is a big next step in the development of your passion for the stars. In many
                                        ways
                                    </p>
                                    <a href="" class="profile__info-more">
                                        Continue Reading
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="reviews__show-more">
                    Show More Activity in San Francisco
                </button>
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

.reviews {
    img {
        height: 100%;
    }
    &__content {
        text-align: center;
        padding: vw(75) 0 vw(55);
    }
    &__show-more {
        width: vw(254); 
        height: vw(50);
        margin-top: vw(75);
        @include font(600, vw(10), vw(20));
        color: $color-GrayBlue70;
        background: #FFFFFF;
        box-shadow: 0 vw(2)  vw(10) rgba(54, 61, 77, 0.05);
        border-radius: vw(30);
        border: none;
    }
    .profile {
        background: white;
        border-radius: vw(10);
        margin: vw(30) vw(15) vw(15) vw(15);
        box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.05);
        &__container {
            margin-top: vw(95);
        }
        &__header {
            @include flex($justify: space-around);
            border-bottom: vw(1) #F7F8FA solid;
            padding: vw(20) 0;
            &-info {
                text-align: left;
            }
            &-name {
                @include font(700, vw(12), vw(20));
                color: #4D5E80;
            }
            &-data {
                @include font(700, vw(10), vw(20));
                color: #7D8FB3;
            }
        }
        &__info {
            position: relative;
            &-content {
                position: relative;
            }
            &-more {
                position: absolute;
                bottom: vw(-15);
                left: 50%;
                transform: translate(-50%);
                width: vw(125); 
                padding: vw(5);
                @include font(600, vw(10), vw(20));
                text-decoration: none;
                color: $color-GrayBlue70;
                background: #FFFFFF;
                box-shadow: 0 vw(2)  vw(10) rgba(54, 61, 77, 0.05);
                border-radius: vw(30);
            }
            &-like {
                position: absolute;
                top: vw(15);
                left: vw(15);
                @include flex();
                width: vw(70);
                height: vw(30);
                background-color: $color-GrayBlue10;
                border-radius: vw(5);
                @include font(800, vw(10), vw(20));
                color: $text-white;
                svg {
                    margin-right: vw(7);
                }
            }
        }
        &__rating {
            text-align: left;
            padding: vw(20) vw(26) vw(25);
            span {
                margin-right: vw(10);
                &:last-child {
                    margin-right: 0;
                }
            }
            &-name {
                @include font(700, vw(12), vw(20));
                color: #4D5E80;
            }
            &-content {
                @include flex();
            }
            &-review {
                @include font(700, vw(10), vw(20));
                color: #4D5E80;
            }
            &-coment {
                @include font(700, vw(10), vw(20));
                color: #ADB8CC;
            }
        }
        &__comment {
            padding: 0 vw(26) vw(25) vw(26);
            text-align: left;
            @include font(600, vw(12), vw(20));
            color: $color-GrayBlue70;
        }
    }
}
</style>