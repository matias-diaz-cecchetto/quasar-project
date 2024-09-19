import { computed } from "vue";
import { useStore } from "vuex";

const useUI = () => {
  const store = useStore();

  // Imprime lo que tiene store
  //console.log(`Menu: ${store.state.ui.isSideMenuOpen}`);
  // Obtengo el estado del menu desde el getters
  //console.log(store.getters["ui/sideMenuOpen"]);

  return {
    // Propiedad computada para vincular el estado del menú lateral
    sideMenuOpen: computed(() => store.getters["ui/sideMenuOpen"]),
    toggleSideMenu() {
      // Mutations
      store.commit("ui/toggleSideMenu"); // Propiedad para poner el menu en "true o false"
    },
  };
};

export default useUI;
