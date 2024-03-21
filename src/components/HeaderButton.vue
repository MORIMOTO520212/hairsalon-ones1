<template>
  <div :class="styles.navButton">
    <img :class="styles.icon" :src="iconPath" />
    <p :class="styles.text">{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
import { css } from '@emotion/css';
const attrs = useAttrs();
const iconPath = ref<string>();
const text = ref<string>();

const styles = {
  navButton: css({}),
  icon: css({}),
  text: css({}),
};

(() => {
  switch (attrs.type) {
    case 'phone':
      iconPath.value = '/icons/phone.svg';
      text.value = '予約・お問い合せ';
      break;

    case 'web':
      iconPath.value = '/icons/pc.svg';
      text.value = 'Webで予約';
      break;

    case 'line':
      iconPath.value = '/icons/line.svg';
      text.value = '予約・お問い合せ';
      break;

    default:
      break;
  }
})();
</script>
