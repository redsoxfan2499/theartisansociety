<template>
    <div class="small-box bg-success">
        <div class="inner">
            <h3>{{ bounce_rate }}<sup style="font-size: 20px">%</sup></h3>

            <p>Bounce Rate</p>
        </div>
        <div class="icon">
            <i class="ion ion-stats-bars"></i>
        </div>
        <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            bounce_rate: 53
        }
    }
}
</script>

<style scoped>

</style>
