<template>
  <q-page class="q-pa-md">
    <no-tasks
      v-if="!Object.keys(tasksTodo).length"
    >
    </no-tasks>

    <tasks-todo
      v-else
      :tasksTodo="tasksTodo"
    />

    <tasks-completed
      v-if="Object.keys(tasksCompleted).length"
      :tasksCompleted="tasksCompleted"
    />

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
import NoTasks from '../components/Tasks/NoTasks.vue';
import AddTask from '../components/Tasks/Modals/AddTask.vue';
import TasksTodo from '../components/Tasks/TasksTodo.vue';
import TasksCompleted from '../components/Tasks/TasksCompleted.vue';

export default {
  name: 'PageTodo',
  components: {
    AddTask,
    TasksTodo,
    TasksCompleted,
    NoTasks,
  },
  data() {
    return {
      showAddTask: false,
    };
  },
  mounted() {
    this.$root.$on('showAddTask', () => {
      this.showAddTask = true;
    });
  },
  computed: {
    ...mapGetters('tasks', [
      'tasksTodo',
      'tasksCompleted'
    ]),
  },
};
</script>