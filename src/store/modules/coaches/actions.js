export default {
    addCoach(context, payload) {
        console.log('actions: ', payload);
        const coach = {
            id: context.rootGetters.userId,
            firstName: payload.first,
            lastName: payload.last,
            description: payload.desc,
            hourlyRate: payload.rate,
            areas: payload.areas,
        }
        context.commit('registerCoach', coach);
    }
};