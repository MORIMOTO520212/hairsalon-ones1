<script setup lang="ts">
const homeData = await fetchHome();
</script>

<template>
  <div class="bg-[#BDB1AE]">
    <div class="flex flex-wrap max-w-[1100px] px-7 py-5 m-auto">
      <div class="flex-initial w-full md:w-[40%]">
        <img
          class="max-w-[280px] mt-5 m-auto md:ms-0 md:me-0"
          src="/images/logo-lg.png"
        />
      </div>
      <div class="flex-initial w-full md:w-[60%]">
        <div class="flex flex-wrap justify-between py-6">
          <div class="mb-6">
            <p class="text-main py-2">{{ homeData.access.address }}</p>
            <p class="text-main py-2">{{ homeData.access.email }}</p>
            <p class="text-main py-2">TEL: {{ homeData.access.tel }}</p>
            <p class="text-main py-2">
              営業時間: {{ homeData.access.open }} {{ homeData.access.close }}
            </p>
          </div>
          <div class="">
            <p class="text-main mb-2">Reservation</p>
            <a href="">
              <div class="flex items-center py-2">
                <span
                  class="block w-[30px] h-[30px] border border-main"
                  :style="{ borderRadius: '50px' }"
                >
                  <img class="p-[5px]" src="/icons/phone.svg" />
                </span>
                <p class="text-main ps-2">予約・お問い合せ</p>
              </div>
            </a>
            <a href="">
              <div class="flex items-center py-2">
                <span
                  class="block w-[30px] h-[30px] border border-main"
                  :style="{ borderRadius: '50px' }"
                >
                  <img class="p-[5px]" src="/icons/pc.svg" />
                </span>
                <p class="text-main ps-2">Webで予約する</p>
              </div>
            </a>
            <a href="">
              <div class="flex items-center py-2">
                <span
                  class="block w-[30px] h-[30px] border border-main"
                  :style="{ borderRadius: '50px' }"
                >
                  <img class="p-[5px]" src="/icons/line.svg" />
                </span>
                <p class="text-main ps-2">予約・お問い合せ</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-[#AA9E9B] py-2">
      <p class="text-center text-white text-sm">
        ©{{ new Date().getFullYear() }} ONE's 1 美容室ワンズワン
      </p>
    </div>
  </div>
</template>
