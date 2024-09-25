import { useAuthStore } from "../store/auth/auth";

const routes = [
  {
    // Ruta para el login (fuera del layout principal)
    path: "/login",
    name: "LoginPage",
    component: () => import("src/pages/auth/LoginPage.vue"),
    /* beforeEnter: (to, from, next) => {
      // Verificar si el usuario está autenticado
      const isAuthenticated = !!localStorage.getItem("authToken");

      if (isAuthenticated) {
        // Si está autenticado, redirigir a la página principal
        next("/");
      } else {
        // Si no está autenticado, permitir el acceso al login
        next();
      }
    }, */
    beforeEnter: (to, from, next) => {
      const authStore = useAuthStore();
      const isAuthenticated =
        authStore.isAuthenticated || !!localStorage.getItem("authToken");

      if (isAuthenticated) {
        // Si está autenticado, redirigir a la página principal
        next("/");
      } else {
        // Si no está autenticado, permitir el acceso al login
        next();
      }
    },
  },
  {
    // Pagina principal
    path: "/",
    // Importa el componente principañ
    component: () => import("layouts/MainLayout.vue"),
    // Componentes hijosd
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "typography",
        name: "typography",
        component: () => import("src/pages/TypographyPage.vue"),
      },
      {
        path: "flex",
        name: "flex",
        component: () => import("src/pages/FlexPage.vue"),
      },
      {
        path: "dialog",
        name: "dialog",
        component: () => import("src/pages/DialogsPage.vue"),
      },
      {
        path: "forms",
        name: "forms",
        component: () => import("src/pages/FormsPage.vue"),
      },
      {
        path: "tables",
        name: "TablePage",
        component: () => import("src/pages/TablePage.vue"),
      },
      {
        path: "graphics",
        name: "GraphicPage",
        component: () => import("src/pages/GraphicsPage.vue"),
      },
    ],
    /* beforeEnter: (to, from, next) => {
      // Verificar si el usuario está autenticado
      const isAuthenticated = !!localStorage.getItem("authToken"); // Simulación de autenticación

      if (!isAuthenticated) {
        // Si no está autenticado, redirigir al login
        next("/login");
      } else {
        // Si está autenticado, permitir el acceso
        next();
      }
    }, */
    beforeEnter: (to, from, next) => {
      const authStore = useAuthStore();
      const isAuthenticated =
        authStore.isAuthenticated || !!localStorage.getItem("authToken");

      if (!isAuthenticated) {
        // Si no está autenticado, redirigir al login
        next("/login");
      } else {
        // Si está autenticado, permitir el acceso
        next();
      }
    },
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("src/pages/errors/ErrorNotFoundPage.vue"),
  },
];

export default routes;
