<template>
  <div class="main">
    <div class="row">
      <div class="col-md-4 box-center ">

    <div class="box ">
      <div class="header">
          <img class="box-center" src="@/assets/logo.png"  alt="avatar">
      <h4>Hey, good to see you! </h4>
      <p> create an account to get going.</p>
      </div>
      <div class="body">
        <div class="forms">
            <div class="form-group">
  <label for="usr">Company Name</label>
  <input type="text" class="form-control" id="usr">
</div>
         <div class="form-group">
  <label for="usr">Company Email</label>
  <input type="text" class="form-control" id="usr">
</div>
<div class="form-group">
  <label for="pwd">Company Address:</label>
  <input type="password" class="form-control" id="pwd">
</div>

<div class="form-group">
  <label for="pwd">Password:</label>
  <input type="password" class="form-control" id="pwd">
</div>
<div class="form-group">
  <label for="pwd">Confirm Password:</label>
  <input type="password" class="form-control" id="pwd">
</div>
</div>

<button type="button" class="btn box-center btn-primary">
  Next</button>


      </div>

      <div class="footer text-center">
        <a href="signup" class="text-center"> I already have an account </a>
        <!-- <a href="signup"> Forgot your password?</a> -->
      </div>
    </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    data () {
      return {
        e1: 0
      }
    }
  }
</script>



<style type="text/css" scoped>
.main {
  padding:45px;
  background: #eee;
}
label {
  /* color:  #7ac066;
  font-weight: 600; */
}
.box-center {
  display: block;
  margin: auto;
}

.box .header{
  /* background-color: #fff; */
  padding: 50px;
  text-align: center;
}
.box .header img{
  width:30%;
}
.box .body{
  background-color: #ffffff;
  padding: 20px;
  box-shadow: 0px 1px 10px 1px #ddd;
}
.box .body button {
  width: 80%;
}
.btn-primary {
  border:none;
  background: #7ac066;
}
.btn-primary:hover {
  background: #aeca3d;
  border:none;
}
.box .footer{
  padding: 10px;
}
.box .footer a:nth-child(2){
  float: right;
}
</style>
