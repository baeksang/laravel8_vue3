<template>
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <!-- Brand Logo -->
        <inertia-link :href="route('admin.dashboard.index')" class="brand-link">
        <img :src="'/storage/img/AdminLTELogo.png'" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
        <span class="brand-text font-weight-light">Admin-O-Matic</span>
        </inertia-link>

        <!-- Sidebar -->
        <div class="sidebar">
        <!-- Sidebar user panel (optional) -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
            <div class="image">
            <img :src="'/storage/img/user2-160x160.jpg'" class="img-circle elevation-2" alt="User Image">
            </div>
            <div class="info">
            <a href="#" class="d-block">{{ $page.props.user.name }}</a>
            </div>
        </div>

        <!-- SidebarSearch Form -->
        <!-- <div class="form-inline">
            <div class="input-group" data-widget="sidebar-search">
            <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search">
            <div class="input-group-append">
                <button class="btn btn-sidebar">
                    <font-awesome-icon icon="search" />
                </button>
            </div>
            </div>
        </div> -->

        <!-- Sidebar Menu -->
        <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <!-- Add icons to the links using the .nav-icon class
                    with font-awesome or any other icon font library -->
                <li class="nav-item menu-open">
                    <inertia-link :href="route('admin.dashboard.index')" class="nav-link active">
                        <font-awesome-icon icon="tachometer-alt" class="nav-icon" />
                        <!-- <i class="nav-icon fas fa-tachometer-alt"></i> -->
                        <p>
                            Dashboard
                            <i class="right fas fa-angle-left"></i>
                        </p>
                    </inertia-link>
                </li>
                <li class="nav-item">
                    <a href="# " class="nav-link">
                        <font-awesome-icon icon="table" class="nav-icon" />
                        <p>
                            Tables
                            <font-awesome-icon icon="angle-left" class="right" />
                        </p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <inertia-link href="#" class="nav-link">
                                <font-awesome-icon icon="circle" class="nav-icon" />
                                <p>Admins</p>
                            </inertia-link>
                        </li>
                        <li class="nav-item">
                            <inertia-link href="#" class="nav-link">
                                <font-awesome-icon icon="circle" class="nav-icon" />
                                <p>Users</p>
                            </inertia-link>
                        </li>
                        <li class="nav-item">
                            <inertia-link href="#" class="nav-link">
                                <font-awesome-icon icon="circle" class="nav-icon" />
                                <p>Roles</p>
                            </inertia-link>
                        </li>
                        <li class="nav-item">
                            <inertia-link href="#" class="nav-link">
                                <font-awesome-icon icon="circle" class="nav-icon" />
                                <p>Permissions</p>
                            </inertia-link>
                        </li>
                    </ul>
                </li>
                <li class="nav-header">MISCELLANEOUS</li>
                <li class="nav-item">
                    <inertia-link :href="route('dashboard')" class="nav-link">
                        <font-awesome-icon icon="home" class="nav-icon" />
                        <p>Site</p>
                    </inertia-link>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link" role="button">
                        <font-awesome-icon icon="sign-out-alt" class="nav-icon" />
                        <p>Logout</p>
                    </a>
                </li>
            </ul>
        </nav>
        <!-- /.sidebar-menu -->
        </div>
        <!-- /.sidebar -->
    </aside>

</template>

<script>
export default {

}
</script>
