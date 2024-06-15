<template>
    <div>
        <h1>Vos 20 derniers DM</h1>
        <ul>
            <li v-for="dm in dms" :key="dm.id">{{ dm.message_create.message_data.text }}</li>
        </ul>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useTwitterApi } from '~/composables/useTwitterApi'
import { ref, onMounted } from 'vue'

const route = useRoute()
const { getAccessToken, getLast20DMs } = useTwitterApi()
const dms = ref([])

onMounted(async () => {
    const { oauth_token, oauth_verifier } = route.query
    const { loggedClient } = await getAccessToken(oauth_token, oauth_verifier)
    dms.value = await getLast20DMs(loggedClient)
})
</script>