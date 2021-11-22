<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <p class="title has-text-primary">{{ $t("title") }}</p>
        <p class="subtitle">{{ $t("subtitle") }}</p>
      </div>
      <Particles
      id="tsparticles"
      :options="{
        background: {
          color: {
            value: '#ffffff'
          }
        },
        fpsLimit: 60,
        interactivity: {
          detectsOn: 'window',
          events: {
            onClick: {
              enable: true,
              mode: 'repulse'
            },
            onHover: {
              enable: true,
              mode: ['grab'],
              parallax: {
                enable: true,
                force: 8,
                smooth: 10
              }
            },
            resize: true
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
              speed: 3
            },
            grab: {
              distance: 140,
              line_linked: {
                opacity: 0.3
              }
            },
            push: {
              quantity: 4
            },
            repulse: {
              distance: 320,
              duration: 2
            }
          }
        },
        particles: {
          color: {
            value: ['#A6A6A6', '#85A68E']
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#808080'
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'out',
            random: false,
            speed: 0.7,
            bounce: false,
            straight: false
          },
          number: {
            density: {
              enable: true,
              value_area: 800
            },
            value: 90
          },
          opacity: {
            value: 1
          },
          shape: {
            type: ['circle']
          },
          size: {
            random: true,
            value: 8
          }
        },
        detectRetina: true
      }"       
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
	title: 'Index'
})
</script>
<style scoped>
  #tsparticles {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000000;
    z-index: -10;
  }
  </style>