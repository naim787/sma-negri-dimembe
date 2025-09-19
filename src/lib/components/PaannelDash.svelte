<script>
	import { AccordionItem } from 'flowbite-svelte';
	import { Accordion } from 'flowbite-svelte';
    export let Bars;

    import { DarkMode } from "flowbite-svelte";
</script>

<div class={`w-82 h-full bg-white dark:bg-gray-800 flex justify-center items-start md:static absolute left-0 md:translate-none md:transform-none transform transition-transform duration-300 ease-in-out ${Bars ? "translate-x-[-100%]" : "translate-x-[0%]"} `}>
            <ul class="w-[85%] h-2/3 p-2">
                <Accordion flush>
                    <AccordionItem>
                        {#snippet header()}Guru & Staff{/snippet}
                        <a href="/ppdb/berita" class="ml-5 mb-2 text-blue-700 dark:text-gray-400">Berita</a>
                    </AccordionItem>
                    <AccordionItem>
                        
                        {#snippet header()}Layout{/snippet}
                        <a class="ml-5 mb-2 text-blue-700 dark:text-gray-400">Logo</a>
                    </AccordionItem>
                    <a href="/" class="w-full h-16 flex justify-start items-center text-gray-500">
                        <h1 class="">Siswa</h1>
                    </a>
                    <DarkMode />
                </Accordion>
            </ul>
</div>