import { createI18n } from "vue-i18n";
import messages from "src/i18n"; // Importamos las traducciones desde index.js

export default ({ app }) => {
  // Crear instancia de I18n
  const i18n = createI18n({
    locale: "en-US", // Idioma predeterminado
    legacy: false, // Si usas la API de composición
    messages, // Las traducciones
  });

  // Decirle a la app que use i18n
  app.use(i18n);
};
