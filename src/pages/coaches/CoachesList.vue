<template>
  <section>
      <coach-filter @change-filter="setFilter"></coach-filter>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline" @click="loadCoaches">Refresh</base-button>
        <base-button link to="/register" v-if="!isCoach">Register as Coach</base-button>
      </div>
      <div v-if="isLoading">
        <base-spinner></base-spinner>
      </div>
      <ul v-else-if="hasCoaches">
        <li>
          <coach-item
            v-for="coach in filteredCoaches"
            :key="coach.id"
            :id="coach.id"
            :firstName="coach.firstName"
            :lastName="coach.lastName"
            :rate="coach.hourlyRate"
            :areas="coach.areas"
          ></coach-item>
        </li>
      </ul>
      <h3 v-else>No Coaches</h3></base-card
    >
  </section>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';
import CoachFilter from '../../components/coaches/CoachFilter.vue';

export default {
  components: { CoachItem, CoachFilter },
  data() {
      return {
          activeFilters: {
              frontend: true,
              backebnd: true,
              career: true
          },
          isLoading: false
      }
  },
  computed: {
    filteredCoaches() {
      const coaches = this.$store.getters['coaches/coaches'];
      return coaches.filter(coach => {
          if(coach.areas.includes('frontend') && this.activeFilters.frontend) {
              return true;
          }
          if(coach.areas.includes('backend') && this.activeFilters.backend) {
              return true;
          }
          if(coach.areas.includes('career') && this.activeFilters.career) {
              return true;
          }
      })
    },
    hasCoaches() {
      return !this.isLoading && this.$store.getters['coaches/hasCoaches'];
    },
    isCoach() {
          return this.$store.getters['coaches/isCoach'];
      }
  },
  created() {
    this.loadCoaches();
  },
  methods: {
      setFilter(updatedFilters) {
          this.activeFilters = updatedFilters;
      },
      loadCoaches() {
        this.isLoading = true;
        this.$store.dispatch('coaches/loadCoaches');
        this.isLoading = false;
      }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>