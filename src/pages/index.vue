<script setup lang="ts">
import { css } from '@emotion/css';

const homeData = await fetchHome();
const menuData = await fetchMenu();
const blogListData = await fetchBlogList();
const blogDate = new Date(blogListData?.contents[0]?.postAt ?? '');

const styles = {
  background: css`
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: no-repeat url('/images/DSC_0307.webp');
      background-size: cover;
      background-position: cover;
      filter: brightness(0.8);
    }
  `,
};
</script>

<template>
  <div
    :class="`flex justify-center items-center relative w-full h-[750px] ${styles.background}`"
  >
    <img class="absolute w-[98%] h-[98%]" src="/images/mv-border.svg" />
    <img class="absolute w-[520px]" src="/images/logo-lg.png" />
  </div>
  <!--catchcopy-->
  <div class="flex justify-center w-full bg-[#DDD3C3]">
    <div class="flex items-center px-5 py-10">
      <img class="h-[66px]" src="/images/leaf1.svg" />
      <p
        class="flex items-center text-center text-main whitespace-pre-wrap px-5 sm:px-10"
        :style="{ fontFamily: 'Noto Serif JP, serif' }"
      >
        {{ homeData.catchcopy ?? '' }}
      </p>
      <img class="h-[66px] scale-x-[-1]" src="/images/leaf1.svg" />
    </div>
  </div>
  <!--blog-->
  <div id="blog" class="py-10">
    <SectionTitle value="Blog" />
    <div class="w-[250px] py-6 mx-auto">
      <a :href="`/post/${blogListData?.contents[0]?.id ?? ''}`">
        <img
          class="w-[250px] h-[250px] object-cover"
          :src="blogListData?.contents[0]?.thumbnail.url ?? ''"
        />
        <div>
          <p
            class="text-sm sm:text-base text-main py-2"
            :style="{ fontFamily: 'Jost, sans-serif' }"
          >
            {{ strftime(blogListData?.contents[0]?.postAt ?? '') }}
          </p>
          <p class="text-sm sm:text-base text-main py-2">
            {{ blogListData?.contents[0]?.title ?? '' }}
          </p>
        </div>
      </a>

      <div class="flex justify-center">
        <a
          href="/blog/1"
          class="inline-block border border-main text-main px-10 py-2 mt-3"
          :style="{
            fontFamily: 'Jost, sans-serif',
            letterSpacing: '0.1em',
          }"
          >more</a
        >
      </div>
    </div>
  </div>
  <!--concept-->
  <div id="concept" class="relative py-[80px]">
    <!--concept 1-->
    <div class="relative h-[555px] my-10">
      <img
        class="w-[95%] h-[270px] sm:w-[945px] sm:h-[495px] object-cover rounded-lg"
        :src="`${homeData.concept.concept1Image?.url}?w=2000` ?? ''"
      />
      <div
        class="absolute bottom-0 right-0 lg:right-[10%] max-w-[550px] h-[300px] bg-[rgba(255,255,255,95%)] p-3 ms-4 sm:ms-0"
      >
        <div
          class="w-full h-full border-2 border-dashed border-[#BA7B55] p-5"
          :style="{ borderRadius: '10px' }"
        >
          <h2
            class="inline-block text-3xl border-b border-main text-main"
            :style="{ fontFamily: 'Jost, sans-serif' }"
          >
            Concept
          </h2>
          <div class="flex items-center h-full">
            <p
              class="text-[14px] md:text-[16px] text-main whitespace-pre-wrap leading-9 tracking-[.25em]"
            >
              {{ homeData.concept?.concept1Text ?? '' }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="h-[120px] md:h-[80px]"></div>
    <!--concept 2-->
    <div class="relative h-[510px] sm:h-[650px] my-10">
      <img
        class="absolute top-0 right-0 w-[80%] h-[270px] sm:w-[648px] sm:h-[490px] object-cover rounded-lg"
        :src="`${homeData.concept.concept2Image?.url}?w=2000` ?? ''"
      />
      <div
        class="absolute bottom-0 left-0 lg:left-[10%] max-w-[550px] h-[300px] bg-[rgba(255,255,255,95%)] p-3 me-4 sm:me-0"
      >
        <div
          class="w-full h-full border-2 border-dashed border-[#BA7B55] p-5"
          :style="{ borderRadius: '10px' }"
        >
          <div class="flex items-center h-full">
            <p
              class="text-[14px] md:text-[16px] text-main leading-9 tracking-[.25em]"
            >
              {{ homeData.concept?.concept2Text ?? '' }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <!--background images-->
    <img
      class="absolute top-[530px] lg:top-0 right-0 -z-10"
      src="/images/leaf2.svg"
    />
  </div>
  <!--gallery-->
  <div id="gallery" class="bg-[#F1EAE5] px-[10px] sm:px-[50px] py-[80px]">
    <SectionTitle value="Gallery" />
    <div class="flex justify-center mt-[50px]">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-7">
        <div
          v-for="item in homeData.gallery"
          class="relative w-[150px] h-[150px] sm:w-[220px] sm:h-[220px]"
        >
          <span
            class="absolute top-[8px] left-[8px] w-full h-full bg-[#B3907A]"
          ></span>
          <img
            class="absolute top-0 left-0 w-full h-full object-cover"
            :src="`${item.url}?w=700`"
          />
        </div>
      </div>
    </div>
  </div>
  <!--menu-->
  <div id="menu" class="py-[80px]">
    <SectionTitle value="Menu" />
    <div class="flex justify-center mt-[50px]">
      <div class="inline-block">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <!--cut menu-->
          <div class="max-w-[470px]">
            <div class="bg-[#DED5D0] px-5 py-2 mb-5">
              <h2 class="text-main" :style="{ fontFamily: 'Jost, sans-serif' }">
                Cut Menu（シャンプー・ブロー付き）
              </h2>
            </div>
            <div
              v-for="{ name: name, price: price } in menuData?.contents.filter(
                (x) => x.attr.includes('Cut Menu')
              )"
              class="flex justify-between text-main px-3 py-3"
            >
              <p class="inline-block text-sm sm:text-base">
                {{ name }}
              </p>
              <span class="w-[50px]"></span>
              <p class="inline-block text-sm sm:text-base">{{ price }}</p>
            </div>
          </div>
          <!--other menu-->
          <div class="max-w-[470px]">
            <div class="bg-[#DED5D0] px-5 py-2 mb-5">
              <h2 class="text-main" :style="{ fontFamily: 'Jost, sans-serif' }">
                Other Menu
              </h2>
            </div>
            <div
              v-for="{ name: name, price: price } in menuData?.contents.filter(
                (x) => x.attr.includes('Other Menu')
              )"
              class="flex justify-between text-main px-3 py-3"
            >
              <p class="inline-block text-sm sm:text-base">
                {{ name }}
              </p>
              <span class="w-[50px]"></span>
              <p class="inline-block text-sm sm:text-base">{{ price }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--stylist-->
  <div id="stylist" class="bg-[#F1EAE5] py-[80px]">
    <SectionTitle value="Stylist" />
    <div class="relative max-w-[800px] h-[700px] sm:h-[580px] mt-[50px] m-auto">
      <img
        class="absolute top-0 left-0 w-[350px] h-[350px] object-cover"
        :style="{ borderRadius: '40px 10px 10px 10px' }"
        :src="`${homeData.stylist.thumbnail?.url}?w=1200` ?? ''"
      />
      <div
        class="absolute bottom-0 right-0 w-[360px] h-[380px] bg-[#F1EAE5] border border-[#503528] p-[25px]"
        :style="{ borderRadius: '10px 40px 10px 10px' }"
      >
        <p
          class="text-[#503528] tracking-[.18em]"
          :style="{ fontFamily: 'Jost, sans-serif' }"
        >
          OWNER
        </p>
        <!--name-->
        <div class="flex justify-between items-end mb-3">
          <h3
            class="inline-block text-[#503528] text-[22px] tracking-[.18em] font-bold"
          >
            {{ homeData.stylist?.nameJa ?? '' }}
          </h3>
          <p
            class="inline-block text-[#503528]"
            :style="{ fontFamily: 'Jost, sans-serif' }"
          >
            [ {{ homeData.stylist?.nameEn ?? '' }} ]
          </p>
        </div>
        <!--introduction-->
        <p class="text-[#503528] tracking-[.18em] my-5">
          {{ homeData.stylist?.headerText ?? '' }}
        </p>
        <p class="text-[#503528] leading-[1.8rem] tracking-[.18em]">
          {{ homeData.stylist?.bodyText ?? '' }}
        </p>
      </div>
    </div>
  </div>
  <!--access-->
  <div class="py-[80px]">
    <SectionTitle value="Access" />
    <div
      class="block md:flex max-w-[980px] border border-[#503528] p-[20px] mt-[40px] ms-3 me-3 md:ms-auto md:me-auto"
    >
      <div class="flex-initial md:w-[60%]">
        <div class="flex py-3">
          <h4
            class="flex-initial w-[30%] md:w-[20%] text-main font-bold tracking-widest"
            :style="{ fontFamily: 'Jost, sans-serif' }"
          >
            Address
          </h4>
          <p class="flex-initial w-[70%] md:w-[80%] text-main tracking-widest">
            {{ homeData.access.address ?? '' }}
          </p>
        </div>
        <div class="flex py-3">
          <h4
            class="flex-initial w-[30%] md:w-[20%] text-main font-bold tracking-widest"
            :style="{ fontFamily: 'Jost, sans-serif' }"
          >
            Tel
          </h4>
          <p class="flex-initial w-[70%] md:w-[80%] text-main tracking-widest">
            {{ homeData.access.tel ?? '' }}
          </p>
        </div>
        <div class="flex py-3">
          <h4
            class="flex-initial w-[30%] md:w-[20%] text-main font-bold tracking-widest"
            :style="{ fontFamily: 'Jost, sans-serif' }"
          >
            Email
          </h4>
          <p class="flex-initial w-[70%] md:w-[80%] text-main tracking-widest">
            {{ homeData.access.email ?? '' }}
          </p>
        </div>
      </div>
      <div class="flex-initial md:w-[40%]">
        <div class="flex py-3">
          <h4
            class="flex-initial w-[30%] md:w-[20%] text-main font-bold tracking-widest"
            :style="{ fontFamily: 'Jost, sans-serif' }"
          >
            Open
          </h4>
          <p class="flex-initial w-[70%] md:w-[80%] text-main tracking-widest">
            {{ homeData.access.open ?? '' }}
          </p>
        </div>
        <div class="flex py-3">
          <h4
            class="flex-initial w-[30%] md:w-[20%] text-main font-bold tracking-widest"
            :style="{ fontFamily: 'Jost, sans-serif' }"
          >
            Close
          </h4>
          <p class="flex-initial w-[70%] md:w-[80%] text-main tracking-widest">
            {{ homeData.access.close ?? '' }}
          </p>
        </div>
        <div class="flex py-3">
          <h4
            class="flex-initial w-[30%] md:w-[20%] text-main font-bold tracking-widest"
            :style="{ fontFamily: 'Jost, sans-serif' }"
          >
            Other
          </h4>
          <p class="flex-initial w-[70%] md:w-[80%] text-main tracking-widest">
            {{ homeData.access.other ?? '' }}
          </p>
        </div>
      </div>
    </div>
    <iframe
      class="w-full max-w-[980px] h-[450px] mt-[50px] m-auto"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d337.4980913721744!2d139.37992323085234!3d35.59323419203196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f9e3d2363495413%3A0x3923680e12e5accb!2z576O5a655a6kT05FJ1MxIOODr-ODs-OCuuODr-ODs-maoOOCjOWutuODl-ODqeOCpOODmeODvOODiOOCteODreODs-WAi-WupA!5e0!3m2!1sja!2sjp!4v1711428514629!5m2!1sja!2sjp"
      style="border: 0"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</template>
