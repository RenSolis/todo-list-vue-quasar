<template>
  <q-card>
    <q-card-section class="row">
      <div class="text-h6">Add Task</div>
      <q-space />
      <q-btn
        v-close-popup
        flat
        round
        dense
        icon="close"
      />
    </q-card-section>

    <form @submit.prevent="submitForm">
      <q-card-section>
        <div class="row q-mb-sm">
          <q-input
            v-model="taskToSubmit.name"
            ref="name"
            class="col"
            outlined
            autofocus
            label="Task name"
            :rules="[val =>  !!val || 'Field is required']"
          >
            <template v-slot:append>
              <q-icon
                v-if="taskToSubmit.name"
                name="close"
                class="cursor-pointer"
                @click="taskToSubmit.name = ''"
              />
            </template>
          </q-input>
        </div>

        <div class="row q-mb-sm">
          <q-input
            v-model="taskToSubmit.dueDate"
            outlined
            label="Due date"
          >
            <template v-slot:append>
              <q-icon
                v-if="taskToSubmit.dueDate"
                name="close"
                class="cursor-pointer"
                @click="clearDueDate"
              />
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy>
                  <q-date v-model="taskToSubmit.dueDate" />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>

        <div
          v-if="taskToSubmit.dueDate"
          class="row q-mb-sm"
        >
          <q-input
            v-model="taskToSubmit.dueTime"
            outlined
            label="Due time"
            class="col"
          >
            <template v-slot:append>
              <q-icon
                v-if="taskToSubmit.dueTime"
                name="close"
                class="cursor-pointer"
                @click="taskToSubmit.dueTime = ''"
              />
              <q-icon
                name="access_time"
                class="cursor-pointer"
              >
                <q-popup-proxy>
                  <q-time v-model="taskToSubmit.dueTime" />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn
          label="Save"
          color="primary"
          type="submit"
        />
      </q-card-actions>
    </form>
  </q-card>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AddTask',
  data() {
    return {
      taskToSubmit: {
        name: '',
        dueDate: '',
        dueTime: '',
        completed: false,
      },
    };
  },
  methods: {
    ...mapActions('tasks', ['addTask']),
    submitForm() {
      this.$refs.name.validate();
      if (!this.$refs.name.hasError) {
        this.submitTask();
      }
    },
    submitTask() {
      this.addTask(this.taskToSubmit);
      this.$emit('close');
    },
    clearDueDate() {
      this.taskToSubmit.dueDate = '';
      this.taskToSubmit.dueTime = '';
    },
  },
};
</script>