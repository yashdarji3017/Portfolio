import Image from "next/image";
import { profile } from "@/data/profile";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { NavLinks } from "./NavLinks";
import { MobileMenu, type NavItem } from "./MobileMenu";

const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "Writing", href: "/#writing" },
  { label: "Contact", href: "/#contact" },
];

/** Fixed, understated top bar: name + availability on the left, links and theme on the right. */
export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/85 backdrop-blur-sm">
      <nav
        aria-label="Main"
        className="mx-auto flex h-14 w-full max-w-[1100px] items-center justify-between px-5 sm:px-6"
      >
        <a href="/#top" className="flex items-center gap-2.5">
          <div className="relative h-6 w-6 overflow-hidden rounded-full border border-border bg-secondary">
            <Image
              src={profile.avatarUrl}
              alt={profile.name}
              fill
              sizes="24px"
              className="object-cover"
              priority
            />
          </div>
          <span className="text-sm font-medium tracking-tight text-foreground">
            {profile.name}
          </span>
          <span
            className="hidden items-center sm:flex"
            title={profile.availability}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-50 motion-safe:animate-ping motion-reduce:hidden" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            <span className="sr-only">{profile.availability}</span>
          </span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          <NavLinks items={NAV_ITEMS} />
          <ThemeToggle />
        </div>

        <MobileMenu items={NAV_ITEMS} />
      </nav>
    </header>
  );
}
