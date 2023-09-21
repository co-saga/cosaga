<script lang="ts">
  import { onMount } from 'svelte';
  import { loadSlim } from 'tsparticles-slim';
  import { spring } from 'svelte/motion';
  import { email, validators } from 'svelte-use-form';
  import { enhance } from '$app/forms';
  import { getToastStore } from '@skeletonlabs/skeleton';
  import type { ToastSettings, ToastStore } from '@skeletonlabs/skeleton';
  import type { ActionData } from './$types';
  export let form: ActionData;

  const toastStore = getToastStore();
  const t: ToastSettings = {
    message: "thank you for the interest! we'll be in touch.",
    timeout: 30000,
    background: 'bg-emerald-600 text-white'
  };

  $: if (form?.success) {
    toastStore.trigger(t);
  }

  let ParticlesComponent: any;
  let userEmail = '';

  // rotation for the title h1
  const rotationX = spring({ x: 0 }, { stiffness: 0.005, damping: 0.016 });
  const rotationY = spring({ y: 0 }, { stiffness: 0.002, damping: 0.032 });

  onMount(async () => {
    const container = document.querySelector('.h-screen');
    const canvas = document.querySelector('#tsparticles');

    const updateRotation: any = (evt: MouseEvent) => {
      const rect = container!.getBoundingClientRect();
      const x = evt.clientX - rect.left - rect.width / 2;
      const y = evt.clientY - rect.top - rect.height / 2;

      rotationX.update((currentRotation) => ({
        x: (y / rect.height) * 90
      }));
      rotationY.update((currentRotation) => ({
        y: (x / rect.width) * 60
      }));
    };

    const resetRotation: any = () => {
      rotationX.update((currentRotation) => ({
        x: 0
      }));
      rotationY.update((currentRotation) => ({
        y: 0
      }));
    };

    container!.addEventListener('mousemove', updateRotation);
    container!.addEventListener('mouseleave', resetRotation);

    const module = await import('svelte-particles');

    ParticlesComponent = module.default;
    return () => {
      container!.removeEventListener('mousemove', updateRotation);
    };
  });

  let particlesConfig = {
    particles: {
      color: {
        value: [
          '#85daeb',
          '#5fc9e7',
          '#5fa1e7',
          '#5f6ee7',
          '#4c60aa',
          '#444774',
          '#cdcec4',
          '#b9c3a1',
          '#5d4776',
          '#855395',
          '#ab58a8',
          '#ca60ae',
          '#f3a787',
          '#f5daa7',
          '#8dd894',
          '#5dc190',
          '#4ab9a3',
          '#4593a5',
          '#5efdf7',
          '#ff5dcc',
          '#fdfe89',
          '#ffffff'
        ]
      },
      size: {
        value: 5,
        random: true
      },
      links: {
        enable: true,
        color: '#fff'
      },

      opacity: {
        value: 1,
        random: true
      },
      move: {
        enable: true,
        bounce: false,
        speed: 0.6,
        out_mode: 'out',
        attract: {
          enable: false,
          rotateX: -2400,
          rotateY: 1600
        }
      },
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onHover: {
          enable: true,
          mode: 'grab',
          parallax: {
            enable: false,
            force: 50,
            smooth: 100
          }
        },
        onClick: {
          enable: true,
          mode: 'push'
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 150,
          lineLinked: {
            opacity: 1
          }
        },
        push: {
          particles_nb: 1
        }
      }
    },
    detectRetina: true,
    fpsLimit: 60
  };

  let onParticlesLoaded = (event: { detail: { particles: any } }) => {
    // particlesContainer can call methods like play, pause, refresh, start, stop
    const particlesContainer = event.detail.particles;
  };

  let particlesInit = async (engine: any) => {
    await loadSlim(engine);
  };
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link
    href="https://fonts.googleapis.com/css2?family=Tilt+Prism:XROT,YROT@0,0..90,90&display=swap"
    rel="stylesheet"
  />
  <link
    rel="preload"
    href="/fonts/TiltPrism.ttf"
    as="font"
    type="font/truetype"
    crossorigin="anonymous"
  />
</svelte:head>

