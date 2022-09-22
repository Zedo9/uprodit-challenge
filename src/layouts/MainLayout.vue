<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { onMounted, onUnmounted, ref } from "vue";
import MainContent from "../components/MainContent.vue";

const windowWidth = ref(window.innerWidth);
const drawer = ref(false);

function drawerClick(e: any) {
  if (miniState.value) {
    e.stopPropagation();
  }
}

const miniState = computed(() => {
  return windowWidth.value < 1028;
});

const isMobile = computed(() => {
  return windowWidth.value < 501;
});

function onResize() {
  windowWidth.value = window.innerWidth;
}

onMounted(() => {
  window.addEventListener("resize", onResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", onResize);
});
</script>

<template>
  <div>
    <q-layout view="LHh lpR lFf">
      <q-header elevated style="color: #98a6ad">
        <q-toolbar class="bg-white">
          <q-btn
            v-if="isMobile"
            flat
            @click="drawer = !drawer"
            round
            dense
            icon="menu"
          />
          <q-toolbar-title></q-toolbar-title>
          <a
            style="text-decoration: none"
            class="text-secondary"
            href="https://www.uprodit.com/inscription"
            ><q-btn
              flat
              dense
              icon="person"
              :label="isMobile || miniState ? '' : 'Signup'"
          /></a>

          <a
            style="text-decoration: none"
            class="text-secondary"
            href="https://www.uprodit.com/login"
            ><q-btn
              flat
              dense
              icon="power_settings_new"
              :label="isMobile || miniState ? '' : 'Login'"
          /></a>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above
        :mini="!drawer || miniState"
        @click.capture="drawerClick"
        :width="260"
        :breakpoint="500"
        style="height: 100vh"
        bordered
      >
        <q-scroll-area
          class="fit"
          style="background-color: #313a46; color: #838c96"
        >
          <q-list>
            <q-item v-ripple class="justify-center">
              <img
                src="../assets/logoSmall.png"
                alt="uprodit"
                width="25"
                v-if="miniState && !isMobile"
              />
              <img
                src="../assets/uprodit.png"
                alt="uprodit"
                width="120"
                v-else
              />
            </q-item>

            <q-item clickable v-ripple href="https://www.uprodit.com/newspaper">
              <q-item-section avatar>
                <q-icon name="newspaper" />
              </q-item-section>

              <q-item-section> News </q-item-section>
            </q-item>

            <q-item clickable v-ripple href="https://www.uprodit.com/stats">
              <q-item-section avatar>
                <q-icon name="analytics" />
              </q-item-section>

              <q-item-section> Statistics </q-item-section>
            </q-item>

            <q-item clickable v-ripple href="https://www.uprodit.com/chat/area">
              <q-item-section avatar>
                <q-icon name="question_answer" />
              </q-item-section>

              <q-item-section> Chat </q-item-section>
            </q-item>

            <q-item
              clickable
              v-ripple
              href="https://www.uprodit.com/internal/offer/search"
            >
              <q-item-section avatar>
                <q-icon name="work" />
              </q-item-section>

              <q-item-section> Jobs </q-item-section>
            </q-item>

            <q-expansion-item expand-separator icon="search" label="Community">
              <q-item :content-inset-level="0.5" clickable active>
                <q-item-section avatar> </q-item-section>

                <q-item-section class="text-white"> Freelancer </q-item-section>
              </q-item>
              <q-item
                :content-inset-level="0.5"
                clickable
                v-ripple
                href="https://www.uprodit.com/profile/all/search/ent"
              >
                <q-item-section avatar> </q-item-section>

                <q-item-section> Company </q-item-section>
              </q-item>
              <q-item
                :content-inset-level="0.5"
                clickable
                v-ripple
                href="https://www.uprodit.com/profile/all/search/assoc"
              >
                <q-item-section avatar> </q-item-section>

                <q-item-section> Organizations </q-item-section>
              </q-item>
            </q-expansion-item>

            <div
              v-if="!miniState || isMobile"
              class="helpbox column justify-between content-center"
            >
              <div>
                <img src="../assets/addJob.svg" height="90" alt="Add a job" />
              </div>
              <div style="margin-top: 1.5rem; font-weight: 700">
                Create a job offer
              </div>
              <div style="margin-bottom: 1.5rem">
                Post your offer to talented freelancers in Tunisia.
              </div>
              <div>
                <q-btn style="width: 120px" color="info" label="Create" />
              </div>
            </div>
          </q-list>
        </q-scroll-area>
      </q-drawer>

      <MainContent />
    </q-layout>
  </div>
</template>

<style scoped>
.helpbox {
  color: #838c96;
  margin: 65px 25px 25px;
  border-radius: 5px;
  padding: 20px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.07);
}
</style>
