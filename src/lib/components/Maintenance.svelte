<script>
  import { LockSolid } from "flowbite-svelte-icons";
  import Footer from "./Footer.svelte";
  import Nav from "./Nav.svelte";
</script>
<Nav></Nav>
  <div class="w-[100vw] h-[73vh] flex flex-col justify-center items-center">
    <div class="flex justify-center items-center border p-2 rounded-xl">
        <LockSolid class="shrink-0 h-30 w-30 text-amber-500" />
        <h1 class="">Dalam Tahap Pembuatan.......</h1>
    </div>
    <div class="w-full flex border-b-2">
        <div class="w-5 h-50 bg-black m-auto"></div>
    </div>
  </div>
<Footer></Footer>