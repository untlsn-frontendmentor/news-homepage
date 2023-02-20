import Header from '~/components/displays/Header';
import Aside from '~/components/displays/Aside';
import Article from '~/components/displays/Article';

export default function Home() {


  return (
    <div class="min-h-screen px-8 max-w-300 mx-auto lg:flex-(~ col) justify-center">
      <Header />
      <main class="max-lg:space-y-4 lg:grid-(~ cols-3) gap-4">
        <div class="col-span-2">
          <picture>
            <source srcset="/images/image-web-3-desktop.jpg" media="(min-width: 1024px)" />
            <img
              src="/images/image-web-3-mobile.jpg"
              alt="web-3"
            />
          </picture>
        </div>
        <h1 class="text-5xl font-bold">The Bright Future of Web 3.0?</h1>
        <div class="space-y-4">
          <p class="text-lg text-gray-500">
            We dive into the next evolution of the web that claims to put the power of the platforms back into the hands
            of the people.
            But is it really fulfilling its promise?
          </p>
          <a href="#" class="inline-block uppercase p-(x10 y4) hocus:bg-c-navy bg-c-red text-white font-bold">
            read more
          </a>
        </div>
        <Aside />
        <Article index={1} image="/images/image-retro-pcs.jpg"      title="Reviving Retro PCs"     description="What happens when old PCs are given modern upgrades?" />
        <Article index={2} image="/images/image-top-laptops.jpg"    title="Top 10 Laptops of 2022" description="Our best picks for various needs and budgets." />
        <Article index={3} image="/images/image-gaming-growth.jpg"  title="The Growth of Gaming"   description="How the pandemic has sparked fresh opportunities." />
      </main>
    </div>
  );
}
