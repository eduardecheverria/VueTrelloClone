<template>
  <div
    draggable
    @dragstart="pickUpTask($event, taskIndex, columnIndex)"
    @dragover.prevent
    @dragenter.prevent
    @drop.stop="moveTaskOrColumn($event, columna.tasks, columnIndex, taskIndex)"
    @click="goToTask(task.id)"
    class="task"
  >
    <h3>{{ task.title }}</h3>
    <p>{{ task.description }}</p>
  </div>
</template>

<script>
import MoveColumnAndTask from "@/mixins/MoveColumnAndTask.js";

export default {
  mixins: [MoveColumnAndTask],
  props: {
    task: {
      type: Object,
      required: true,
    },
    taskIndex: {
      type: Number,
      required: true,
    },
  },
  methods: {
    pickUpTask(event, taskIndex, columnIndex) {
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.setData("from-task-index", taskIndex);
      event.dataTransfer.setData("from-column-index", columnIndex);
      event.dataTransfer.setData("type", "task");
    },
    goToTask(id) {
      this.$router.push({ name: "task", params: { id: id } });
    },
  },
};
</script>

<style scoped>
.task {
  background: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 5px 10px;
  margin: 10px 0;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
}
.task h3 {
  margin: 0;
  padding: 0;
}
.task p {
  margin: 0;
  padding: 0;
}
</style>
