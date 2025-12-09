<template>
  <div class="bg-black text-white mt-0" data-bs-spy="scroll" data-bs-target="#navScroll">
    <AppHeader />
    <main>
      <div class="w-100 overflow-hidden position-relative bg-black text-white" data-aos="fade">
        <div class="position-absolute w-100 h-100 bg-black opacity-75 top-0 start-0"></div>
        <div class="container py-vh-4 position-relative mt-5 px-vw-5 text-center">
          <div class="row d-flex align-items-center justify-content-center py-vh-5">
            <slot />
          </div>
        </div>
      </div>
    </main>
    <AppFooter />
  </div>
</template>
