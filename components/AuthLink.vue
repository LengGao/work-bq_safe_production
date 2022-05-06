<template>
  <nuxt-link v-bind="$attrs" v-if="false">
    <slot></slot>
  </nuxt-link>
  <span v-else @click="handleAuthClick">
    <slot></slot>
  </span>
</template>

<script>
import auth from "@/mixins/auth";
export default {
  mixins: [auth],
};
</script>

<style>
</style>