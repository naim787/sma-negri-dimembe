<script>
  import { page } from "$app/state";
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from "flowbite-svelte";
  let activeUrl = $derived(page.url.pathname);
</script>

<Navbar class="border-b-1 border-gray-300 ">
  <NavBrand href="/">
    <img src="./favicon.webp" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">SMANDIM</span>
  </NavBrand>
  <LayersSolid class="shrink-0 h-6 w-6" />
  
  <NavUl {activeUrl}>
    <NavLi href="/">Home</NavLi>
    <NavLi href="/docs/components/navbar">Navbar</NavLi>
    <NavLi href="/docs/components/accordion">Accordion</NavLi>
    <NavLi href="/docs/components/alert">Alert</NavLi>
    <NavLi href="/docs/components/avatar">Avatar</NavLi>
  </NavUl>
  
</Navbar>