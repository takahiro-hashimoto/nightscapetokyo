import Image from "next/image";
import Link from "next/link";
import { SITE_NAMES } from "@/lib/types";
import type { SiteLocale } from "@/lib/types";

type Props = { locale: string | null };

export default function HeaderLogo({ locale }: Props) {
  if (locale) {
    return (
      <Link
        href={`/${locale}/`}
        className="block text-lg font-bold tracking-tight"
      >
        {SITE_NAMES[locale as SiteLocale]}
      </Link>
    );
  }

  return (
    <Link href="/" className="block">
      <Image
        src="/logo.png"
        alt="東京夜景ナビ"
        width={556}
        height={115}
        className="header-logo-img"
        priority
      />
    </Link>
  );
}
