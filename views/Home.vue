<template>
  <div class="home">
    <div class="columnas">
      <ColumnaTablero
        v-for="(columna, columnIndex) in columnas"
        :key="columna.nombre"
        :columnIndex="columnIndex"
        :columna="columna"
        :columnas="columnas"
      />
      <div class="addColumna">
        <input
          type="text"
          placeholder="+ Nueva columna"
          v-model="newColumnName"
          @keyup.enter="createColumn"
        />
      </div>
    </div>
    <div class="task-bg" @click.self="close" v-if="isTaskOpen">
      <router-view />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ColumnaTablero from "@/components/ColumnaTablero.vue";

export default {
  name: "Home",
  components: {
    ColumnaTablero,
  },
  data() {
    return {
      newColumnName: "",
    };
  },
  computed: {
    columnas() {
      return this.$store.state.column.columnas;
    },
    isTaskOpen() {
      return this.$route.name === "task";
    },
  },
  methods: {
    close() {
      this.$router.push({ name: "Home" });
    },
    createColumn() {
      this.$store.commit("column/CREATE_COLUMN", { name: this.newColumnName });
      this.newColumnName = "";
    },
  },
};
</script>
<style scoped>
.home {
  display: inline-flex;
  flex-direction: column;
  padding-top: 50px;
}
.columnas {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100% !important;
  z-index: 1;
}
.task-bg {
  position: fixed;
  top: 0;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
}
.addColumna {
  width: 250px;
  max-width: 300px;
  height: 100%;
  background: #c8dede;
  color: black;
  border-radius: 10px;
  padding: 10px;
  position: relative;
  z-index: 2;
}
.addColumna input {
  border: 0;
  padding: 5px;
  background: white;
  width: 80%;
  outline: none;
}
</style>
