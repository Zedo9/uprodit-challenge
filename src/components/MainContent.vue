<script setup lang="ts">
import { onMounted, ref } from "vue";
import { search } from "../services/search";
import { User } from "../services/search/types";
import ProfileCard from "./ProfileCard.vue";

const query = ref("");

const profile = {
  id: "130150",
  denomination: "Khalil B.",
  anonymous_denomination: "Khalil B.",
  image_id: "14896397",
  usecase: "perso",
  specialities: ["Filmmaker", "Director", "Producer"],
  stars_count: 322,
} as User;
</script>

<template>
  <q-page-container>
    <q-page class="q-px-lg q-py-md">
      <div class="row">
        <div class="col-xs-12 col-sm-4">
          <q-btn
            icon="list"
            color="info"
            label="Filter by domain"
            style="width: 100%"
          />
        </div>

        <div class="col-xs-12 col-sm-8 row no-wrap">
          <div style="width: 100%">
            <q-input
              v-model="query"
              placeholder="Search Freelancers (specialties, skills)"
              filled
              style="min-width: 0px"
              :dense="true"
            />
          </div>
          <q-btn square color="info" icon="search" />
          <q-btn square color="info" icon="filter_alt" />
          <q-btn square color="secondary" icon="restart_alt" />
        </div>
      </div>
      <div class="q-col-gutter-lg row" style="margin-top: 20px">
        <ProfileCard
          class="col-xs-12 col-sm-6 col-md-4 col-lg-3"
          :user="profile"
        />
        <ProfileCard
          class="col-xs-12 col-sm-6 col-md-4 col-lg-3"
          :user="profile"
        />

        <ProfileCard
          class="col-xs-12 col-sm-6 col-md-4 col-lg-3"
          :user="profile"
        />

        <ProfileCard
          class="col-xs-12 col-sm-6 col-md-4 col-lg-3"
          :user="profile"
        />

        <ProfileCard
          class="col-xs-12 col-sm-6 col-md-4 col-lg-3"
          :user="profile"
        />
      </div>

      <!--Footer-->
      <div class="row text-secondary q-col-gutter-md" style="margin-top: 1rem">
        <div
          class="col-xs-12 col-sm-4 justify-center content-start text-center"
        >
          Copyright 2022 - Uprodit Challenge
        </div>
        <div
          class="col-xs-12 col-sm-4 row justify-center content-center q-col-gutter-sm"
        >
          <a href="https://www.facebook.com/uprodit"
            ><q-icon
              color="blue"
              flat
              round
              size="sm"
              name="fa-brands fa-facebook"
          /></a>
          <a href="https://www.linkedin.com/company/11085769"
            ><q-icon
              color="red"
              flat
              round
              size="sm"
              name="fa-brands fa-linkedin"
          /></a>
          <a href="https://twitter.com/uproditnetwork"
            ><q-icon
              color="cyan"
              flat
              round
              size="sm"
              name="fa-brands fa-twitter"
          /></a>
        </div>
        <div
          class="col-xs-12 col-sm-4 row justify-center content-center q-col-gutter-sm text-right"
        >
          <div>
            <a
              style="text-decoration: none"
              class="text-secondary"
              href="https://www.uprodit.com/about"
              >About</a
            >
          </div>
          <div>
            <a
              style="text-decoration: none"
              class="text-secondary"
              href="https://www.uprodit.com/#contactez"
              >Contact Us</a
            >
          </div>
          <div>
            <a
              style="text-decoration: none"
              class="text-secondary"
              href="https://doc.uprodit.com/"
              >Documentation</a
            >
          </div>
          <div>
            <a
              style="text-decoration: none"
              class="text-secondary"
              href="https://status.uprodit.com/"
              >Status</a
            >
          </div>
        </div>
      </div>
    </q-page>
  </q-page-container>
</template>
