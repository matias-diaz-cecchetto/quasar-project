const routes = [
  {
    // Ruta para el login (fuera del layout principal)
    path: "/login",
    name: "LoginPage",
    component: () => import("pages/Login.vue"),
    beforeEnter: (to, from, next) => {
      // Verificar si el usuario está autenticado
      const isAuthenticated = !!localStorage.getItem("authToken");

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
        component: () => import("pages/Typography.vue"),
      },
      { path: "flex", name: "flex", component: () => import("pages/Flex.vue") },
      {
        path: "dialog",
        name: "dialog",
        component: () => import("pages/Dialogs.vue"),
      },
      {
        path: "forms",
        name: "forms",
        component: () => import("pages/Forms.vue"),
      },
      {
        path: "tables",
        name: "TablePage",
        component: () => import("pages/Tables.vue"),
      },
      {
        path: "graphics",
        name: "GraphicPage",
        component: () => import("pages/Graphics.vue"),
      },
    ],
    beforeEnter: (to, from, next) => {
      // Verificar si el usuario está autenticado
      const isAuthenticated = !!localStorage.getItem("authToken"); // Simulación de autenticación

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
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
