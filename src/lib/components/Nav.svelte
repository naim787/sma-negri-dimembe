<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Dropdown, DropdownItem, DropdownDivider } from "flowbite-svelte";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
  import { page } from "$app/state";
  let activeUrl = $derived(page.url.pathname);
  let activeClass = "text-orange-500";        // kuning latar + teks hitam
  let nonActiveClass = "text-black hover:bg-gray-200"; // default / saat tidak aktif
</script>

<Navbar class="bg-blue-500 fixed top-0 left-0 z-20 text-white shadow-2xl shadow-white/50">
  <NavBrand href="/">
    <img src="./favicon.webp" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">SMANDIM</span>
  </NavBrand>
  <NavHamburger />
  <NavUl {activeUrl } classes={{ active: activeClass, nonActive: nonActiveClass }}>
    <NavLi class="text-black" href="/"><h1>Beranda</h1></NavLi>
    <NavLi class="bg-yellow-300 ">
        Tentag Kami
        <ChevronDownOutline class="text-primary-800 ms-2 inline h-6 w-6 dark:text-white" />
    </NavLi>
    <Dropdown simple class="w-44">
      <DropdownItem href="/maintenance">Sejarah</DropdownItem>
      <DropdownItem href="/maintenance">Visi & Misi</DropdownItem>
      <DropdownItem href="/maintenance">Profil Lulusan</DropdownItem>
      <DropdownItem href="/maintenance">Fasilitas</DropdownItem>
    </Dropdown>
    <NavLi class="text-black" href="/maintenance">Program Sekolah</NavLi>
    <NavLi class="text-black" href="/maintenance">Kurikulum</NavLi>
    <NavLi class="text-black" href="/gallery">Gallery</NavLi>
    <NavLi class="text-black" href="/maintenance">Kontak</NavLi>
    <!-- <NavLi class="text-black p-3 bg-yellow-500" href="/ppdb">PPDB</NavLi> -->
  </NavUl>
</Navbar>