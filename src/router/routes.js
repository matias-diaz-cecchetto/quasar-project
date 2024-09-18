const routes = [
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
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
