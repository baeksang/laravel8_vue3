  <template>
    <div>
        <admin-layout>
            <section class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-header">
                                    <h3 class="card-title">Permissions</h3>
                                    <div class="card-tools">
                                        <button type="button" class="btn btn-info text-uppercase" style="letter-spacing: 0.1em;" @click="openModal">Create</button>
                                    </div>
                                </div>
                                <div class="card-body table-responsive p-0">
                                    <table class="table table-hover text-nowrap">
                                        <thead>
                                            <tr>
                                                <th class="text-capitalize">Name</th>
                                                <th class="text-capitalize">Description</th>
                                                <th class="text-capitalize">Created</th>
                                                <th class="text-capitalize text-right">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(permission, index) in permissions" :key="index">
                                                <td>{{ permission.name }}</td>
                                                <td>{{ permission.description }}</td>

                                                <td>{{ permission .created_at }}</td>
                                                <td class="text-right">
                                                    <button class="btn btn-success text-uppercase"
                                                            style="letter-spacing: 0.1em;"
                                                            @click="editModal(permission)"
                                                    >Edit</button>
                                                    <button class="btn btn-danger text-uppercase ml-1"
                                                            style="letter-spacing: 0.1em;"
                                                            @click="deleteRole(permission)"
                                                    >Delete</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="card-footer clearfix">
                                    <!--  <Pagination :links="roles.links"></Pagination> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="modal fade" id="modal-lg">
                <div class="modal-dialog modal-lg modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4>{{ formTitle }}</h4>
                            <button type="button" class="close" @click="closeModal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body overflow-hidden">
                            <p class="h6 text-warning">** All permission must start with "create: ", "read: ", "update: ", or "delete: "</p>
                            <div class="d-flex flex-column h4">
                                <span>Preview name : <span>{{ form.name }}</span>
                                </span>
                                <span class="mt-3">Preview description: <span>{{ form.description }}</span>
                                </span>
                            </div>
                            <div class="card card-primary">
                                <form @submit.prevent="checkMode">
                                    <div class="card-body">
                                        <div class="form-group">
                                            <label for="name" class="h4">Permission Name</label>
                                            <input type="text" class="form-control" id="permision" placeholder="Permission Name" v-model="form.name" :class="{'is-invalid': form.errors.name}" autofocus="autofocus" autocomplete="off">
                                        </div>
                                        <div class="invalid-feedback mb-3" :class="{ 'd-block' : form.errors.name}">
                                            {{ form.errors.name }}
                                        </div>

                                         <div class="form-group">
                                            <label for="description" class="h4">Permission Description</label>
                                            <input type="text" class="form-control" id="description" placeholder="Permission Description" v-model="form.description" :class="{'is-invalid': form.errors.description}" autofocus="autofocus" autocomplete="off">
                                        </div>
                                        <div class="invalid-feedback mb-3" :class="{ 'd-block' : form.errors.description}">
                                            {{ form.errors.description }}
                                        </div>


                                        <div class="invalid-feedback" :class="{ 'd-block' : form.errors.permissions}">
                                            {{ form.errors.permissions }}
                                        </div>
                                    </div>

                                    <div class="modal-footer justify-content-between">
                                        <button type="button" class="btn btn-danger text-uppercase" style="letter-spacing: 0.1em;" @click="closeModal">Cancel</button>
                                        <button type="submit" class="btn btn-info   text-uppercase" style="letter-spacing: 0.1em;">{{ buttonTxt }} </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </admin-layout>
    </div>
</template>

<script>
import AdminLayout from '@/Layouts/AdminLayout'
// import Pagination from '@/Components/Pagination'
// import Swal from 'sweetalert2/dist/sweetalert2.js'
export default {
    props: [ 'permissions'],
    components: {
        AdminLayout,
        // Pagination,
    },
    data() {
        return {
            editedIndex: -1,
            editMode: false,
            form: this.$inertia.form({
                id: '',
                name: '',
                description: ''
            }),
        }
    },
    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'Create New Permission' : 'Edit Current Permission';
        },
        buttonTxt() {
            return this.editedIndex === -1 ? 'Create' : 'Edit';
        },
        checkMode() {
            return this.editMode === false ? this.createPermission : this.editPermission;
        }
    },
    methods: {
        addPermissions(newPermission){
            let permission = {
                name: newPermission,
            }
            this.permissionOptions.push(permission)
            this.form.permissions.push(permission)
        },
        openModal(){
            this.editMode = false
            this.editedIndex = -1
            this.form.reset()
            $('#modal-lg').modal('show')
        },
        closeModal(){
            $('#modal-lg').modal('hide')
        },
        editModal(permission){
            this.editMode = true
            $('#modal-lg').modal('show')
            this.editedIndex = this.permission.indexOf(permission)
            this.form.name          = permission.name
            this.form.id            = permission.id
            this.form.description   = permission.permissions
        },
        createPermission()  {
            // this.form.post(this.route('admin.roles.store'),{
            //     preserveScroll: true,
            //     onSuccess:() => {
            //         this.form.reset()
            //         this.closeModal()
            //         Toast.fire({
            //             icon: 'success',
            //             title: 'New Role Created!'
            //         })
            //     }
            // })
        },
        editPermission() {
            // this.form.patch(this.route('admin.roles.update', this.form.id, this.form),{
            //     preserveScroll: true,
            //     onSuccess:() => {
            //         Toast.fire({
            //              icon: 'success',
            //              title: 'Role has been updated!'
            //         })
            //         this.form.reset()
            //         this.closeModal()
            //     }
            // })
        },
        deletePermission(permission) {
            // Swal.fire({
            //     title: 'Are you sure?',
            //     text: "You won't be able to revert this!",
            //     icon: 'warning',
            //     showCancelButton: true,
            //     cancelButtonColor: '#d33',
            //     showConfirmButton: true,
            //     confirmButtonColor: '#3085d6',
            //     confirmButtonText: 'Yes, delete it!'
            // }).then((result) => {
            //     if (result.isConfirmed) {
            //         this.form.delete(this.route('admin.roles.destroy', role))
            //         Swal.fire(
            //             'Deleted!',
            //             'Role has been deleted.',
            //             'success'
            //         )
            //     }
            // })
        },
    }
}
</script>

<style>
/* .multiselector_content-wrapper {
    position: relative;
} */
</style>
