import {Metadata} from "next";
import {cookies} from "next/headers";
import {ICookieCart} from "@/shopping-cart/actions/actions";
import {IProduct, products} from "@/data/products";
import {ItemCard} from "@/shopping-cart/components";
import {WidgetItem} from "@/components/shared";

export const metadata: Metadata = {
  title: "Cart shopping",
  description: "SEO Description"
}

interface IProductInCart {
  product: IProduct;
  quantity: number;
}

const getProductsInCart = (cart: ICookieCart): IProductInCart[] => {
  const productsInCar: IProductInCart[] = [];
  for (const id of Object.keys(cart)) {
    const product = products.find(prod => prod.id === id);
    if (product) productsInCar.push({product, quantity: cart[id]});
  }
  return productsInCar;
}

export default function CartPage() {
  const cookiesStore = cookies();
  const cart: ICookieCart = JSON.parse(cookiesStore.get("cart")?.value ?? "{}");
  const productsInCart = getProductsInCart(cart);

  const totalToPay = productsInCart.reduce(
    (prev: any, current) => (prev + (current.product.price * current.quantity)),
    0);

  return (<div>
    <h1 className={"text-5xl"}>Products in the cart</h1>
    <hr className={"mb-2"}/>
    <div className={"flex flex-col sm:flex-row gap-2 w-full"}>
      <div className={"flex flex-col gap-2 w-full sm:w-8/12"}>
        {
          productsInCart.map(({product, quantity}) => (
            <ItemCard product={product} quantity={quantity} key={product.id}></ItemCard>
          ))
        }
      </div>
      <div className={"flex flex-col sm:w-4/12 w-full"}>
        <WidgetItem title={"Total a pagar"}>
          <div className={"mt-2 flex justify-center gap-4"}>
            <h3 className={"text-3xl font-bold text-gray-700"}>${(totalToPay * 1.15).toFixed(2)}</h3>
          </div>
          <span className={"font-bold text-center text-gray-500"}>Impuestos 15%: ${totalToPay * 0.15}</span>
        </WidgetItem>
      </div>
    </div>
  </div>);
}