<script>
  import { onMount } from 'svelte';
  import "../../app.css"
  import { button, Gallery } from "flowbite-svelte";
   import { Img } from "flowbite-svelte";
  import Nav from '$lib/components/Nav.svelte';
  import { CloseCircleOutline, CaretLeftSolid , CaretRightSolid} from 'flowbite-svelte-icons';
  import Footer from '$lib/components/Footer.svelte';

  let visible = false;
  let target; // DOM element yang mau di-observe

  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        visible = entry.isIntersecting;

        if (entry.isIntersecting) {
        console.log('🔵 Elemen MASUK viewport');
        } else {
        console.log('🔴 Elemen KELUAR dari viewport');
        }
      },
      {
        threshold: 0.5, // Elemen dianggap terlihat saat 50% masuk viewport
      }
    );

    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  });


  let images = [
    {
      alt: "Cosmic timetraveler",
      src: "https://scontent.fmdc6-1.fna.fbcdn.net/v/t39.30808-6/503229598_10222552542561428_6317082748958276183_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=uO_hJpnd0KsQ7kNvwG9Jsic&_nc_oc=AdlTKbBaYPhdA2pcAPSK3mmMpkpo9K8V5h78h0YepRSwigTYXLsmpeRsMmfa_2BFvTA&_nc_zt=23&_nc_ht=scontent.fmdc6-1.fna&_nc_gid=mbWhfqy6O9vpMh_m8KoZuA&oh=00_AfaPqDJHoIW2jQfnt3o7nM3e36n99giJs6jRCvqot6UEhg&oe=68CB1570",
      title: "cosmic-timetraveler-pYyOZ8q7AII-unsplash.com"
    },
    {
      alt: "Cosmic timetraveler",
      src: "https://scontent.fmdc6-1.fna.fbcdn.net/v/t39.30808-6/503180259_10222552546081516_534203048889804395_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=6VTwIubWRf0Q7kNvwG1XHZ6&_nc_oc=AdmsWVTv-y9X-CgDpn_ZL7jET5CnzmSElqzOWS7ODSPwa9PkLW-cxAbHNHyh-o2Ko2o&_nc_zt=23&_nc_ht=scontent.fmdc6-1.fna&_nc_gid=Wt1dhAMZOTdeCQUxP1PtuQ&oh=00_AfZEdFlrU0XrnzLo9b8TeHkO0Dx7LXz_uy4ci-TTdW_tQQ&oe=68CB0684"
    },
    {
      alt: "Cosmic timetraveler",
      src: "https://scontent.fmdc6-1.fna.fbcdn.net/v/t39.30808-6/503130290_10222552546321522_2516494469284916037_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=NbHQW2TniOgQ7kNvwGZiEnx&_nc_oc=Adml20zg8_PYsbd939y8N_HS9j-3kZ7qTwPI8_q4JSJ54mPfoa4URjFigGH0FPutdL8&_nc_zt=23&_nc_ht=scontent.fmdc6-1.fna&_nc_gid=K3zqWIJe1cJfRntTntUGDw&oh=00_AfbrncEQnqaKlcn0klK1aHOit7fU6ODVgE5roB1-4o8Kgg&oe=68CB0DB2"
    },
    {
      alt: "Cosmic timetraveler",
      src: "https://scontent-cgk1-1.xx.fbcdn.net/v/t39.30808-6/503105133_10222552543001439_6516017439491922223_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=r5sb5PX4fmIQ7kNvwHUKjgF&_nc_oc=AdncfDO0J3PoHBzYeMsn7nEwyaBXSArAAKUfNscyoWoEjQ9aCDByaIcQoArv9RUwzno&_nc_zt=23&_nc_ht=scontent-cgk1-1.xx&_nc_gid=mmLBbSIW8zTa_Bo_lt-gtA&oh=00_AfalrHnGlMI23O5j4DsFcp9RxwOIAW-djQFffnevHWPF4w&oe=68CB184E"
    },
    {
      alt: "Cosmic timetraveler",
      src: "https://scontent-cgk1-2.xx.fbcdn.net/v/t39.30808-6/503075219_10222552542921437_6193130038017021538_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=c5lnnYmU30MQ7kNvwHBFLP2&_nc_oc=Adm9dZGdAsCEGEPp7-MvE0EOSC9yeYahTH0nBpU80pnMAGXV135ksAyECRGxoINZbZ8&_nc_zt=23&_nc_ht=scontent-cgk1-2.xx&_nc_gid=yhTwLNIb6luJ4Bmdxfi3Rw&oh=00_AfbcYKk3NcrVkWqXrcdTtv0hHpft_md3EZP2EDQ-TKI6iA&oe=68CB1953"
    },
    {
      alt: "Cosmic timetraveler",
      src: "https://scontent.fmdc6-1.fna.fbcdn.net/v/t39.30808-6/471133136_1751191122091378_3604410637803123361_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=SDtPq5w-BCgQ7kNvwE1Nrea&_nc_oc=Adk_qiwmTPi8Try7TLwhTjTWSNoTXQH7h-RDJr3yhY11_QFtKnHpPycdI-dCLlPiOBw&_nc_zt=23&_nc_ht=scontent.fmdc6-1.fna&_nc_gid=oO7gPL6q05S9dw31ZrPXsA&oh=00_AfbO06oV9tBG8mWL82DmaruGDb3A930LrKGHCwLJcM_1ig&oe=68CB271E"
    },
    // ips gacor :>
    {
      alt: "Cosmic timetraveler",
      src: "https://scontent.fmdc6-1.fna.fbcdn.net/v/t39.30808-6/472198128_1759899587887198_5846971098852418070_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=fIUqwXvxSeUQ7kNvwG9ixV-&_nc_oc=AdkQMxbkUc1jw4IEfHKglVmi03pQTQCPUqltbR2pij1MX3wJg4bfl8qHUwRskS7Avlo&_nc_zt=23&_nc_ht=scontent.fmdc6-1.fna&_nc_gid=iShGY_nzZJxbZlUpzO_HPQ&oh=00_AfYJkEz-Ogq9hwU5U5g5dVu_1bNTXeWGLiPMV4IrwIEYSQ&oe=68CB224B"
    },
    {
      alt: "Cosmic timetraveler",
      src: "https://scontent.fmdc6-1.fna.fbcdn.net/v/t39.30808-6/472210622_1759896314554192_306063907421569350_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=FX3Ah1afObAQ7kNvwEd_b6L&_nc_oc=Admyuq8dFGbrketIQ17-4uPbJeAihJazW3biV_fMUhuCoz1qUV0B4SmW4MUphBLWDtM&_nc_zt=23&_nc_ht=scontent.fmdc6-1.fna&_nc_gid=rTyxD92yKveWumQyq6OfYg&oh=00_AfZ9neR7UYx6sNMP9Yg8GrN9wpi-k1sEgIRYfyEHPEQAsg&oe=68CB1393"
    },
    {
      alt: "Cosmic timetraveler",
      src: "https://scontent-cgk1-1.xx.fbcdn.net/v/t39.30808-6/471159233_1751189915424832_7553149447899961719_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=zh3e8-N_l-YQ7kNvwGMYZwt&_nc_oc=Adnhrpk0D6Zz4c6aVRFv6zW8sE-wq4LJy75ldjvdHnsRGwEl2N2ptNXsnKT4lSHqQLw&_nc_zt=23&_nc_ht=scontent-cgk1-1.xx&_nc_gid=VN-qSs7iT15_zu5XNj_RhQ&oh=00_AfYKQFNybTZ3k5TGWKxR3Ws4KBq_yVZcrEL5mbSUvM0kxQ&oe=68CB0D79"
    },
    {
      alt: "Cosmic timetraveler",
      src: "https://scontent.fmdc6-1.fna.fbcdn.net/v/t39.30808-6/471161082_1751190038758153_750953307655199998_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=sJlgpNob1iUQ7kNvwEAoR4T&_nc_oc=AdnXRGb8GAZlnHPV238OkivRde1gEdq9L0_nQffXX3HdO54U5Us2BtOzHGYEWzxPgCM&_nc_zt=23&_nc_ht=scontent.fmdc6-1.fna&_nc_gid=p4i1IettK5lR3PC05-NFWA&oh=00_AfZw4f93Gdp9oE2P4GMQ8WOu5gdLgRPQ9K-Bcyicguy1rg&oe=68CB15A7"
    },
    // naim
    {
      alt: "Cosmic timetraveler",
      src: "https://scontent-cgk2-2.xx.fbcdn.net/v/t39.30808-6/471173375_1751190648758092_1119243194052161958_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=kaPPrZ06z-YQ7kNvwGGVMgn&_nc_oc=AdlCVk-J96czVlmpucMjCGmfNVIO4Zk76s06flekjgheIp8V2ixYjJLQR6ag6XYpiDg&_nc_zt=23&_nc_ht=scontent-cgk2-2.xx&_nc_gid=W2eawUd33dhRz4Ow7vI_Xg&oh=00_AfZC7IIqUDgegODZPaj-2YCIiuhu4feUBdTulU3R4Ef1wg&oe=68CB0717"
    },
    {
      alt: "Cosmic timetraveler",
      src: "https://scontent.fmdc6-1.fna.fbcdn.net/v/t39.30808-6/472211252_1759895184554305_488748505755511379_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=pqJSdg37EyEQ7kNvwH45dP6&_nc_oc=AdkaW4LbU0xHlajbolwe0oXKlCSHu8ntlifFhZOPh9vH062VssuhM4T8tm1bOpZDJfY&_nc_zt=23&_nc_ht=scontent.fmdc6-1.fna&_nc_gid=QSSgkCtKZttLS1ivRgFE8w&oh=00_AfaBmA-Z9TzFaVgD4kp47LzvIVGkkhId3YOd_dNoxrZZaw&oe=68CB13A3"
    },
    // ella akgkatan
    {
      alt: "Cosmic timetraveler",
      src: "https://scontent.fmdc6-1.fna.fbcdn.net/v/t39.30808-6/468821534_1739052859971871_4075296501577946518_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=wr86IDck4zUQ7kNvwEU5s06&_nc_oc=AdmQkkQfwRkQfwuZZG-4cgY6fh-Xy0XMqCQwWF-mDMZl5pfDuNQf1MsqG6qwJrA31XU&_nc_zt=23&_nc_ht=scontent.fmdc6-1.fna&_nc_gid=huOh1P9PJLH4BGuyPcYFLg&oh=00_Afa5KqbKTTIdFGsYDSCoTfecL0z6YefYt9V2cfdqWFuDbw&oe=68CB0E24"
    },
    {
      alt: "Cosmic timetraveler",
      src: "https://scontent.fmdc6-1.fna.fbcdn.net/v/t39.30808-6/469199900_1739052066638617_2429605381300887303_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=Z4OFj9J-cJsQ7kNvwHcBfda&_nc_oc=Adm_83Tn4s4aEoVNP5DQKn9bk9WrmNev-QnnlWTdOD9blae6Ck0TujUwabbP9zSm-Uk&_nc_zt=23&_nc_ht=scontent.fmdc6-1.fna&_nc_gid=G3R9K-F5cr0EL9zOqCfg5w&oh=00_AfZ1BI66oZRyQC77TkHGOF1uKA-FmIkBaNG-h3Whh5wBAg&oe=68CB1F4B"
    },
  ];

  let heigLight;
