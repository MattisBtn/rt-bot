<template>
    <div>
      <h1>Connectez votre compte Twitter</h1>
      <button @click="authorizeApp">Autoriser l'application</button>
    </div>
  </template>
  
  <script setup>
  import { useTwitterApi } from '~/composables/useTwitterApi'
  
  const { getAuthorizationUrl } = useTwitterApi()
  
  const authorizeApp = async () => {
    const url = await getAuthorizationUrl()
    window.location.href = url
  }
  </script>