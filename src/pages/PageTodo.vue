<template>
  <q-page class="q-pa-md">
    <q-list
      separator
      bordered
    >
      <task
        v-for="(task, key) in tasks"
        :key="key"
        :task="task"
        :id="key"
      />
    </q-list>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex';
import Task from '../components/Tasks/Task.vue';

export default {
  name: 'PageTodo',
  components: { Task },
  computed: {
    ...mapGetters('tasks', ['tasks']),
  },
};
</script>