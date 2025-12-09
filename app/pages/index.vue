<template>
  <div class="w-100 overflow-hidden position-relative bg-black text-white" data-aos="fade">
    <div class="position-absolute w-100 h-100 bg-black opacity-75 top-0 start-0"></div>
    <div class="container py-vh-4 position-relative mt-5 px-vw-5 text-center">
      <div class="row d-flex align-items-center justify-content-center py-vh-5">
        <div class="col-12 col-xl-10">
          <span class="h5 text-secondary fw-lighter">Our Mission</span>
          <h1 class="display-huge mt-3 mb-3 lh-1">We do ordinary stuff for cool people</h1>
        </div>
        <div class="col-12 col-xl-8">
          <p class="lead text-secondary">
            We are some sort of DAO working with AI, NFT´s, web 4.0 and the so called
            blockchain...in the Metaverse. You don´t understand a word? No problem, we neither!
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="w-100 position-relative bg-black text-white bg-cover d-flex align-items-center">
    <div class="container-fluid px-vw-5">
      <div class="position-absolute w-100 h-50 bg-dark bottom-0 start-0"></div>
      <div class="row d-flex align-items-center position-relative justify-content-center px-0 g-5">
        <div class="col-12 col-lg-6">
          <img
            src="/img/webp/abstract18.webp"
            width="2280"
            height="1732"
            alt="abstract image"
            class="img-fluid position-relative rounded-5 shadow"
            data-aos="fade-up"
          />
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <img
            src="/img/webp/abstract6.webp"
            width="1116"
            height="1578"
            alt="abstract image"
            class="img-fluid position-relative rounded-5 shadow"
            data-aos="fade-up"
            data-aos-duration="2000"
          />
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <img
            src="/img/webp/abstract9.webp"
            width="1116"
            height="848"
            alt="abstract image"
            class="img-fluid position-relative rounded-5 shadow"
            data-aos="fade-up"
            data-aos-duration="3000"
          />
        </div>
      </div>
    </div>
  </div>

  <div class="separator"></div>

  <div class="bg-black py-vh-3">
    <div class="container bg-black px-vw-5 py-vh-3 rounded-5 shadow">
      <div class="row gx-5">
        <div class="col-12 col-md-6">
          <div class="card bg-transparent mb-5" data-aos="zoom-in-up">
            <div class="bg-dark shadow rounded-5 p-0">
              <img
                src="/img/webp/abstract3.webp"
                width="582"
                height="327"
                alt="abstract image"
                class="img-fluid rounded-5 no-bottom-radius"
                loading="lazy"
              />
              <div class="p-5">
                <h2 class="fw-lighter">Ipsum dolor est</h2>
                <p class="pb-4 text-secondary">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                  tempor invidunt ut labore et dolore magna aliquyam erat.
                </p>
                <a href="#" class="link-fancy link-fancy-light">Read more</a>
              </div>
            </div>
          </div>

          <div class="card bg-transparent" data-aos="zoom-in-up">
            <div class="bg-dark shadow rounded-5 p-0">
              <img
                src="/img/webp/abstract2.webp"
                width="582"
                height="442"
                alt="abstract image"
                class="img-fluid rounded-5 no-bottom-radius"
                loading="lazy"
              />
              <div class="p-5">
                <h2 class="fw-lighter">Ipsum dolor est</h2>
                <p class="pb-4 text-secondary">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                  tempor invidunt ut labore et dolore magna aliquyam erat.
                </p>
                <a href="#" class="link-fancy link-fancy-light">Read more</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="p-5 pt-0 mt-5" data-aos="fade">
            <span class="h5 text-secondary fw-lighter">What we don´t know</span>
            <h2 class="display-4">There is a lot we don´t know. Here is a small sneak peek</h2>
          </div>
          <div class="card bg-transparent mb-5 mt-5" data-aos="zoom-in-up">
            <div class="bg-dark shadow rounded-5 p-0">
              <img
                src="/img/webp/abstract17.webp"
                width="582"
                height="390"
                alt="abstract image"
                class="img-fluid rounded-5 no-bottom-radius"
                loading="lazy"
              />
              <div class="p-5">
                <h2 class="fw-lighter">Ipsum dolor est</h2>
                <p class="pb-4 text-secondary">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                  tempor invidunt ut labore et dolore magna aliquyam erat.
                </p>
                <a href="#" class="link-fancy link-fancy-light">Read more</a>
              </div>
            </div>
          </div>

          <div class="card bg-transparent" data-aos="zoom-in-up">
            <div class="bg-dark shadow rounded-5 p-0">
              <img
                src="/img/webp/abstract4.webp"
                width="582"
                height="327"
                alt="abstract image"
                class="img-fluid rounded-5 no-bottom-radius"
                loading="lazy"
              />
              <div class="p-5">
                <h2 class="fw-lighter">Ipsum dolor est</h2>
                <p class="pb-4 text-secondary">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                  tempor invidunt ut labore et dolore magna aliquyam erat.
                </p>
                <a href="#" class="link-fancy link-fancy-light">Read more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 

</template>

<script setup lang="ts">
// for server side rendering
import '~/assets/css/first.scss';

// env variables specified seperatly from build.
// dev - staging - production
// keep secrets at the backend
const runtimeConfig = useRuntimeConfig();

// taken into account when running build process.
// not safe. all secrets are exposed to client
const appConfig = useAppConfig();

useSeoMeta({
  title: 'My Amazing Site',
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
});
</script>
