export default {
  props: {
    columna: {
      type: Object,
      required: true,
    },
    columnIndex: {
      type: Number,
      required: true,
    },
    columnas: {
      type: Array,
      required: true,
    },
  },
  methods: {
    moveTaskOrColumn(e, toTasks, columnIndex, toTaskIndex) {
      const type = e.dataTransfer.getData("type");
      if (type === "task") {
        this.moveTask(
          e,
          toTasks,
          toTaskIndex !== undefined ? toTaskIndex : toTasks.length
        );
      } else {
        this.moveColumn(e, columnIndex);
      }
    },
    moveTask(e, toTasks, toTaskIndex) {
      const fromColumnIndex = e.dataTransfer.getData("from-column-index");
      const fromTasks = this.columnas[fromColumnIndex].tasks;
      const fromTaskIndex = e.dataTransfer.getData("from-task-index");
      this.$store.commit("column/MOVE_TASK", {
        fromTasks: fromTasks,
        toTasks: toTasks,
        fromTaskIndex: fromTaskIndex,
        toTaskIndex: toTaskIndex,
      });
    },
    moveColumn(e, toColumnIndex) {
      console.log("moviendo columna");
      const fromColumnIndex = e.dataTransfer.getData("from-column-index");
      this.$store.commit("column/MOVE_COLUMN", {
        fromColumnIndex: fromColumnIndex,
        toColumnIndex: toColumnIndex,
      });
    },
  },
};
