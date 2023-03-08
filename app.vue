<template>
  <pre>{{ data }}</pre>
</template>

<script setup>
const config = useRuntimeConfig()

// this works
// const data = await useAsyncData(() => $fetch('https://jsonplaceholder.typicode.com/todos/1'))

// this does not work
// const { data } = await useAsyncData(() => GqlPost())

// this works
// const { data } = await useAsyncData(() => $fetch(config.GQL_HOST, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     query: `
// query Post {
//   post(id: 1) {
//     id
//     title
//     body
//   }
// }`,
//   }),
// }))

// this does not work
useGqlHeaders({ Accept: 'application/json' })
const { data } = await useAsyncGql({
  operation: 'Post',
})
</script>
