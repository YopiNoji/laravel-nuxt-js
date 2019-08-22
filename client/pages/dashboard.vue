<template>
  <div>
    <h1>Welcome to the dashboard</h1>
  </div>
</template>

<script>
export default {
  layout: 'partials/TopNav',
  middleware: 'auth'
}
</script>
