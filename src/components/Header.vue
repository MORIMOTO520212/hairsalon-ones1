<script setup lang="ts">
import { css } from '@emotion/css';
const navMenu = ref(false);

onUpdated(() => {
  console.log(navMenu.value);
});
</script>

<template>
  <div class="hidden md:flex justify-between h-[100px]">
    <div
      class="flex justify-center items-center w-[213px] h-[141px] rounded-br-[30px] bg-[#A86E49] z-10"
    >
      <img class="w-[95%]" src="/images/logo-lg.png" />
    </div>
    <div class="flex flex-1 justify-end">
      <ul class="flex flex-1 justify-around items-center w-full max-w-[400px]">
        <li class="text-main px-1"><a href="">Blog</a></li>
        <li class="text-main px-1"><a href="">Concept</a></li>
        <li class="text-main px-1"><a href="">Gallery</a></li>
        <li class="text-main px-1"><a href="">Menu</a></li>
        <li class="text-main px-1"><a href="">Stylist</a></li>
      </ul>
      <ul class="flex items-center">
        <li class="px-1"><HeaderButton type="phone" /></li>
        <li class="px-1"><HeaderButton type="web" /></li>
        <li class="px-1"><HeaderButton type="line" /></li>
      </ul>
    </div>
  </div>
  <!--mobile-->
  <div class="flex md:hidden justify-between h-[70px]">
    <div
      class="flex justify-center items-center w-[213px] h-[141px] rounded-br-[30px] bg-[#A86E49] z-10"
    >
      <img class="w-[95%]" src="/images/logo-lg.png" />
    </div>
    <div class="flex items-center px-3">
      <input
        type="checkbox"
        id="navButton"
        class="hidden my-navinput"
        v-model="navMenu"
      />
      <label
        for="navButton"
        class="my-navbutton block cursor-pointer px-[5px] py-[21px] z-20"
      >
        <span
          class="my-navpath relative block bg-main w-[35px] h-[2.2px]"
        ></span>
      </label>
    </div>
    <!--mobile-menu-->
    <div
      :class="`${
        navMenu ? 'visible opacity-100' : 'invisible opacity-0'
      } fixed top-0 left-0 w-[100vw] h-[100vh]  bg-[#A86E49] transition ease-in-out duration-500 z-10`"
    >
      <span class="block fixed top-3 left-2 w-[220px]"
        ><img class="w-full" src="/images/flower1.svg"
      /></span>
      <span class="block fixed bottom-2 right-3 w-[130px]"
        ><img class="w-full" src="/images/flower2.svg"
      /></span>

      <ul
        class="fixed top-20 w-full text-center tracking-widest z-auto"
        :style="{ fontFamily: 'Jost, sans-serif;' }"
      >
        <li class="text-2xl text-white py-6"><a href="">Blog</a></li>
        <li class="text-2xl text-white py-6"><a href="">Concept</a></li>
        <li class="text-2xl text-white py-6"><a href="">Menu</a></li>
        <li class="text-2xl text-white py-6"><a href="">Gallery</a></li>
        <li class="text-2xl text-white py-6"><a href="">Stylist</a></li>
        <li class="py-6"></li>
        <li class="py-3"><HeaderButton type="phone" /></li>
        <li class="py-3"><HeaderButton type="web" /></li>
        <li class="py-3"><HeaderButton type="line" /></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
/* nav button */
.my-navpath {
  transition: 0.2192s cubic-bezier(0.04, 0.04, 0.12, 0.96) 0.1008s;
}
.my-navpath::before,
.my-navpath::after {
  content: '';
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  background: #773818;
  transition: 0.2192s cubic-bezier(0.04, 0.04, 0.12, 0.96) 0.1008s;
}
.my-navpath::before {
  bottom: 16px;
}
.my-navpath::after {
  top: 16px;
}

.my-navinput:checked ~ .my-navbutton .my-navpath {
  background: rgba(0, 0, 0, 0);
  transition: 0.2192s cubic-bezier(0.04, 0.04, 0.12, 0.96) 0.1008s;
}
.my-navinput:checked ~ .my-navbutton .my-navpath::before,
.my-navinput:checked ~ .my-navbutton .my-navpath::after {
  background: #fff;
}
.my-navinput:checked ~ .my-navbutton .my-navpath::before {
  bottom: 0px;
  transform: rotate(45deg);
}
.my-navinput:checked ~ .my-navbutton .my-navpath::after {
  top: 0px;
  transform: rotate(-45deg);
}
</style>
