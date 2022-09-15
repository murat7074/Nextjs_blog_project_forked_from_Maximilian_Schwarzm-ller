import Logo from "./logo";
import Link from "next/link";
import classes from "./main-navigation.module.css"

function MainNavigation() {
  return (
    <header className={classes.header}>
      {/* "Link" in arasında düz bir metin olmazsa ve "a" kullanmazsak link gibi çalışmaz */}
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link> {/* burada düz metin var ve "a" kullanmamıza gerek yok */}
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
