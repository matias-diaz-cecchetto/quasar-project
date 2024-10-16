import { useAuthStore } from "../store/auth/auth";
import { authGuard } from "./guards/authGuard"; // Importa el guard

const routes = [
  {
    path: "/login",
    name: "LoginPage",
    component: () => import("src/pages/auth/LoginPage.vue"),
    beforeEnter: (to, from, next) => {
      const authStore = useAuthStore();
      const isAuthenticated =
        authStore.isAuthenticated || !!localStorage.getItem("authToken");

      if (isAuthenticated) {
        next("/"); // Si está autenticado, redirigir a la página principal
      } else {
        next(); // Si no está autenticado, permitir el acceso al login
      }
    },
  },
  {
    path: "/logout",
    name: "LogoutPage",
    beforeEnter: (to, from, next) => {
      const authStore = useAuthStore();

      // Lógica de logout
      authStore.logout(); // Este método debe estar en tu store de auth
      localStorage.removeItem("authToken"); // Eliminar el token de autenticación

      next("/login"); // Redirigir al login
    },
  },
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/IndexPage.vue"),
        beforeEnter: authGuard,
      },
      {
        path: "typography",
        name: "typography",
        component: () => import("src/pages/TypographyPage.vue"),
        beforeEnter: authGuard,
      },
      {
        path: "flex",
        name: "flex",
        component: () => import("src/pages/FlexPage.vue"),
        beforeEnter: authGuard,
      },
      {
        path: "dialog",
        name: "dialog",
        component: () => import("src/pages/DialogsPage.vue"),
        beforeEnter: authGuard,
      },
      {
        path: "forms",
        name: "forms",
        component: () => import("src/pages/FormsPage.vue"),
        beforeEnter: authGuard,
      },
      {
        path: "tables",
        name: "TablePage",
        component: () => import("src/pages/TablePage.vue"),
        beforeEnter: authGuard,
      },
      {
        path: "graphics",
        name: "GraphicPage",
        component: () => import("src/pages/GraphicsPage.vue"),
        beforeEnter: authGuard,
      },
      {
        path: "pdf-viewer",
        name: "PdfViewerPage",
        component: () => import("src/pages/PdfViewerPage.vue"),
        beforeEnter: authGuard,
      },
      {
        path: "traductor",
        name: "TraductorPage",
        component: () => import("src/pages/TraductorPage.vue"),
        beforeEnter: authGuard,
      },
      {
        path: "validador",
        name: "ValidadorPage",
        component: () => import("src/pages/ValidadorPage.vue"),
        beforeEnter: authGuard,
      },
      {
        path: "newValidador",
        name: "NewValidadorPage",
        component: () => import("src/pages/NewValidadorPage.vue"),
        // Esta ruta no tiene protección
      },
    ],
    beforeEnter: authGuard, // El layout principal está protegido
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("src/pages/errors/ErrorNotFoundPage.vue"),
  },
];

export default routes;
