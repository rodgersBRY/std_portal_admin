<template>
  <div id="reports">
    <header>
      <NavBar />
    </header>

    <main>
      <section class="dashboard">
        <iframe
        src="https://mawi.icu/public/dashboard/1ebbf6ec-6cd2-4d18-a7b1-5d32428e2617"
        frameborder="0"
        width="100%"
        height="100%"
        allowtransparency
        ></iframe>
      </section>
    </main>
  </div>
</template>

<style lang="scss" scoped>
main {
  .dashboard {
    width: 90%;
    margin: 3rem auto;
    height: 100vh;
  }
}
</style>
