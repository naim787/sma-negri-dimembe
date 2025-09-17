<script>
	import NavvDash from './../../lib/components/NavvDash.svelte';
  import Footer from "$lib/components/Footer.svelte";
  import Nav from "$lib/components/Nav.svelte";
  import "../../app.css";
  import PaannelDash from '$lib/components/PaannelDash.svelte';

  import { AccordionItem, Accordion } from "flowbite-svelte";

/////////
  let Bars = true;


  let message = 'Memuat...';
</script>

<!-- <Nav /> -->
 <NavvDash on:panelDash={() => {Bars = !Bars}} />
    <div class="w-full h-[90vh] flex bg-gray-200">
        <!-- navbar -->
       <PaannelDash Bars={Bars} />
        <!-- <h1 class="text-3xl tcext-red-500 m-auto">{message}</h1> -->
         <div class="w-full bg-gray-200 dark:bg-gray-900 flex flex-col justify-start items-start p-2"
          role="button"
          tabindex="0"
          on:click={() => Bars = true}
          on:keypress={(e) => { if (e.key === 'Enter') Bars = true; }}
         >
            <div class="w-full p-3"><h1 class="text-4xl font-bold gloria ">Dashbord</h1></div>
            <div class="p-3 bg-white rounded-2xl">
                <!-- <canvas bind:this={chartCanvas} id="myChart"></canvas> -->
            </div>
         </div>
    </div>
<Footer />
