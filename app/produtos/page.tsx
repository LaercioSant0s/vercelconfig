"use client";

import React, { useState, useEffect } from "react";
import useSWR from "swr";
import Link from 'next/link';
import { Button } from "@nextui-org/react";
import ProductListItem from "@/app/_components/cardComponent/product-list-item";
import { ProdutosResposta } from "../_models/produtos";
import Image from 'next/image';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Page: React.FC = () => {
  const { data, error, isLoading } = useSWR<ProdutosResposta[], Error>(
    "/api/produtos/",
    fetcher
  );

  const [search, setSearch] = useState("");

  const [filteredData, setFilteredData] = useState<ProdutosResposta[]>([]);

  const [cart, setCart] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      const cartItemsId = localStorage.getItem('cart');
      return cartItemsId ? JSON.parse(cartItemsId) : [];
    }
    return [];
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  const addItemToCart = (item: string) => { 
    setCart(prevCart => [...prevCart, item]);
  };

  useEffect(() => {
    if (data) {
      const newFilteredData = data.filter((product) => {
        return product.title.toLowerCase().includes(search.toLowerCase());
      });
      setFilteredData(newFilteredData);
    }
  }, [search, data]);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  if (data === undefined) return <div>error</div>;

  return (
    <>
      {/* Cart Icon */}
      {cart.length !== 0 && (
      <div className="fixed bottom-4 right-4 z-50 flex items-center space-x-2 bg-white p-2 rounded-full shadow-lg">
        <Link href="/cesto">
          <div className="flex items-center space-x-1 cursor-pointer">
            <Image
              src="/mainIcons/icons8-cart-50.png"
              alt="Cart Icon"
              width={30}
              height={30}
            />
            <span className="text-sm font-semibold text-green-500">
              {cart.length}
            </span>
          </div>
        </Link>
      </div>
      )}

      <div className="flex justify-center flex-row">
        <input placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="rounded-md px-5" />

        <div className="ml-4 mr-2 flex flex-row">
          <Image 
            src='/mainIcons/icons8-cart-50.png'
            alt="Cart Icon" 
            width={25}
            height={25}
          />
          <Link href='/cesto'><p className="ml-2 text-green-500 underline tracking-wider">({cart.length}) in basket</p></Link>
        </div>
      </div>

      <div className="my-auto flex w-full max-w-7xl flex-col items-center gap-2 mx-auto">
        <div className="grid w-full grid-cols-1 gap-6 px-6 py-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredData.map((produto) => (
            <ProductListItem
              key={produto.id}
              id={produto.id}
              title={produto.title}
              price={produto.price}
              image={produto.image}
              category={produto.category}
            >
              <Button
                fullWidth
                className="font-medium"
                color="primary"
                radius="lg"
                variant="solid"
                onPress={() => addItemToCart(produto.id)}
              >
                Add to cart
              </Button>
            </ProductListItem>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
