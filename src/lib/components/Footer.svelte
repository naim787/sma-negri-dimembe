<script lang="ts">
  import { Footer, FooterLinkGroup, FooterLink, FooterIcon, FooterCopyright } from "flowbite-svelte";
  import { FacebookSolid, GithubSolid, DiscordSolid, TwitterSolid } from "flowbite-svelte-icons";
</script>

<Footer footerType="sitemap">
  <div class="grid grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4 bg-blue-950">
    <div>
      <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">JURUSAN</h2>
      <FooterLinkGroup class="text-white dark:text-gray-200">
        <FooterLink class="hover:text-yellow-300 mb-4" href="/">Ips</FooterLink>
        <FooterLink class="hover:text-yellow-300 mb-4" href="/">Ipa</FooterLink>
        <FooterLink class="hover:text-yellow-300 mb-4" href="/">Bahasa Indonesia</FooterLink>
        <FooterLink class="hover:text-yellow-300 mb-4" href="/">Bahasa Inggris</FooterLink>
      </FooterLinkGroup>
    </div>
    <div>
      <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">LAYANAN</h2>
      <FooterLinkGroup class="text-white dark:text-gray-200">
        <FooterLink class="hover:text-yellow-300 mb-4" href="/">Pendaftaran siswa Baru</FooterLink>
        <FooterLink class="hover:text-yellow-300 mb-4" href="/">Portal Siswa Dan Guru</FooterLink>
        <FooterLink class="hover:text-yellow-300 mb-4" href="/">Osis</FooterLink>
      </FooterLinkGroup>
    </div>
    <div>
      <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">HUBUGI KAMI</h2>
      <FooterLinkGroup class="text-white dark:text-gray-200">
        <FooterLink class="hover:text-yellow-300 mb-4" href="/">Facebook</FooterLink>
      </FooterLinkGroup>
    </div>
    <div>
      <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">KONTAK KAMI</h2>
      <FooterLinkGroup class="text-white dark:text-gray-200">
        <FooterLink class="hover:text-yellow-300 mb-4" href="/">smandimaja@gmail.com</FooterLink>
      </FooterLinkGroup>
    </div>
  </div>
  <!-- <div class="bg-gray-100 px-4 py-6 md:flex md:items-center md:justify-between dark:bg-gray-700">
    <FooterCopyright class="text-sm text-black sm:text-center dark:text-gray-200" href="/" by="Naim Abdullah™" />
    <div class="mt-4 flex space-x-6 sm:justify-center md:mt-0 rtl:space-x-reverse">
      <FooterIcon href="/">
        <FacebookSolid class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" />
      </FooterIcon>
      <FooterIcon href="/">
        <DiscordSolid class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" />
      </FooterIcon>
      <FooterIcon href="/">
        <TwitterSolid class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" />
      </FooterIcon>
      <FooterIcon href="/">
        <GithubSolid class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" />
      </FooterIcon>
    </div>
  </div> -->
</Footer>