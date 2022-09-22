<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { onMounted, ref } from "vue";
import { getImage } from "../services/image";
import { User } from "../services/search/types";

const props = defineProps<{ user: User }>();

const srcString = "data:image/png;base64,";
const imageData = ref("");

onMounted(async () => {
  const image = await getImage(props.user.image_id);
  imageData.value = `${srcString}${image.b64Content}`;
});

const url = computed(
  () => `https://www.uprodit.com/profile/personal/${props.user.id}`
);
</script>

<template>
  <a style="text-decoration: none" :href="url">
    <div>
      <q-card class="text-secondary" bordered flat clickable>
        <q-img
          v-if="imageData"
          loading="lazy"
          spinner-color="secondary"
          :src="imageData"
          height="250px"
        />

        <q-card-section>
          <div class="text-center text-weight-bold">
            {{ user.denomination }}
          </div>
          <div class="text-right justify-center">
            <q-btn
              clickable="false"
              flat
              dense
              icon="star"
              :label="user.stars_count"
            />
          </div>
          <div class="text-caption">Specialized in:</div>
          <div
            class="text-caption"
            style="
              display: inline-block;
              width: 100%;
              white-space: nowrap;
              overflow: hidden !important;
              text-overflow: ellipsis;
            "
          >
            {{ user.specialities.join(", ") }}
          </div>
        </q-card-section>
      </q-card>
    </div>
  </a>
</template>
