<template>
  <div class="q-mt-lg">
    <list-header
      bgColor="bg-green-4"
    >
      Completed
    </list-header>

    <q-list
      separator
      bordered
    >
      <task
        v-for="(task, key) in tasksCompleted"
        :key="key"
        :task="task"
        :id="key"
      />
    </q-list>
  </div>
</template>

<script>
import ListHeader from '../Shared/ListHeader.vue';
import Task from './Task.vue';

export default {
  name: 'TasksCompleted',
  components: {
    ListHeader,
    Task,
  },
  props: ['tasksCompleted'],
};
</script>