export const onSubmithandle = async (
  data: any,
  fetchUrl: string,
  method: string,
  redirectUrl: string,
  headers: Record<string, string>,
  token?: string,
  isFormData?: boolean,
  additionalParams?: Record<string, string>
) => {
  try {
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    let body: BodyInit | FormData = data;
    if (isFormData) {
      const formData = new FormData();
      for (const key in data) {
        formData.append(key, data[key]);
      }
      body = formData;
      delete headers['Content-Type'];
    } else {
      body = JSON.stringify(data);
      headers['Content-Type'] = 'application/json';
    }

    const response = await fetch(fetchUrl, {
      method,
      headers,
      body,
    });

    if (!response.ok) {
      // Si la respuesta no es exitosa, intenta analizarla como JSON
      const responseData = await response.json();
      console.log(responseData);  // Mostrar el error devuelto por el backend
      throw new Error(responseData.error || 'Error desconocido');
    }

    const responseData = await response.json();
    console.log('Server response:', responseData);

    let finalRedirectUrl = redirectUrl;
    if (additionalParams) {
      const queryParams = new URLSearchParams(additionalParams).toString();
      finalRedirectUrl += `?${queryParams}`;
    }

    window.location.href = finalRedirectUrl;
  } catch (error: any) {
    console.error('Error:', error);
    alert(`Error: ${error.message}`);  // Mostrar un mensaje de error en el frontend
  }
};