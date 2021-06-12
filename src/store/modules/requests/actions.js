export default {
    contactCoach(context, payload) {
        const request = {
            ...payload,
            id: new Date().toISOString()
        }
        context.commit('addRequest', request);
    }
};