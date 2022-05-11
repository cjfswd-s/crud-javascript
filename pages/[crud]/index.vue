<template>
  <container-app>
    <OrganismCreate />
    <OrganismRead />
  </container-app>
</template>
<script async setup lang="ts">
const route = useRoute();
const store = useStore();

onMounted(async () => {
  if (route.params.crud === "online") {
    store.state.value.dataList = await store
      .getDataFromHttpStorage()
      .then((res) => {
        console.log("[component][get | success]", res);
        return res;
      })
      .catch((error) => {
        console.log("[component][get | error]", error);
        return [];
      });
  }
  if (route.params.crud === "offline") {
    store.state.value.dataList = store.getDataFromLocalStorage();
    watchEffect(() => {
      localStorage.setItem("database", JSON.stringify(store.state.value.dataList));
    });
  }
});
</script>
