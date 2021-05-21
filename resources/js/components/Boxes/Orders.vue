<template>
    <div class="small-box bg-info">
        <div class="inner">
            <h3>{{ order_count }}</h3>

            <p>New Orders</p>
        </div>
        <div class="icon">
            <i class="ion ion-bag"></i>
        </div>
        <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            order_count: 150
        }
    }
}
</script>

<style scoped>

</style>
