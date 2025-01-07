import { setCookie } from "@/utils/cookies";

export const onSubmithandle = async (
  data: Record<string, string | number | boolean>,
  fetchUrl: string,
  method: string,
  redirectUrl: string,
  headers: Record<string, string>,
  token?: string,
  isFormData?: boolean,
  additionalParams?: Record<string, string>,
  setServerErrors?: (errors: string[]) => void,
): Promise<void> => {
  try {
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    let body: BodyInit | null = null;
    if (isFormData) {
      const formData = new FormData();
      for (const key in data) {
        // eslint-disable-next-line no-prototype-builtins
        if (data.hasOwnProperty(key)) {
          formData.append(key, String(data[key]));
        }
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
      const errorData = await response.json();
      console.log('Error:', errorData);
      if (setServerErrors) {
        setServerErrors([errorData.message || 'An unexpected error occurred']);
      }
      return;
    }

    //vef if the response is a token
    const responseData = await response.json();

    //if the response is a token, set the cookie
    if (responseData.jwt) {
      setCookie('jwt', responseData.jwt, 1);
    }

    let finalRedirectUrl = redirectUrl;
    if (additionalParams) {
      const queryParams = new URLSearchParams(additionalParams).toString();
      finalRedirectUrl += `?${queryParams}`;
    }
    window.location.href = finalRedirectUrl;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error('Error:', error);
    if (setServerErrors) {
      setServerErrors([error.message]);
    }
  }
};
