<template>
  <v-toolbar dark color="primary">
    <div class="row">
      <div class="col-md-2 no-padding b-r">
        <img src="@/assets/banner.png"  alt="avatar">
      </div>
      <div class="col-md-8">
          <div class="navi">
            <a class="link" href="/user/index">
              Dashboard
              </a>
            <a href="/employees/all" class="link">
              Employees
              </a>
            <a class="link" href="/user/index">
              Trainings
              </a>
            <a class="link" href="/user/index">
              Trainers
              </a>

          </div>
      </div>
      <div class="col-md-2 ">
 <div class="author-image author-image-xs">
     <img src="@/assets/logo.png">
    </div>
      </div>
    </div>
  </v-toolbar>
</template>


<script type="text/javascript">
</script>



<style type="text/css" scoped>
img {
  width: 200px;
  margin: 0 auto !important;
  display: block;
}
.nav {
  border-bottom: 2px solid #7ac066;
}
.b-r {
  border-right: 2px solid #7ac066;
}
.b-l {
  border-left: 2px solid #7ac066;
}
.row {
      width: 100%;
}
.navi {
    position: absolute;
    bottom: 27px;
        left: 162px;
}
.navi a {
  text-align: center;
  margin: 0 20px;
  border-bottom: .5px solid #7ac066;
  padding: 10px;
  cursor: pointer;
  border-top-right-radius: 2px;
  border-top-left-radius: 2px;
}
.navi a:hover  {
  background-color: #7ac066;
  color: white;
  text-decoration-line: none;
}
.author-image img {
    margin-top: 24px !important;
    width: 50px;
    border-radius: 100%;
    border: 2px solid #7ac066;
    cursor: pointer;
}
.author-image img:hover {
background-color: #7ac06669;
}
.link {
  color: #000000
}
</style>
