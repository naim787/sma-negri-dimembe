<script>
  import { page } from '$app/state';
  import "../app.css"
</script>

<div class="w-[100vw] h-[100vh] flex justify-center items-center flex-col">
  <h1 class="text-5xl"> <span class="text-red-500 font-bold">{page.status}</span>{page.error.message}</h1>
  <a href="/" class="py-2 px-4 bg-blue-200 rounded-2xl">back</a>
</div>