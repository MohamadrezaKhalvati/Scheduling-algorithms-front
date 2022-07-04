<template>
    <div class="work-status col-6">
            <div>
                    <span class="work-status-title">وضعیت کاری</span>
            </div>
                <div class="chart">

                <div class="base">
                    <div class="weekly-avg-img">
                        <q-icon name="bolt" class="bolt-img" />
                    </div>
                    <div class="detail">
                            <span>۲.۷۵ ساعت</span>
                            <span>میانگین ساعت هفتگی</span>
                    </div>
                </div>

                <div class="base">
                    <div class="monthly-avg-img">
                        <q-icon name="timeline" class="timeline-img" />
                    </div>
                    <div class="detail">
                        <span>۰.۹۴</span>
                        <span>میانگین ساعت ماهانه</span>
                    </div>
                </div>

                <div class="base">
                    <div class="task-number-img">
                        <q-icon name="join_right" class="join-right-img" />
                    </div>
                    <div class="detail">
                        <span>۱ عدد</span>
                        <span>تعداد تسک فعال</span>
                </div>
            </div>
    </div>
      
    </div>
</template>
<script src="./WorkStatus.ts">

</script>

<style>
.work-status{
    display: flex;
    flex-direction: column;
    height: 200px;
    border-radius: 8px;
    background-color: #282f46 ;
}

.work-status-title{
    color: white;
    width: 100%;
}
.chart{
    margin:55px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.bolt-img{
    font-size: 30px;
    color:#ea5455
}

.timeline-img{
    color: #00cde8;
    font-size: 30px;
}

.join-right-img{
    font-size: 30px;
    color: #7367f0;
}
.detail{    
    display: flex;
    flex-direction: column;
    color:white;
    font-size: 13px;
}

.base{
    display: flex;
    flex-direction: row;
}
</style>