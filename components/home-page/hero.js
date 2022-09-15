import Image from "next/image"; // image boyutu azalatmak ve farklı sayfalarda aynı boyutta kullanabilmek için

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        {/* murti.jpg" dosya yolu gösterirken "public" klasörünü yazmamalıyız */}
        <Image
          src="/images/site/murti.jpg"
          alt="An image showing Max"
          width={300}
          height={300}
        />
      </div>
      <h1>hi, I am Max</h1>
      <p>I blog about web development</p>
    </section>
  );
}

export default Hero;
