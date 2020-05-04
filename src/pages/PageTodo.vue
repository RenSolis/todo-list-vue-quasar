<template>
  <q-page class="q-pa-md">
    <q-list
      v-if="Object.keys(tasks).length"
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

    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn
        round
        color="primary"
        size="24px"
        icon="add"
        @click="showAddTask = true"
      />
    </div>

    <q-dialog v-model="showAddTask">
      <add-task @close="showAddTask = false" />
    </q-dialog>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex';
import Task from '../components/Tasks/Task.vue';
import AddTask from '../components/Tasks/Modals/AddTask.vue';

export default {
  name: 'PageTodo',
  components: {
    Task,
    AddTask,
  },
  data() {
    return {
      showAddTask: false,
    };
  },
  computed: {
    ...mapGetters('tasks', ['tasks']),
  },
};
</script>