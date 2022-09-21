<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getImage } from "../services/image";
import { User } from "../services/search/types";
const props = defineProps<{ user: User }>();

const srcString = "data:image/png;base64,";
let imageData = ref("");

onMounted(async () => {
  const image = await getImage(props.user.image_id);
  imageData.value = `${srcString}${image.b64Content}`;
});
</script>

<template>
  <div>
    <q-card class="text-secondary" bordered flat clickable>
      <q-img :src="imageData" />

      <q-card-section>
        <div class="text-center text-weight-bold">{{ user.denomination }}</div>
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
        <div class="text-caption">
          {{ user.specialities.join(", ") }}
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
