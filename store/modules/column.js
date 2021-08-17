import Vue from "vue";

export const namespaced = true;

export const state = {
  columnas: [
    {
      name: "Inglés",
      tasks: [
        {
          id: 1,
          title: "Realizar nivel básico",
          description: "realizar el nivel básico del curso",
        },
        {
          id: 2,
          title: "Reafirmar nivel básico",
          description: "repasar el nivel básico del curso",
        },
      ],
    },
    {
      name: "Servicios web",
      tasks: [
        {
          id: 3,
          title: "Revisar roles de usuario",
          description: "Esto es una descripcion",
        },
        {
          id: 4,
          title: "Realizar librería eclipse",
          description: "Esto es una decripcion",
        },
        {
          id: 5,
          title: "Hacer interfaz de usuario",
          description: "Con ntebeans",
        },
      ],
    },
    {
      name: "Vue",
      tasks: [
        {
          id: 6,
          title: "Ver cursos vue mastery",
          description: "Esto es una decripcion",
        },
        {
          id: 7,
          title: "Realizar ejercicios de vue mastery",
          description: "Esto es una decripcion",
        },
        {
          id: 8,
          title: "Modificar template",
          description: "Esto es una decripcion",
        },
      ],
    },
  ],
};
export const mutations = {
  SET_COLUMN(state, column) {
    state.columnas.push(column);
  },
  SET_NEW_TASK(state, { task, name }) {
    state.columnas.filter((columna) => {
      if (columna.name === name) {
        columna.tasks.push(task);
      }
    });
  },
  UPDATE_TASK(state, { task, key, value }) {
    Vue.set(task, key, value);
  },
  MOVE_TASK(state, { fromTasks, toTasks, fromTaskIndex, toTaskIndex }) {
    const taskToMove = fromTasks.splice(fromTaskIndex, 1)[0];
    toTasks.splice(toTaskIndex, 0, taskToMove);
  },
  MOVE_COLUMN(state, { fromColumnIndex, toColumnIndex }) {
    const columnList = state.columnas;
    const columnToMove = columnList.splice(fromColumnIndex, 1)[0];
    columnList.splice(toColumnIndex, 0, columnToMove);
  },
  CREATE_COLUMN(state, { name }) {
    state.columnas.push({
      name,
      tasks: [],
    });
  },
};
export const actions = {
  set_column_action({ commit }, column) {
    commit("SET_COLUMN", column);
  },
  set_new_task_action({ commit }, { task, name }) {
    let newTask = {
      id: parseInt(Math.random() * 1000) + 32,
      title: task,
      description: "",
    };
    commit("SET_NEW_TASK", { task: newTask, name: name });
  },
};

export const getters = {
  getTask(state) {
    return (id) => {
      for (const column of state.columnas) {
        for (const task of column.tasks) {
          if (task.id === id) {
            return task;
          }
        }
      }
    };
  },
};
