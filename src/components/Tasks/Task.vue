<template>
  <div>
    <q-item
      :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
      v-ripple
      clickable
      @click="updateTask(
        { id: id, updates: { completed: !task.completed } }
      )"
    >
      <q-item-section side top>
        <q-checkbox v-model="task.completed" />
      </q-item-section>

      <q-item-section>
        <q-item-label :class="{ 'text-strikethrough': task.completed }">
          {{ task.name }}
        </q-item-label>
      </q-item-section>

      <q-item-section side>
        <div class="row">
          <div class="column justify-content">
            <q-icon
              name="event"
              size="18px"
              class="q-mr-xs"
            />
          </div>
          <div class="column">
            <q-item-label
              class="row justify-end"
              caption
            >
              {{ task.dueDate }}
            </q-item-label>
            <q-item-label
              class="row justify-end"
              caption
            >
              <small>{{ task.dueTime }}</small>
            </q-item-label>
          </div>
        </div>
      </q-item-section>

      <q-item-section side>
        <q-btn
          flat
          round
          dense
          color="red"
          icon="delete"
          @click.stop="promptToDelete(id)"
        />
      </q-item-section>
    </q-item>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Task',
  props: ['task', 'id'],
  methods: {
    ...mapActions('tasks', [
      'updateTask',
      'deleteTask',
    ]),
    promptToDelete(id) {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Are u sure?',
        ok: {
          push: true
        },
        cancel: {
          color: 'negative',
        },
        persistent: true,
      }).onOk(() => {
        this.deleteTask(id);
      });
    },
  },
};
</script>