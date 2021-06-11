export default {
    registerCoach(state, payload) {
        console.log('mutations: ', payload);
        state.coaches.push(payload);
        console.log(`state: `, state)
    }
}