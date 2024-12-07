"use client";

import { CartItemWithProduct } from "@/lib/db/cart";
import { formatPrice } from "@/lib/format";
import Image from "next/image";
import Link from "next/link";
import { useTransition } from "react";

interface CartEntryProps {
  cartItem: CartItemWithProduct;
  setProductQuantity: (productId: string, quantity: number) => Promise<void>;
}

export default function CartEntry({
  cartItem: { product, quantity },
  setProductQuantity,
}: CartEntryProps) {
  const [isPending, startTransition] = useTransition();

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <Image
          src={product.imageUrl_}
          alt={product.name}
          width={200}
          height={200}
          className="rounded-lg"
        />
        <div className="text-black dark:text-white">
          <Link href={"/products/" + product.id} className="font-bold">
            {product.name}
          </Link>
          <div>Prix: {formatPrice(product.price)}</div>
          <div className="my-1 flex items-center gap-2">
            Quantité:
            <select
              className="select-bordered select w-full max-w-[80px] text-black dark:text-white bg-white dark:bg-gray-700"
              value={quantity}
              disabled={isPending}
              onChange={(e) => {
                const newQuantity = parseInt(e.currentTarget.value);
                startTransition(async () => {
                  await setProductQuantity(product.id, newQuantity);
                });
              }}
            >
              <option value={0}>0 (Supprimer)</option>
              {Array.from({ length: 99 }, (_, i) => i + 1).map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
            {isPending && <span className="loading loading-spinner loading-sm" />}
          </div>
          <div className="flex items-center gap-3">
            Total: {formatPrice(product.price * quantity)}
            {isPending && (
              <span className="loading loading-spinner loading-sm" />
            )}
          </div>
        </div>
      </div>
      <div className="divider" />
    </div>
  );
}
