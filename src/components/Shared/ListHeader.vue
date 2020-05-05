<template>
  <q-banner
    dense
    inline-actions
    class="text-white text-center"
    :class="bgColor"
  >
    <span class="text-bold text-subtitle1">
      <slot></slot>
    </span>
  </q-banner>
</template>

<script>
export default {
  name: 'ListHeader',
  props: ['bgColor'],
};
</script>

<style>
.list-header {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
</style>