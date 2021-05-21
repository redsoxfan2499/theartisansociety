<template>
    <div class="small-box bg-danger">
        <div class="inner">
            <h3>{{ visitor_count }}</h3>

            <p>Unique Visitors</p>
        </div>
        <div class="icon">
            <i class="ion ion-pie-graph"></i>
        </div>
        <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            visitor_count: 65
        }
    }
}
</script>

<style scoped>

</style>
