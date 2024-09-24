// src/services/authService.js
import { Notify } from "quasar";
import { useRouter } from "vue-router";

export function login(email, password) {
  return new Promise((resolve, reject) => {
    // Simulación de autenticación
    setTimeout(() => {
      if (email === "mati@gmail.com" && password === "12345") {
        Notify.create({
          message: "Inicio de sesión exitoso",
          type: "positive",
        });
        const data = {
          email: email,
          password: password,
        };
        // Guardar un token de autenticación simulado en localStorage
        localStorage.setItem("authToken", JSON.stringify(data));

        // Devolver éxito
        resolve(true);
      } else {
        Notify.create({
          message: "Correo o contraseña incorrectos",
          type: "negative",
        });

        // Devolver error
        reject(new Error("Correo o contraseña incorrectos"));
      }
    }, 2000);
  });
}

export function logout(router) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Eliminar el token del localStorage
      localStorage.removeItem("authToken");

      Notify.create({
        message: "Logout exitoso",
        type: "positive",
      });
      // Redirigir al login
      router.push("/login");
      resolve();
    }, 1000);
  });
}
