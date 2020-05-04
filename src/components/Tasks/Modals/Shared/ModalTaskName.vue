<template>
  <div class="row q-mb-sm">
    <q-input
      :value="name"
      ref="name"
      class="col"
      outlined
      autofocus
      label="Task name"
      :rules="[val =>  !!val || 'Field is required']"
      @input="$emit('update:name', $event)"
    >
      <template v-slot:append>
        <q-icon
          v-if="name"
          name="close"
          class="cursor-pointer"
          @click="$emit('update:name', '')"
        />
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  name: 'ModalTaskName',
  props: ['name'],
};
</script>