<script lang="ts" setup>
import CardComponent from '@/components/containment/card-component.vue';
import InputComponent from '@/components/form/input-component.vue';
import SelectComponent from '@/components/form/select-component.vue';
import SpinnerComponent from '@/components/spinner/spinner-component.vue';
import { fetchAllCountries } from '@/services/restcountries-service';
import type { TCountry } from '@/types/views/сountry-type';
import { formatCapital } from '@/utils/formatters-utility';
import { computed, onMounted, reactive } from 'vue';

const state = reactive({
  countries: [] as TCountry[],
  isLoading: true,
  error: {
    message: '' as string | null
  },
  options: [
    { value: 'africa', label: 'Africa' },
    { value: 'america', label: 'America' },
    { value: 'asia', label: 'Asia' },
    { value: 'europe', label: 'Europe' },
    { value: 'oceania', label: 'Oceania' }
  ]
});

onMounted(() => {
  fetchAllCountries()
    .then((data) => {
      state.countries = data;
    })
    .catch((error) => {
      state.error.message = `Failed to fetch countries. Please try again. Error: ${error}`;
    })
    .finally(() => {
      state.isLoading = false;
    });
});

const formattedCountries = computed(() =>
  state.countries.map((country) => ({
    ...country,
    capital: formatCapital(country.capital)
  }))
);
</script>

<template>
  <section class="search-container">
    <div class="country-search">
      <InputComponent
        type="text"
        width="380px"
        :icon="'pi-search'"
        name="search"
        placeholder="Search for a country ..."
      />
    </div>
    <div class="country-select">
      <SelectComponent
        name="select"
        :icon="'pi-angle-down'"
        :options="state.options"
        placeholder="Filter by Region"
      />
    </div>
  </section>

  <!--Show spinner-->
  <div v-if="state.isLoading">
    <SpinnerComponent />
  </div>
  <!--//Show spinner-->

  <section v-else class="country-container">
    <CardComponent
      v-for="country in formattedCountries"
      :key="country.name.common"
      :header="true"
      :title="true"
      :subtitle="true"
      :content="false"
      :footer="false"
    >
      <template #header>
        <img :src="country.flags.png" alt="Country Flag" />
      </template>
      <template #title>
        <h5>{{ country.name.common }}</h5>
      </template>
      <template #subtitle>
        <div class="country-info">
          <span>Population:</span>
          <p>{{ country.population }}</p>
        </div>
        <div class="country-info">
          <span>Region:</span>
          <p>{{ country.region }}</p>
        </div>
        <div class="country-info">
          <span>Capital:</span>
          <p>{{ country.capital }}</p>
        </div>
      </template>
    </CardComponent>
  </section>
</template>

<style scoped>
.search-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  margin: 34px 0;
  top: 0;
  position: sticky;
  background-color: var(--background-color);

  > .country-search {
    padding: 10px 0;
    margin-left: 10px;
  }

  > .country-select {
    margin-right: 10px;
  }
}
.country-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 50px;
}
img {
  width: inherit;
  height: inherit;
  object-fit: cover;
  object-position: 50% 50%;
  border-bottom: 1px solid lightgray;
}
h5 {
  font-size: 1rem;
  font-weight: 800;
}
.country-info {
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  > span {
    font-size: 0.8rem;
    font-weight: 800;
    margin-right: 8px;
  }

  > p {
    margin: 0;
    font-size: 0.8rem;
    color: #64748b;
  }
}
</style>
