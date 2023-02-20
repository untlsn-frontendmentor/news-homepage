function NavLink(props: { children: any }) {
  return (
    <li><a href="#" class="hocus:text-c-pink">{props.children}</a></li>
  );
}

export default function Header() {
  const [openNav, setOpenNav] = createSignal(false);
  const [lazyOpenNav, setLazyOpenNav] = createSignal(false);

  createEffect(() => {
    const openNavSnap = openNav();
    setTimeout(() => {
      setLazyOpenNav(openNavSnap);
    });
  });

  return (
    <header class="flex justify-between p-8">
      <img src="/images/logo.svg" alt="logo" />
      <button
        type="button"
        aria-expanded={openNav()}
        aria-label={`${openNav() ? 'close' : 'open'} navigation`}
        class="i-my-menu aria-expanded:i-my-menu-close text-5xl lg:hidden fixed inset-(t-8 r-8) z-1001"
        onClick={() => setOpenNav((v) => !v)}
      />
      <nav>
        <div
          aria-hidden={true}
          class={clsx(openNav() && 'bg-black/60 fixed inset-0')}
          onClick={[setOpenNav, false]}
        />
        <ul
          class={clsx(
            'flex gap-6 max-lg:(fixed inset-(t-0 r-0) w-70vw transition-transform flex-col p-4 text-xl pt-2/5 bg-white h-full z-1000)',
            !lazyOpenNav() && 'max-lg:translate-x-full',
            !openNav() && 'max-lg:hidden',
          )}
        >
          <NavLink>Home</NavLink>
          <NavLink>New</NavLink>
          <NavLink>Popular</NavLink>
          <NavLink>Trending</NavLink>
          <NavLink>Categories</NavLink>
        </ul>
      </nav>
    </header>
  );
}
