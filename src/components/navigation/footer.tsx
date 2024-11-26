import React from "react";
import { Icons } from "..";
import { Heart } from "lucide-react";
import Link from "next/link";

export default function Footer() {
	return (
    <>
    <footer className="flex flex-col items-center justify-center border-t border-border pt-16 pb-8 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-32">
      <div className="grid grid-cols-1 xl:grid-cols-3 xl:gap-8 w-full">
        <div className="flex flex-col items-start justify-start md:max-w-[200]">
          <div className="flex items-start">
            <Icons.logo className="w-7 h-7"/>
          </div>
          <p className="text-muted-foreground mt-4 text-sm text-start">Crie sites perfomáticos e funcionais!</p>
          <span className="mt-4 text-neutral-200 text-sm flex items-center">
          Made in brazil
          <Heart className="w-3.5 h-3.5 ml-1 fill-primary text-primary" />
          </span>
        </div>
        <div className="grid grid-cols-2 xl:col-span-2 mt-16 xl:mt-0 gap-8">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 className="text-base font-medium text-white">Produto</h3>
              <ul className="mt-4 text-sm text-muted-foreground">
                <li className="mt-2">
                  <Link href='#' className="hover:text-muted-foreground transition-all duration-300">Features</Link>
                </li>
                
                <li className="mt-2">
                  <Link href='#' className="hover:text-muted-foreground transition-all duration-300">Features</Link>
                </li>

                <li className="mt-2">
                  <Link href='#' className="hover:text-muted-foreground transition-all duration-300">Features</Link>
                </li>

                <li className="mt-2">
                  <Link href='#' className="hover:text-muted-foreground transition-all duration-300">Features</Link>
                </li>

                <li className="mt-2">
                  <Link href='#' className="hover:text-muted-foreground transition-all duration-300">Features</Link>
                </li>
              </ul>
            </div>
            
            <div className="mt-10 md:mt-0 flex flex-col">
              <h3 className="text-base font-medium text-white">Integração</h3>
              <ul className="mt-4 text-sm text-muted-foreground">
              <li className="mt-2">
                  <Link href='#' className="hover:text-muted-foreground transition-all duration-300">Features</Link>
                </li>
                
                <li className="mt-2">
                  <Link href='#' className="hover:text-muted-foreground transition-all duration-300">Features</Link>
                </li>

                <li className="mt-2">
                  <Link href='#' className="hover:text-muted-foreground transition-all duration-300">Features</Link>
                </li>

                   <li className="mt-2">
                  <Link href='#' className="hover:text-muted-foreground transition-all duration-300">Features</Link>
                </li>
                
                <li className="mt-2">
                  <Link href='#' className="hover:text-muted-foreground transition-all duration-300">Features</Link>
                </li>

                <li className="mt-2">
                  <Link href='#' className="hover:text-muted-foreground transition-all duration-300">Features</Link>
                </li>
              </ul>
            </div>

            
          </div>
        </div>
        
      </div>

      <div className="mt-8 border-t border-border/80 pt-4 md:pt-8 md:flex md:items-center md:justify-between w-full">
        <p className="text-sm text-muted-foreground mt-8 md:mt-0">
          &copy {new Date().getFullYear()} Lunnaris AI.
          All rights reserved. 
        </p>
      </div>
    </footer>
    </>
  );
}