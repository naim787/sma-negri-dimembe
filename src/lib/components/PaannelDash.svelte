<script>
	import { AccordionItem } from 'flowbite-svelte';
	import { Accordion } from 'flowbite-svelte';
    export let Bars;
</script>

<div class={`w-82 h-full bg-white flex justify-center items-start lg:static absolute left-0 transform ${Bars ? "translate-x-[0%]" : "translate-x-[-100%]"} `}>
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
                </Accordion>
            </ul>
</div>