</script>
<!-- 
    <style>
        .spacer {
    height: 150vh;
  }

  .box {
    height: 200px;
    background-color: lightcoral;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.5s ease;
  }

  .hidden {
    opacity: 0.3;
  }

  .visible {
    opacity: 1;
  }
</style>

<div class="spacer">Scroll ke bawah...</div>

<div
  class="box {visible ? 'visible' : 'hidden'}"
  bind:this={target}
>
  {#if visible}
    <p>Elemen terlihat</p>
  {:else}
    <p>Elemen tidak terlihat</p>
  {/if}
</div>

<div class="spacer"></div> -->
<Nav />
<div class="flex justify-evenly flex-wrap items-center gap-3 pt-24 py-2">
  <!-- <div class="w-full h-20 border">

  </div> -->
  {#each images as img, index}
    <div class="relative w-200 h-60 group overflow-hidden rounded-xl shadow-md">
      <!-- Gambar -->
      <img
        src={img.src}
        alt={img.alt}
        class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      <!-- Tombol View (muncul saat hover) -->
      <div class="absolute inset-0 backdrop-blur-xl bg-opacity-50 text-white flex items-center justify-center text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <button type="submit" class="py-2 px-4 rounded-xl bg-amber-300 font-bold cursor-pointer" on:click={() => {heigLight = index}}>Lihat</button>
      </div>
    </div>
  {/each}
</div>
    <!-- <Gallery items={images} class="grid-cols-2 gap-4 md:grid-cols-3" /> -->
{#if images[heigLight]}
<div class="fixed top-0 left-0 z-50 backdrop-blur-2xl w-[100vw] h-[100vh] flex overflow-auto">
    <Img src={images[heigLight].src} class="w-[80vw] h-auto bg-red-500 m-auto" />
        <button type="submit" class="absolute top-0 right-0 m-3" on:click={()=> {heigLight = null}}>
            <CloseCircleOutline class="shrink-0 h-10 w-10 text-red-500" />
        </button>
        <button type="submit" on:click={() => { if (heigLight > 0) heigLight -= 1}}>
            <CaretLeftSolid class="shrink-0 h-10 w-10 absolute left-1 top-[50%]" />
        </button>
    
        <button type="submit" on:click={() => { if (heigLight < images.length - 1) heigLight += 1; }}>
           <CaretRightSolid class="shrink-0 h-10 w-10 absolute right-1 top-[50%]" />
        </button>

</div>
{/if}

<Footer />