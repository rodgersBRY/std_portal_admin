<template>
  <div id="reports">
    <header>
      <NavBar />
    </header>

    <main>
      <section class="dashboard">
        <iframe
        src="http://164.92.169.3:3000/public/dashboard/992cce01-9f9d-412d-911c-a4a080398c01"
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
    height: 90vh;
  }
}
</style>
