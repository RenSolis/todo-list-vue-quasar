<template>
  <q-banner>
    <template v-slot:avatar>
      <q-icon
        name="check"
        color="primary"
      />
    </template>
    No tasks to do day!
    <template v-slot:action>
      <q-btn
        flat
        color="primary"
        label="Add Task"
        @click="$root.$emit('showAddTask')"
      />
    </template>
  </q-banner>
</template>

<script>
export default {
  name: 'NoTasks',
};
</script>