<script>
  import { Group, GroupItem } from "flowbite-svelte";
  import { BullhornSolid, CandyCaneSolid, ChalkboardUserSolid, DribbbleSolid, GlobeSolid, LifeSaverSolid, MicrophoneSolid,  EggSolid,  FilterSolid, BookOpenSolid} from "flowbite-svelte-icons";
  let groupTimelines = [
    {
      title: '<span class="font-medium text-gray-900 dark:text-white">Jese Leos</span> likes <span class="font-medium text-gray-900 dark:text-white">Bonnie Green\'s</span> post in <span class="font-medium text-gray-900 dark:text-white"> How to start with Flowbite library</span>',
      src: "https://scontent-cgk2-2.xx.fbcdn.net/v/t39.30808-6/471173375_1751190648758092_1119243194052161958_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=kaPPrZ06z-YQ7kNvwGGVMgn&_nc_oc=AdlCVk-J96czVlmpucMjCGmfNVIO4Zk76s06flekjgheIp8V2ixYjJLQR6ag6XYpiDg&_nc_zt=23&_nc_ht=scontent-cgk2-2.xx&_nc_gid=W2eawUd33dhRz4Ow7vI_Xg&oh=00_AfZC7IIqUDgegODZPaj-2YCIiuhu4feUBdTulU3R4Ef1wg&oe=68CB0717",
      alt: "alt here",
      href: "/",
      isPrivate: false,
      comment: '"Kelulusan Agkatan 2020 - 2023 (covid)"'
    },
  ];

</script>

<div class="w-full h-auto flex flex-col">
    <div class="w-full h-auto bg-blue-100 px-2 py-10 flex flex-wrap justify-evenly items-center gap-1">
        <div class="w-full"><h1 class="text-5xl text-center gloria">Extrakurikuler</h1></div>
        <div class="w-40 h-30 rounded-xl bg-blue-950 flex items-center justify-center">
            <DribbbleSolid class="shrink-0 h-15 w-15 text-yellow-500" />
            <h1 class="text-2xl text-white">Bola Folly</h1>
        </div>
        <div class="w-40 h-30 rounded-xl bg-blue-950 flex items-center justify-center">
            <LifeSaverSolid class="shrink-0 h-15 w-15 text-indigo-500" />
            <h1 class="text-2xl text-white">Bola Kaki</h1>
        </div>
        <div class="w-40 h-30 rounded-xl bg-blue-950 flex items-center justify-center">
            <CandyCaneSolid class="shrink-0 h-15 w-15 text-red-500" />
            <h1 class="text-2xl text-white">Teater</h1>
        </div>
        <div class="w-40 h-30 rounded-xl bg-blue-950 flex items-center justify-center">
            <MicrophoneSolid class="shrink-0 h-15 w-15 text-green-500" />
            <h1 class="text-2xl text-white">Menyayi</h1>
        </div>
    </div>
    <div class="w-full h-auto bg-blue-100 px-2 py-10 flex flex-wrap justify-evenly items-center gap-1">
      <div class="w-full"><h1 class="text-5xl text-center gloria">RUANGGAN</h1></div>
        <div class="w-full h-30 rounded-xl bg-blue-950 flex items-center justify-center">
            <ChalkboardUserSolid class="shrink-0 h-15 w-15 text-white" />
            <h1 class="text-2xl text-white"> RUAG KELASS 15</h1>
        </div>
        <div class="w-full h-30 rounded-xl bg-blue-950 flex items-center justify-center">
          <FilterSolid class="shrink-0 h-15 w-15 text-white" />
          <h1 class="text-2xl text-white"> LABORATORIUM 3</h1>
        </div>
        <div class="w-full h-30 rounded-xl bg-blue-950 flex items-center justify-center">
          <BookOpenSolid class="shrink-0 h-15 w-15 text-white" />
          <h1 class="text-2xl text-white"> PERPUSTAKAAN 1</h1>
        </div>
        <div class="w-full h-30 rounded-xl bg-blue-950 flex items-center justify-center">
           <EggSolid class="shrink-0 h-15 w-15 text-white" />
            <h1 class="text-2xl text-white"> SANITASI 9</h1>
        </div>
    </div>
    <div class="m-auto w-120 md:w-[40vw] p-2">
        <h1 class="text-3xl flex "><BullhornSolid class="shrink-0 h-6 w-6 text-yellow-500" /> PENGGUMUMAN TERKINI</h1>
        <div class="w-full border mb-2"></div>
        <Group date="2022" class="bg-gray-200">
          <GroupItem timelines={groupTimelines} class="hover:bg-gray-300"/>
        </Group>
    </div>
</div>