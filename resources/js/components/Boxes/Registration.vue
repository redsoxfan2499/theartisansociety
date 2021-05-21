<template>
    <div class="small-box bg-warning">
        <div class="inner">
            <h3>{{ users_count }}</h3>

            <p>User Registrations</p>
        </div>
        <div class="icon">
            <i class="ion ion-person-add"></i>
        </div>
        <router-link to="/users" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></router-link>
<!--        <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>-->
    </div>
</template>

<script>
export default {
    data() {
        return {
            users_count: 44
        }
    }
}
</script>

<style scoped>

</style>
