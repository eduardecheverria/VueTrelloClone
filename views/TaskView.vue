<template>
  <div class="task-view">
    <input
      @change="updateTaskProperty($event, 'title')"
      class="input_title"
      type="text"
      :value="task.title"
    />
    <textarea
      @change="updateTaskProperty($event, 'description')"
      :value="task.description"
      class="textarea"
    />
  </div>
</template>

<script>
export default {
  computed: {
    getTask() {
      return this.$store.getters["column/getTask"];
    },
    task() {
      return this.getTask(parseInt(this.$route.params.id));
    },
  },
  methods: {
    updateTaskProperty(event, key) {
      this.$store.commit("column/UPDATE_TASK", {
        task: this.task,
        key,
        value: event.target.value,
      });
    },
  },
};
</script>

<style scoped>
.task-view {
  display: flex;
  z-index: 1;
  flex-direction: column;
  background: white;
  text-align: left;
  border-radius: 10px;
  max-width: 700px;
  min-width: 600px;
  min-height: 300px;
  padding: 10px;
}
.textarea {
  background: transparent;
  border: 0;
}
.input_title {
  border: 0;
  font-weight: bolder;
  font-size: 25px;
}
</style>
