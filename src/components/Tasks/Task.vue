<template>
  <div>
    <q-item
      :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
      v-ripple
      clickable
      @click="task.completed = !task.completed"
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
    </q-item>
  </div>
</template>

<script>
export default {
  name: 'Task',
  props: ['task', 'id'],
};
</script>