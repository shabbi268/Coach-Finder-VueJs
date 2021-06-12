export default {
    async addCoach(context, payload) {
        const userId = context.rootGetters.userId;
        const coach = {
            firstName: payload.first,
            lastName: payload.last,
            description: payload.desc,
            hourlyRate: payload.rate,
            areas: payload.areas,
        }
        const response = await fetch(`https://vue-practice-3ecb0-default-rtdb.firebaseio.com/coaches/${userId}.json`, {
            method: 'PUT',
            body: JSON.stringify(coach)
        });

        const responseData = await response.json();

        if (!response.ok) {
            throw new Error(responseData.message || 'Failed to fetch');
        }
        context.commit('registerCoach', { ...coach, id: userId });
    },
    async loadCoaches(context) {
        const response = await fetch('https://vue-practice-3ecb0-default-rtdb.firebaseio.com/coaches.json');

        const responseData = await response.json();

        if (!response.ok) {
            throw new Error(responseData.message || 'Failed to fetch');
        }


        const coaches = [];
        for (const key in responseData) {
            const coach = {
                firstName: responseData[key].firstName,
                lastName: responseData[key].lastName,
                description: responseData[key].description,
                hourlyRate: responseData[key].hourlyRate,
                areas: responseData[key].areas,
            }
            coaches.push(coach);
        }
        console.log('coaches: ', coaches);
        context.commit('setCoaches', coaches)
    }
};