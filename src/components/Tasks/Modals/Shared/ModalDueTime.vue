<template>
  <div class="row q-mb-sm">
    <q-input
      :value="dueTime"
      outlined
      label="Due time"
      class="col"
      @input="$emit('update:dueTime', $event)"
    >
      <template v-slot:append>
        <q-icon
          v-if="dueTime"
          name="close"
          class="cursor-pointer"
          @click="$emit('update:dueTime', '')"
        />
        <q-icon
          name="access_time"
          class="cursor-pointer"
        >
          <q-popup-proxy>
            <q-time
              :value="dueTime"
              @input="$emit('update:dueTime', $event)"
            />
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  name: 'ModalDueTime',
  props: ['dueTime'],
};
</script>