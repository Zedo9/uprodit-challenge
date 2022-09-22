<script setup lang="ts">
import { computed, onMounted, reactive, ref } from "vue";
import { search } from "../services/search";
import { SearchQuerySettings, User } from "../services/search/types";
import ProfileCard from "./ProfileCard.vue";
import Footer from "./Footer.vue";
import { QTreeNode } from "quasar";

const query = ref("");
const isFreelance = ref(false);
const isTjm = ref(false);
const selectedFilter = ref(null);
const email = ref("");
const surname = ref("");
const name = ref("");
const phone = ref("");
const skills = ref("");
const specialities = ref("");

const isLoading = ref(false);

const users = ref<User[]>([]);

const searchQuerySettings = reactive<SearchQuerySettings>({
  startIndex: 0,
  maxResults: 20,
});

const showFilters = ref(false);

function toggleShowFilters() {
  showFilters.value = !showFilters.value;
}

onMounted(async () => {
  isLoading.value = true;
  users.value = await search();
  isLoading.value = false;
});

const filteredUsers = computed(() => {
  if (query.value) {
    return users.value.filter(
      (user) =>
        user.name.toLowerCase().includes(query.value.toLowerCase()) ||
        user.surname.toLowerCase().includes(query.value.toLowerCase())
    );
  }
  return users.value;
});

async function onNextClick() {
  isLoading.value = true;
  query.value = "";
  searchQuerySettings.startIndex++;
  users.value = await search(searchQuerySettings);
  isLoading.value = false;
}

async function onPreviousClick() {
  isLoading.value = true;
  query.value = "";
  searchQuerySettings.startIndex--;
  users.value = await search(searchQuerySettings);
  isLoading.value = false;
}

async function onSearchClick() {
  isLoading.value = true;
  searchQuerySettings.startIndex = 0;
  searchQuerySettings.isFreelance = isFreelance.value;
  searchQuerySettings.allSkillsStr = skills.value;
  searchQuerySettings.allSpecialitesStr = specialities.value;
  searchQuerySettings.onlyWithTjm = isTjm.value;
  searchQuerySettings.nom = surname.value;
  searchQuerySettings.telephone = phone.value;
  searchQuerySettings.email = email.value;
  searchQuerySettings.prenom = name.value;

  users.value = await search(searchQuerySettings);
  isLoading.value = false;
}

const domainFilters: QTreeNode[] = [
  {
    label: "Computing",
    selectable: false,
    children: [
      {
        label: "Developer",
        selectable: true,
      },
      {
        label: "Mobile Developer",
        selectable: true,
      },
      {
        label: "Android Developer",
        selectable: true,
      },
      {
        label: "IOS Developer",
        selectable: true,
      },
    ],
  },
  {
    label: "Web Marketing",
    selectable: false,
    children: [
      {
        label: "SEO/SEA specialist",
        selectable: true,
      },
      {
        label: "Community Manager",
        selectable: true,
      },
      {
        label: "Webmaster",
        selectable: true,
      },
      {
        label: "Web Writer",
        selectable: true,
      },
    ],
  },
  {
    label: "Project Management",
    selectable: false,
    children: [
      {
        label: "Program Director",
        selectable: true,
      },
      {
        label: "engagement Manager",
        selectable: true,
      },
      {
        label: "Scrum Master",
        selectable: true,
      },
      {
        label: "Product Owner",
        selectable: true,
      },
    ],
  },
  {
    label: "Design",
    selectable: false,
    children: [
      {
        label: "UI Designer",
        selectable: true,
      },
      {
        label: "UX Designer",
        selectable: true,
      },
      {
        label: "Graphic artist",
        selectable: true,
      },
      {
        label: "Digital artist",
        selectable: true,
      },
    ],
  },
  {
    label: "Audiovisual & Cinema",
    selectable: false,
    children: [
      {
        label: "Director",
        selectable: true,
      },
      {
        label: "Producer",
        selectable: true,
      },
      {
        label: "Scenarist",
        selectable: true,
      },
      {
        label: "Cameraman",
        selectable: true,
      },
    ],
  },
  {
    label: "Other arts",
    selectable: false,
    children: [
      {
        label: "Painter",
        selectable: true,
      },
      {
        label: "Cartoonist",
        selectable: true,
      },
      {
        label: "Musician",
        selectable: true,
      },
      {
        label: "Singer",
        selectable: true,
      },
    ],
  },
  {
    label: "Others",
    selectable: false,
    children: [
      {
        label: "Mechanic",
        selectable: true,
      },
      {
        label: "Electronic",
        selectable: true,
      },
      {
        label: "Accounting",
        selectable: true,
      },
      {
        label: "Lawyer",
        selectable: true,
      },
    ],
  },
];
</script>

