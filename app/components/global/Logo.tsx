"use client";

import Link from "next/link";
import Image from "next/image";
import LogoImage from "@/public/logo.png";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center group transition-opacity hover:opacity-80">
      <Image
        src={LogoImage}
        alt="Nitesh Solanki Logo"
        width={100}
        height={73}
        className="h-auto w-auto max-h-[50px] object-contain dark:invert dark:brightness-0 dark:contrast-200"
        priority
      />
    </Link>
  );
}

