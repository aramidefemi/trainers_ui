<template>
<section class="slice-sm sct-color-1">
                        <div class="profile">
                            <div class="container">
                                <div class="row cols-xs-space cols-sm-space cols-md-space">
                                    <div class="col-lg-4">
                                        <div class="sidebar sidebar--style-2 no-border stickyfill">
                                                <div class="widget">
        <!-- Profile picture -->
        <div class="profile-picture profile-picture--style-2">
            <img src="../../assets/logo.png" class="img-center">
            <a href="#" class="btn-aux">
                <i class="ion ion-edit"></i>
            </a>
        </div>

        <!-- Profile details -->
        <div class="profile-details">
            <h2 class="heading heading-4 strong-500 profile-name">The Elisabeth Company</h2>
            <h3 class="heading heading-light heading-6 strong-400 profile-location">Somewhere in lekki, Lagos, Nigeria</h3>
        </div>







        <div class="profile-useful-links clearfix">
            <div class="useful-links">
              <!-- <h4>Navigation</h4> -->
                <ul class="categories categories--style-3 mt-3">
            <li>
                <a  class="active"  href="../../html/e-commerce/account-settings.html">
                    <i class="ion-gear-b"></i>
                    <span class="category-name">
                       Company Dashboard
                    </span>
                </a>
            </li>
            <li>
                <a href="../../html/e-commerce/account-orders.html">
                    <i class="ion-calendar"></i>
                    <span class="category-name">
                        Company Employees
                    </span>
                </a>
            </li>
            <li>
                <a href="../../html/e-commerce/account-wishlist.html">
                    <i class="ion-heart"></i>
                    <span class="category-name">
                        Company Trainings
                    </span>
                </a>
            </li>
            <li>
                <a href="../../html/e-commerce/account-notifications.html">
                    <i class="ion-email-unread"></i>
                    <span class="category-name">
                       Trainers
                    </span>
                </a>
            </li>

        </ul>
            </div>
        </div>
    </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-8">
                                        <div class="main-content">
<div class="row cols-xs-space cols-sm-space cols-md-space">
                                                <div class="col-md-6">
                                                    <div class="card">
                                                        <div class="card-body">
                                                            <h5 class="heading heading-5 strong-600">Company Employees</h5>
                                                            <br>
                                                            <p class="card-text">There are currently <b>30 Employees</b> belonging to <b>4 departments</b>  </p>
                                                            <a href="#" class="btn btn-primary">View more</a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-md-6">
                                                    <div class="card">
                                                        <div class="card-body">
                                                            <h5 class="heading heading-5 strong-600">Company Trainings</h5>
                                                            <br>
                                                            <p class="card-text">There are currently <b>15 Employees</b> under going <b>8 trainings</b>  </p>
                                                            <a href="#" class="btn btn-primary">View more</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div class="card p-4 my-3">
                                                <div class="card-title px-0 pb-0 no-border">
                                                    <h3 class="heading heading-6 strong-600">
                                                        New Trainings Suggestions
                                                    </h3>
                                                    <p class="mt-1 mb-0">
                                                        Enrole employees for new trainings
                                                    </p>
                                                </div>

                                                <div class="card-body px-0">
                                                  <div>
                                                    <table class="table table-sm table-hover">
                                                        <thead>
                                                            <tr>

                                                                <th>Title</th>
                                                                <th>Duration</th>
                                                                <th>Certification</th>
                                                                <th>Action</th>
                                                            </tr>
                                                        </thead>

                                                        <tbody>
                                                            <tr>

                                                                <td>
                                                                    HTML AND CSS COUPLED WITH BLOGGING
                                                                </td>
                                                                <td>5 WEEEKS</td>
                                                                <td>
                                                                    <span class="badge badge--2 mr-4">
                                                                        <i class="bg-green"></i> None
                                                                    </span>
                                                                </td>
                                                                <td>
<a href="#" class="btn btn-primary">Create Training</a>                                                                </td>
                                                            </tr>

                                                            <tr>

                                                                <td>
                                                                   MIND BLOGGING BLOG CREATION
                                                                </td>
                                                                <td>15 WEEEKS</td>
                                                                <td>
                                                                    <span class="badge badge--2 mr-4">
                                                                        <i class="bg-green"></i>  Bloggerly
                                                                    </span>
                                                                </td>
                                                                <td>
<a href="#" class="btn btn-primary">Create Training</a>                                                                </td>
                                                            </tr>


                                                        </tbody>
                                                    </table>
                                                </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
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
.sct-color-1 {
  background-color: #f1f1f1d9;
}
</style>
