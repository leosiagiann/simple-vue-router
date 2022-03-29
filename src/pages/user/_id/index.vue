<template>
    <h1>Halaman Detail User ID {{ $route.params.id }}</h1>
</template>

<script>
export default({
    props: {
        id: {
            type: String,
            required: true
        }
    },
})
</script>