<div class="flex flex-col items-center justify-start bg-surface-800">
  <div class="h-screen w-screen bg-gradient-to-t from-surface-800 to-surface-900">
    <div
      class="absolute flex flex-col items-center justify-center bg-surface-700 shadow-lg shadow-primary-900/10 inset-2 sm:inset-4 lg:inset-x-12 !bottom-28 md:!bottom-28 rounded-3xl overflow-hidden"
    >
      <svelte:component
        this={ParticlesComponent}
        id="tsparticles"
        class="absolute w-full h-full blur-[0.5px]"
        style=""
        options={particlesConfig}
        on:particlesLoaded={onParticlesLoaded}
        {particlesInit}
      />

      <h1
        class="font-tiltprism text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-slate-300 z-10 pointer-events-none select-none"
        style={`font-variation-settings: "XROT" ${$rotationY.y}, "YROT" ${$rotationX.x};`}
      >
        cosaga
      </h1>
    </div>

    <div class="flex justify-center absolute bottom-8 inset-x-14">
      <form
        method="POST"
        use:enhance
        class="flex rounded-full bg-gradient-to-r from-emerald-900 to-emerald-600 p-[2px]"
      >
        <input
          bind:value={userEmail}
          class="lg:text-lg md:text-base sm:text-xs font-sans font-thin rounded-full border-none h-12 pl-3 ml-[1px] xs:max-w-[150px] sm:max-w-max"
          type="email"
          name="email"
          placeholder="email"
          use:validators={[email]}
        />
        {#if form?.success}
          <div
            class="btn text-emerald-100 lg:text-lg md:text-base sm:text-xs font-medium h-12 rounded-l-none rounded-r-full variant-glass pointer-events-none"
          >
            added!
          </div>
        {:else}
          <button
            class="btn text-emerald-100 lg:text-lg md:text-base sm:text-xs font-medium h-12 font-thin rounded-l-none rounded-r-full"
            >more info</button
          >
        {/if}
      </form>
    </div>

    <div
      class="absolute bottom-11 lg:left-auto lg:right-36 md:right-36 sm:left-16 xs:hidden sm:block"
    >
      <a
        class="text-slate-300 font-thin text-xl"
        href="https://github.com/co-saga/cosaga"
        target="_blank">Github</a
      >
    </div>

    <div class="absolute bottom-11 xs:right-8 sm:right-16 xs:hidden sm:block">
      <a class="text-slate-300 font-thin text-xl" href="https://x.com/_cosaga" target="_blank">X</a>
    </div>
  </div>
  <div class="relative h-auto w-full">
    <div
      class="relative mx-auto flex w-full max-w-4xl flex-col gap-16 overflow-hidden p-8 leading-relaxed text-blue-100 max-md:mt-16 md:p-16"
    >
      <section class="flex flex-col gap-8 text-slate-300">
        <p class="font-serif self-center text-2xl font-extralight font-thin">
          co- from Latin, meaning "with, together, jointly"
        </p>
        <div class="mb-4">
          <br />
          <p class="font-mono">
            If you could design a social media platform from the ground up, what would you do? What
            changes would you make to your current favorite platforms? How would you tune the
            recommendation system? Would it be private or open source? Would it be something your
            friends would actually use?
          </p>
          <br />
          <p class="font-mono">
            Every useful app captures its own slice of life. Uber is about getting places. Instagram
            is for sharing photos. LinkedIn is essentially the modern resume.
          </p>
          <br />
          <p class="font-mono">And Cosaga?</p>
        </div>
        <p class="font-serif self-center text-2xl font-extralight font-thin">
          saga: a long story of heroic achievement
        </p>

        <div>
          <br />
          <p class="font-mono">
            Cosaga is an experiment, a challenge, a saga in its own right. It's the idea that anyone
            can get together and mold the Internet to their liking. Software is no longer the
            challenge. AI can write most of it. The question is: what do you want?
          </p>
          <br />
          <p class="font-mono">
            <b>Serendipity. Collaboration. Profiles that actually tell a story.</b> I think it would
            be nice to have a social app built around these principles.
          </p>
        </div>
        <p class="font-mono self-end">- Thomas Zhao, September 2023</p>

        <hr class="border-slate-300" />
        <div class="font-mono mt-4">
          <h2
            class="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-mono text-slate-300 z-10 pointer-events-none select-none"
          >
            Roadmap
          </h2>
          <br />
          <h3 class="text-lg">Planned September 2023</h3>
          <p class="text-slate-400 text-sm">User authentication and basic profiles.</p>
          <br />
          <h3 class="text-lg">Planned October 2023</h3>
          <p class="text-slate-400 text-sm">
            Timelines and posting. Tag collaborators and form connections through posts.
          </p>
          <br />
          <h3 class="text-lg">Planned November 2023</h3>
          <p class="text-slate-400 text-sm">
            Replies & react mechanics. Point/karma system. Basic feed & searching.
          </p>
        </div>
        <hr class="border-slate-300" />
        <div class="font-mono">
          <h2
            class="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-mono text-slate-300 z-10 pointer-events-none select-none"
          >
            Connect
          </h2>
          <br />
          <p class="">
            Let's connect <a class="underline" href="https://twitter.com/_cosaga">@_cosaga</a>
          </p>
          <br />
          <p class="">
            <a class="underline" href="https://github.com/co-saga/cosaga">Contribute on Github</a>
          </p>
        </div>
      </section>
    </div>
  </div>
</div>
