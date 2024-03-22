<template>
  <div :class="styles.navButton">
    <div :class="styles.wrapper">
      <img :class="styles.icon" :src="iconPath" />
      <p :class="`${styles.text} text-xl`">{{ text }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { css } from '@emotion/css';
const attrs = useAttrs();
const iconPath = ref<string>();
const text = ref<string>();

const styles = {
  navButton: css({
    width: '205px',
    height: '40px',
    border: 'solid 1px #000',
    borderRadius: '50px',
  }),
  wrapper: css({
    display: 'flex',
    maxWidth: '205px',
    height: '100%',
    alignItems: 'center',
    margin: '0 auto',
  }),
  icon: css({
    height: '55%',
    padding: '0 8px 0 20px',
  }),
  text: css({
    display: 'block',
    flex: '1',
  }),
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
