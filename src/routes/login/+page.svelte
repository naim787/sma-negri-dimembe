<script>
  import Footer from "$lib/components/Footer.svelte";
  import Maintenance from "$lib/components/Maintenance.svelte";
  import Nav from "$lib/components/Nav.svelte";
  import "../../app.css";

  // input
  import { Label, Input, InputAddon, ButtonGroup } from "flowbite-svelte";
  import { UserCircleSolid } from "flowbite-svelte-icons";
</script>

<Nav />
<div class="w-[100vw] h-[90vh] flex justify-center items-center">
    <div class="mb-6">
    <form method="POST">
        <input class="bg-gray-900 text-white p-2 rounded-md" name="username" placeholder="Password Sekolah" />
        <button type="submit" class="py-2 px-4 bg-amber-300 rouded-500 rounded-r-md">Login</button>
    </form>
    </div>
</div>
<Footer />
