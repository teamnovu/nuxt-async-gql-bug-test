// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            GQL_HOST: 'https://graphqlzero.almansi.me/api',
        },
    },

    modules: ['nuxt-graphql-client'],
})
