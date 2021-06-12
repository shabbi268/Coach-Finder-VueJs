export default {
    async contactCoach(context, payload) {
        const request = {
            ...payload,
            id: new Date().toISOString()
        };

        const response = await fetch(`https://vue-practice-3ecb0-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`, {
            method: 'POST',
            body: JSON.stringify(request)
        });

        const responseData = response.json();

        if (!response.ok) {
            throw new Error(responseData.message || 'Failed to post the request!')
        }
        context.commit('addRequest', request);
    },
    async fetchRequests(context) {
        const coachId = context.rootGetters.userId;
        const response = await fetch(`https://vue-practice-3ecb0-default-rtdb.firebaseio.com/requests/${coachId}.json`);

        const responseData = response.json();

        if (!response.ok) {
            throw new Error(responseData.message || 'Failed to fetch the requests!')
        }
        const requests = [];
        for (const key in responseData) {
            const request = {
                id: key,
                coachId: coachId,
                email: responseData[key].email,
                message: responseData[key].message
            }
            requests.push(request);
        }
        context.commit('setRequests', requests);



    }
};