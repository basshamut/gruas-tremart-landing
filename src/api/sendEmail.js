export async function sendContactForm(formData) {
  const API_BASE_URL = import.meta.env.PUBLIC_API_BASE_URL ? import.meta.env.PUBLIC_API_BASE_URL : "http://localhost:8080/gruastremart-core-api/v1";

  try {
      const response = await fetch(`${API_BASE_URL}/emails/contact`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(Object.fromEntries(formData)),
      });

      if (!response.ok) {
          throw new Error("Error al enviar el formulario.");
      }

      return { success: true };
  } catch (error) {
      return { success: false, message: error.message };
  }
}
