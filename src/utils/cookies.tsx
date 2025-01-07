
export function setCookie(name: string, value: string, days: number) {
    const expires = new Date(Date.now() + days * 86400000).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/; Secure; SameSite=Strict`;
    //console.log('Cookie set:', document.cookie); // Uncomment this line to see the cookie being set in the console
}

export function getCookie(name: string) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift();
}

//this function deletes the cookie
export function deleteCookie(name: string) {
    document.cookie = `${name}=; Max-Age=0; path=/; Secure; SameSite=Strict`;
    //console.log('Cookie deleted:', document.cookie); // Uncomment this line to see the cookie being deleted in the console
}

