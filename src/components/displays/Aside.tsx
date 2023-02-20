function AsideSection(props: { header: string, description: string, last?: boolean }) {
  return (
    <section class={clsx('text-white py-6', !props.last && 'border-b-1')}>
      <header class="text-xl font-bold">
        <a href="#" class="hocus:text-c-gold">{props.header}</a>
      </header>
      <p class="opacity-60">{props.description}</p>
    </section>
  );
}

export default function Aside() {
  return (
    <aside class="bg-c-navy p-4 row-span-2 col-start-3 row-start-1">
      <header class="text-c-gold text-2xl font-bold">New</header>
      <AsideSection header="Hydrogen VS Electric Cars"    description="Will hydrogen-fueled cars ever catch up to EVs?" />
      <AsideSection header="The Downsides of AI Artistry" description="What are the possible adverse effects of on-demand AI image generation?" />
      <AsideSection header="Is VC Funding Drying Up?"     description="Private funding by VC firms is down 50% YOY. We take a look at what that means." last />
    </aside>
  );
}
