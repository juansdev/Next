import {getCookie, hasCookie, setCookie} from "cookies-next";

export interface ICookieCart {
  [key: string]: number;
}

export const getCookieCart = (): ICookieCart => {
  if (hasCookie('cart'))
    return JSON.parse(getCookie("cart") ?? '{}');
  return {};
}

export const addProductToCart = (id: string) => {
  const cookieCart = getCookieCart();
  if (cookieCart[id]) cookieCart[id] += 1;
  else cookieCart[id] = 1;
  setCookie("cart", JSON.stringify(cookieCart));
}

export const removeProductFromCart = (id: string) => {
  const cookieCart = getCookieCart();
  delete cookieCart[id];
  setCookie("cart", JSON.stringify(cookieCart));
}

export const removeSingleItemFromCart = (id: string) => {
  const cookieCart = getCookieCart();
  if (cookieCart[id] <= 1) delete cookieCart[id];
  else cookieCart[id] -= 1;
  setCookie("cart", JSON.stringify(cookieCart));
}
