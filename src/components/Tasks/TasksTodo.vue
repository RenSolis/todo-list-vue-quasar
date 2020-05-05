<template>
  <div>
    <list-header
      bg-color="bg-orange-4"
    >
      Todo
    </list-header>

    <q-list
      separator
      bordered
    >
      <task
        v-for="(task, key) in tasksTodo"
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
  name: 'TasksTodo',
  components: {
    ListHeader,
    Task,
  },
  props: ['tasksTodo'],
};
</script>