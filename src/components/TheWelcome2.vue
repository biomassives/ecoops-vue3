<script setup lang="ts">
import WelcomeItem2 from './WelcomeItem2.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem2>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Rewarding Vounteers</template>

    Waste management problems have solutions - upstream producer responsibility, recycling and
    composting, upcycling and development of circular ecomonies where ecomonic empowerment is needed
    the most.
  </WelcomeItem2>

  <WelcomeItem2>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Transparency & Privacy</template>

    Eco Ops works against corruption by relying on verifiable checkins and peer review. Photos,
    video recording, and details about steps taken toward achieving milestones
    <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener">becoming a sponsor</a>.
  </WelcomeItem2>
</template>
