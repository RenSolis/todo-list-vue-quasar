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

      <q-item-section
        v-if="task.dueDate"
        side
      >
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
        <div class="row">
          <q-btn
            flat
            round
            dense
            color="primary"
            icon="edit"
            @click.stop="showEditTask = true"
          />
          <q-btn
            flat
            round
            dense
            color="red"
            icon="delete"
            @click.stop="promptToDelete(id)"
          />
        </div>
      </q-item-section>

      <q-dialog v-model="showEditTask">
        <edit-task
          @close="showEditTask = false"
          :task="task"
          :id="id"
        />
      </q-dialog>
    </q-item>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import EditTask from './Modals/EditTask.vue';

export default {
  name: 'Task',
  components: { EditTask },
  props: ['task', 'id'],
  data() {
    return {
      showEditTask: false,
    };
  },
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