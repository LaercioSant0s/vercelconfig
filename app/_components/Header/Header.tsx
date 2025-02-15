
"use client";

import type { NavbarProps } from "@nextui-org/react";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
  //Button,
  //Divider,
} from "@nextui-org/react";
import { cn } from "@nextui-org/react";

import { CustomIcon } from "./CustomIcon";
import styles from './Header.module.css'

export default function Component(props: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      {...props}
      classNames={{
        base: cn("border-default-100", {
          "bg-default-200/50 dark:bg-default-100/50": isMenuOpen,
        }),
        wrapper: "w-full justify-center",
        item: "hidden md:flex",
      }}
      height="60px"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      
      >
      {/* Left Content */}
      <NavbarBrand>
        <div className="rounded-full bg-foreground text-background">
          <CustomIcon />
        </div>
        <span className={styles.font_helvetica}>Laércio&apos;s Store</span>
      </NavbarBrand>

      {/* Center Content */}
      <NavbarContent justify="center">
        <NavbarItem>
          <Link className="font-bold text-default-500 hover:text-custom-hover transition-all duration-700" href="/#" size="sm">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="font-bold text-default-500 hover:text-custom-hover transition-all duration-700" href="/produtos" size="sm">
            Produtos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="font-bold text-default-500 hover:text-custom-hover transition-all duration-700" href="/tecnologias" size="sm">
            Tecnologias
          </Link>
        </NavbarItem>
        {/*
        <NavbarItem>
          <Link className="font-bold text-default-500 hover:text-custom-hover transition-all duration-700" href="https://laerciosant0s.github.io/" size="sm">
            Laboratórios
          </Link>
        </NavbarItem>
        */}
        <NavbarItem>
          <Link className="font-bold text-default-500 hover:text-custom-hover transition-all duration-700" href="#footer" size="sm">
            Contatos
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Right Content 
      <NavbarContent className="hidden md:flex" justify="end">
        <NavbarItem className="ml-2 !flex gap-2">
          <Button className="text-default-500" radius="full" variant="light">
            Login
          </Button>
          <Button
          className="bg-foreground font-medium text-background"
          color="secondary"
          endContent={<Icon icon="solar:alt-arrow-right-linear" />}
          radius="full"
          variant="flat"
          >
          Get Started
          </Button>
          </NavbarItem>
          </NavbarContent>
          */}

      
      
      <p className="md:hidden font-sans tracking-wider">
        {isMenuOpen ? "Fechar Menu" : "Abrir Menu"}
      </p>
      <NavbarMenuToggle className="text-default-400 md:hidden" />

      <NavbarMenu className="top-[calc(var(--navbar-height)_-_1px)] max-h-fit bg-default-200/50 pb-6 pt-6 shadow-medium backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50">
      {/* Sign in content
        <NavbarMenuItem>
          <Button fullWidth as={Link} href="/#" variant="faded">
            Sign In
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem className="mb-4">
          <Button fullWidth as={Link} className="bg-foreground text-background" href="/#">
            Get Started
          </Button>
        </NavbarMenuItem>
        */}
        <NavbarMenuItem>
          <Link className="font-bold text-default-500 hover:text-custom-hover transition-all duration-700" href="/#" size="sm">
            Home
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="font-bold text-default-500 hover:text-custom-hover transition-all duration-700" href="/produtos" size="sm">
            Produtos
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="font-bold text-default-500 hover:text-custom-hover transition-all duration-700" href="/tecnologias" size="sm">
            Tecnologias
          </Link>
        </NavbarMenuItem>
        {/*
        <NavbarMenuItem>
          <Link className="font-bold text-default-500 hover:text-custom-hover transition-all duration-700" href="https://laerciosant0s.github.io/" size="sm">
            Laboratórios
          </Link>
        </NavbarMenuItem>
        */}
        <NavbarMenuItem>
          <Link className="font-bold text-default-500 hover:text-custom-hover transition-all duration-700" href="#footer" size="sm">
            Contatos
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
