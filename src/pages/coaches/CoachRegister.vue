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
          this.$store.dispatch('coaches/addCoach', formData);
          this.$router.push('/coaches');
      }
  }
};
</script>

<style scoped>
</style>