<template>
  <q-page-container>
    <q-page class="q-px-lg q-py-md">
      <div class="row q-col-gutter-xs">
        <div class="col-xs-12 col-sm-4">
          <q-btn-dropdown
            icon="list"
            color="info"
            label="Filter by domain"
            style="width: 100%"
          >
            <q-tree
              :nodes="domainFilters"
              node-key="label"
              v-model:selected="selectedFilter"
            />
          </q-btn-dropdown>
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
          <q-btn square color="info" icon="search" @click="onSearchClick" />
          <q-btn
            @click="toggleShowFilters"
            square
            color="info"
            icon="filter_alt"
          />
          <q-btn square color="secondary" icon="restart_alt" />
        </div>
      </div>

      <!-- Filters -->
      <q-slide-transition>
        <div
          v-if="showFilters"
          class="row q-col-gutter-xs"
          style="margin-top: 20px"
        >
          <div class="col-xs-12 col-sm-4"></div>
          <div class="col-xs-12 col-sm-8 row q-col-gutter-lg">
            <div class="col-xs-12 col-sm-6">
              <q-toggle
                label="Search only for freelancers"
                v-model="isFreelance"
                checked-icon="check"
                color="cyan"
              />
            </div>
            <div class="col-xs-12 col-sm-6">
              <q-toggle
                label="Only with price per day?"
                v-model="isTjm"
                checked-icon="check"
                color="cyan"
              />
            </div>
            <div class="col-xs-12 col-sm-6">
              <q-input
                class="col-xs-12 col-sm-6"
                v-model="name"
                placeholder="Name"
                filled
                :dense="true"
              />
            </div>
            <div class="col-xs-12 col-sm-6">
              <q-input
                class="col-xs-12 col-sm-6"
                v-model="surname"
                placeholder="Surname"
                filled
                style="min-width: 0px"
                :dense="true"
              />
            </div>
            <div class="col-xs-12 col-sm-6">
              <q-input
                class="col-xs-12 col-sm-6"
                v-model="email"
                placeholder="Email"
                filled
                style="min-width: 0px"
                :dense="true"
              />
            </div>
            <div class="col-xs-12 col-sm-6">
              <q-input
                class="col-xs-12 col-sm-6"
                v-model="phone"
                placeholder="Phone Number"
                filled
                style="min-width: 0px"
                :dense="true"
              />
            </div>
            <div class="col-xs-12 col-sm-6">
              <q-input
                class="col-xs-12 col-sm-6"
                v-model="skills"
                placeholder="Skills..."
                filled
                style="min-width: 0px"
                :dense="true"
              />
            </div>
            <div class="col-xs-12 col-sm-6">
              <q-input
                class="col-xs-12 col-sm-6"
                v-model="specialities"
                placeholder="Specialities..."
                filled
                style="min-width: 0px"
                :dense="true"
              />
            </div>
          </div>
        </div>
      </q-slide-transition>

      <!-- Profiles List -->
      <div class="q-col-gutter-lg row" style="margin-top: 20px">
        <ProfileCard
          v-for="user in filteredUsers"
          :key="user.id"
          class="col-xs-12 col-sm-6 col-md-4 col-lg-3"
          :user="user"
        />
        <div
          class="col relative-position justify-center content-center items-center text-center"
        >
          <q-inner-loading :showing="isLoading" />
        </div>
      </div>

      <div
        v-if="users.length > 0"
        class="row justify-center items-center q-col-gutter-xs text-center"
        style="margin-top: 20px"
      >
        <div>
          <q-btn
            @click="onPreviousClick"
            :disable="searchQuerySettings.startIndex == 0"
            style="width: 95px"
            color="white"
            text-color="black"
            label="Previous"
          />
        </div>
        <div>
          <q-btn
            @click="onNextClick"
            :disable="users.length < 20"
            style="width: 95px"
            color="white"
            text-color="black"
            label="Next"
          />
        </div>
      </div>

      <Footer />
    </q-page>
  </q-page-container>
</template>
