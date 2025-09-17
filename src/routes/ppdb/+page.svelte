<script>
	import NavvDash from './../../lib/components/NavvDash.svelte';
  import Footer from "$lib/components/Footer.svelte";
  import Nav from "$lib/components/Nav.svelte";
  import "../../app.css";

   import { AccordionItem, Accordion } from "flowbite-svelte";

  import { onMount } from 'svelte';


    //   cartjs
  import chartjs from 'chart.js/auto';
  import PaannelDash from '$lib/components/PaannelDash.svelte';
	let chartData;

	let chartValues = [20, 10, 5, 2, 20, 30, 45];
	let chartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
	let ctx;
	let chartCanvas;

/////////
  let Bars = true;


  let message = 'Memuat...';

  onMount(async () => {
    try {
          ctx = chartCanvas.getContext('2d');
			var chart = new chartjs(ctx, {
				type: 'bar',
				data: {
						labels: chartLabels,
						datasets: [{
								label: 'Revenue',
								data: chartValues
						}]
				}
		});
      const res = await fetch('/ppdb');
      const result = await res.json();
      message = result.message;
    } catch (e) {
      message = 'Gagal memuat';
      console.error(e);
    }
  });
</script>

<!-- <Nav /> -->
 <NavvDash on:panelDash={() => {Bars = !Bars}} />
   <button class="w-full" on:click={()=> Bars = !Bars}>
     <div class="h-[90vh] flex bg-gray-200">
         <!-- navbar -->
        <PaannelDash Bars={Bars} />
         <!-- <h1 class="text-3xl tcext-red-500 m-auto">{message}</h1> -->
          <div class="w-full bg-gray-200 dark:bg-black flex flex-col justify-start items-start p-2">
             <div class="w-full p-3"><h1 class="text-4xl font-bold gloria">Dashbord</h1></div>
             <div class="p-3 bg-white rounded-2xl">
                 <canvas bind:this={chartCanvas} id="myChart"></canvas>
             </div>
          </div>
     </div>
   </button>
<Footer />
