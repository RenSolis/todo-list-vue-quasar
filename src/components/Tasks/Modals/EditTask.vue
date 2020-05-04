<template>
  <q-card>
    <modal-header>Add Task</modal-header>

    <form @submit.prevent="submitForm">
      <q-card-section>

        <modal-task-name
          :name.sync="taskToSubmit.name"
          ref="modalTaskName"
        />

        <modal-due-date
          :due-date.sync="taskToSubmit.dueDate"
          @clear="clearDueDate"
        />

        <modal-due-time
          v-if="taskToSubmit.dueDate"
          :due-time.sync="taskToSubmit.dueTime"
        />

      </q-card-section>

      <modal-buttons />
    </form>
  </q-card>
</template>

<script>
import { mapActions } from 'vuex';
import ModalHeader from './Shared/ModalHeader.vue';
import ModalTaskName from './Shared/ModalTaskName.vue';
import ModalDueDate from './Shared/ModalDueDate.vue';
import ModalDueTime from './Shared/ModalDueTime.vue';
import ModalButtons from './Shared/ModalButtons.vue';

export default {
  name: 'Edit Task',
  components: {
    ModalHeader,
    ModalTaskName,
    ModalDueDate,
    ModalDueTime,
    ModalButtons,
  },
  props: ['task', 'id'],
  data() {
    return {
      taskToSubmit: {},
    };
  },
  mounted() {
    this.taskToSubmit = Object.assign({}, this.task);
  },
  methods: {
    ...mapActions('tasks', ['updateTask']),
    submitForm() {
      const nameRef = this.$refs.modalTaskName.$refs.name;
      nameRef.validate();
      if (!nameRef.hasError) {
        this.submitTask();
      }
    },
    submitTask() {
      this.updateTask({
        id: this.id,
        updates: this.taskToSubmit,
      });
      this.$emit('close');
    },
    clearDueDate() {
      this.taskToSubmit.dueDate = '';
      this.taskToSubmit.dueTime = '';
    },
  },
};
</script>