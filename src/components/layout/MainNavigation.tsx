import classes from "./MainNavigation.module.css";
import Link from "next/link";
import { URLSearchParams } from "next/dist/compiled/@edge-runtime/primitives/url";
import { useRouter } from "next/router";

function MainNavigation() {
  return (
    <header
      className={`${classes.header} w-full text-white h-20 flex items-center justify-between bg-blue-800 px-[10%]`}
    >
      <div className="text-3xl font-bold">Mw&apos;s Pet Store</div>
      <nav>
        <ul className="m-0 p-0 flex list-none item-baseline gap-4">
          <li>
            <Link href="/">All Pets</Link>
          </li>
          <li>
            <Link href="/new-pet">Add New Pet</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
