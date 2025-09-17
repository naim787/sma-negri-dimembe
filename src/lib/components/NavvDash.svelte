<script>
  import { page } from "$app/state";
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from "flowbite-svelte";
  import { LayersSolid } from "flowbite-svelte-icons";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  let activeUrl = $derived(page.url.pathname);
</script>

<Navbar class="border-b-1 dark:border-white/20 shadow-2xl shadow-white/15 dark:bg-gray-800 ">
  <NavBrand href="/">
    <img src="./favicon.webp" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">SMANDIM</span>
  </NavBrand>
  <button class="p-2 bg-gray-400 rounded-md md:hidden" on:click={() => {dispatch('panelDash');}}>
    <LayersSolid class="shrink-0 h-6 w-6" />
  </button>
  <NavUl {activeUrl}>
    <NavLi href="/">Home</NavLi>
    <NavLi href="/docs/components/navbar">Navbar</NavLi>
    <NavLi href="/docs/components/accordion">Accordion</NavLi>
    <NavLi href="/docs/components/alert">Alert</NavLi>
    <NavLi href="/docs/components/avatar">Avatar</NavLi>
  </NavUl>
  
</Navbar>