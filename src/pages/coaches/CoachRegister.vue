<template>
  <section>
    <base-card>
      <h2>Register as a Coach</h2>
      <coach-form @register-form="addCoach"></coach-form>
    </base-card>
  </section>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';

export default {
  components: { CoachForm },
  methods: {
      addCoach(formData) {
          this.$store.actions.dispatch('add-coach', formData);
      }
  }
};
</script>

<style scoped>
</style>