<template>
  <div class="container-fluid">
    <div class="row flex-nowrap">
      <div class="col-auto col-md-3 col-xl-2 bg-secondary min-vh-100" style="padding: 0 !important;">
        <ul class="nav flex-column bg-color fw-bold">
          <li class="nav-item fw-bold fs-2 py-4 m-auto text-black">
            Leonardo
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-black py-3" aria-current="page" :class="{ active: $route.name=='index' }" to="/">
            <i class="fa-solid fa-chart-line me-2"></i> Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-black py-3" aria-current="page" :class="{ active: $route.name=='user'||$route.name=='user-id' }" to="/user">
            <i class="fa-solid fa-user me-2"></i>User
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-black py-3" aria-current="page" :class="{ active: $route.name=='about' }" to="/about">
            <i class="fa-solid fa-address-card me-2"></i> About
            </router-link>
          </li>
        </ul>
      </div>
      <div class="col-10">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style>
a.active {
  background-color: white;
  color: black !important;
}
.bg-color a:hover {
  background-color: white;
  color: black !important;
}
</style>