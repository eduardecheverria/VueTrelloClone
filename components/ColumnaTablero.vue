<template>
  <div
    :columnIndex="columnIndex"
    :columna="columna"
    draggable
    @drop="moveTaskOrColumn($event, columna.tasks, columnIndex)"
    @dragover.prevent
    @dragenter.prevent
    @dragstart.self="pickUpColumn($event, columnIndex)"
    v-on="$listeners"
    class="columna"
  >
    <h2>{{ columna.name }}</h2>
    <Task
      v-for="(task, taskIndex) in columna.tasks"
      :task="task"
      :key="task.title"
      :taskIndex="taskIndex"
      :columnas="columnas"
      :columnIndex="columnIndex"
      :columna="columna"
    />
    <input
      class="nueva_tarea"
      type="text"
      placeholder="+ Ingresa una nueva tarea"
      @keyup.enter="createTask($event, columna.name)"
    />
  </div>
</template>

<script>
import Task from "@/components/Task.vue";
import MoveColumnAndTask from "@/mixins/MoveColumnAndTask.js";
export default {
  components: {
    Task,
  },
  mixins: [MoveColumnAndTask],
  methods: {
    createTask(event, name) {
      this.$store.dispatch("column/set_new_task_action", {
        task: event.target.value,
        name: name,
      });
      event.target.value = "";
    },

    pickUpColumn(event, fromColumnIndex) {
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.setData("from-column-index", fromColumnIndex);
      event.dataTransfer.setData("type", "column");
    },
  },
};
</script>

<style scoped>
.columna {
  width: 250px;
  min-width: 250px;
  max-width: 300px;
  min-height: 100px;
  height: 100%;
  background: #c8dede;
  color: black;
  border-radius: 10px;
  padding: 10px;
  position: relative;
  z-index: 2;
  margin: 0 20px;
}
.nueva_tarea {
  background: transparent;
  border: 0;
  width: 100%;
  outline: none;
  color: black;
}
</style>
