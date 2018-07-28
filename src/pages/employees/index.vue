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



                                            <div class="card p-4 my-3">
                                                <div class="card-title px-0 pb-0 no-border">
                                                    <h3 class="heading heading-6 strong-600">
                                                        Company Employees
                                                    </h3>
                                                    <p class="mt-1 mb-0">
                                                        All Employees registered under the firm
                                                    </p>

                                                      <a href="#" class="btn btn-styled btn-circle btn-sm  pull-right btn-primary" data-toggle="modal" data-target="#exampleModald">Add New Departments</a>
                                                      <a href="#" class="btn btn-styled btn-circle btn-base-2 btn-sm pull-right" data-toggle="modal" data-target="#exampleModale">Add New Employees</a>
                                                </div>


                                                <div class="card-body px-0">
                                                 <div>
                                                    <table class="table table-sm table-hover">
                                                        <thead>
                                                            <tr>
                                                                <th>Select All
                                                                    <div class="checkbox">
                                                                        <input type="checkbox" name="checkbox_example_1">
                                                                        <label></label>
                                                                    </div>
                                                                </th>
                                                                <th>Employee Name</th>
                                                                <th>Employee Email</th>
                                                                <th>Status</th>
                                                            </tr>
                                                        </thead>

                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <div class="checkbox">
                                                                        <input type="checkbox" name="checkbox_example_1">
                                                                        <label></label>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                  Femi Falana
                                                                </td>
                                                                <td>
                                                                  FemiFalana@gmail.com
                                                                </td>
                                                                <td>
                                                                    <span class="badge badge--2 mr-4">
                                                                        <i class="bg-green"></i> Undergoing Training
                                                                    </span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div class="checkbox">
                                                                        <input type="checkbox" name="checkbox_example_1">
                                                                        <label></label>
                                                                    </div>
                                                                </td>

                                                                <td>
                                                                  Felecia Falana
                                                                </td>
                                                                <td>
                                                                  FeleFalana@gmail.com
                                                                </td>
                                                                <td>
                                                                    <span class="badge badge--2 mr-4">
                                                                        <i class="bg-red"></i> Not Undergoing Training
                                                                    </span>
                                                                </td>
                                                            </tr>


                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div class="link-menu link-menu--style-3 py-4 border-bottom">
                                                <a href="account-settings.html">Add To Training</a>
                                                <a href="account-orders.html">Change Department</a>
                                                <a href="account-cards.html">Delete Employee</a>
                                            </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       <!-- Modals -->
<div class="modal fade" id="exampleModald" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">New Department</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form>
    <div class="form-group">
        <label for="exampleFormControlInput1">Department Name</label>
        <input type="email" class="form-control" id="exampleFormControlInput1"  >
    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="exampleModale" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">New Department</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form>
    <div class="form-group">
        <label for="exampleFormControlInput1">Employee Name</label>
        <input type="email" class="form-control" id="exampleFormControlInput1"  >
    </div>
    <div class="form-group">
        <label for="exampleFormControlInput1">Employee Email</label>
        <input type="email" class="form-control" id="exampleFormControlInput1"  >
    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
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
