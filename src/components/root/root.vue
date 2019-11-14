<template>
 <div>
        <div style="float:left"><h3>Male</h3></div></br></br>
        <div style="float:left">
          <div  v-for="(item,index) in showMalePetsArr" :key="index">{{item.name}}</div>
        </div>
        </br>

        <div style="margin-top:100px">
          <div style="float:left"><h3>Female</h3></div><br></br>
            <div style="float:left">
                <div  v-for="(item,index) in showFemalePetsArr" :key="index">{{item.name}}</div>
            </div>
        </div>

        <div style="margin-top:150px;width:200px">
              <el-dropdown  split-button type="primary" @command="handleCommand">
                Weather for china
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="大连">大连</el-dropdown-item>
                  <el-dropdown-item command="朝阳">朝阳</el-dropdown-item>
                  <el-dropdown-item command="凌源">凌源</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
        </div>
  
    <div style="width:250px">
      <div>
        <div style="float:left;" v-if="this.cityChoose == '大连'">
            <div style="float:left;margin-left:10px;">City:{{cityMsg.city}}</div></br>
            <div style="float:left;margin-left:10px;">Update time:{{my_todayWeather.date}}</div></br>
            <div style="float:left;margin-left:10px;">Weather:{{my_todayWeather.type}}</div></br>
            <div style="float:left;margin-left:10px;">Temperature:{{my_todayWeather.high}} {{my_todayWeather.low}}</div></br>
            <div style="float:left;margin-left:10px;">Wind:{{my_todayWeather.fengxiang}}</div></br>
        </div>
      </div>

        <div style="float:left;" v-if="this.cityChoose == '朝阳'">
            <div style="float:left;margin-left:10px;">City:{{cityMsg.city}}</div></br>
            <div style="float:left;margin-left:10px;">Update time:{{my_todayWeather.date}}</div></br>
            <div style="float:left;margin-left:10px;">Weather:{{my_todayWeather.type}}</div></br>
            <div style="float:left;margin-left:10px;">Temperature:{{my_todayWeather.high}} {{my_todayWeather.low}}</div></br>
            <div style="float:left;margin-left:10px;">Wind:{{my_todayWeather.fengxiang}}</div></br>
        </div>
        <div style="float:left;" v-if="this.cityChoose == '凌源'">
            <div style="float:left;margin-left:10px;">City:{{cityMsg.city}}</div></br>
            <div style="float:left;margin-left:10px;">Update time:{{my_todayWeather.date}}</div></br>
            <div style="float:left;margin-left:10px;">Weather:{{my_todayWeather.type}}</div></br>
            <div style="float:left;margin-left:10px;">Temperature:{{my_todayWeather.high}} {{my_todayWeather.low}}</div></br>
            <div style="float:left;margin-left:10px;">Wind:{{my_todayWeather.fengxiang}}</div></br>
        </div>
    </div>



</div>
</template>


<script>
      function sortList(lists){ 
        return lists.sort((a, b) => {
            return a['name'].localeCompare(b['name'])
          })
      }
export default {
   created(){
    this.fetchData()
   },
   data(){
     return{
        showMalePetsArr:[],
        showFemalePetsArr:[],
        cityChoose:'',
        my_todayWeather:'',
        cityMsg:''
     } 
   },
   computed: {
      
    },
   methods:{
     // the method for Weather
    handleCommand(command) {
      this.cityChoose = command
      this.$axios
          .get(
           'http://localhost:9999/getWeather/' + command + '/' +'?timeid=' + (new Date()).valueOf(), 
          )
           .then(res => {
              var futherWeather = res.data.data
              var futher5Days = futherWeather.forecast
              var todayWeather = futher5Days[0]
              this.my_todayWeather = todayWeather
              this.cityMsg= futherWeather
            }).catch(function (error) {
              console.log(error);
          })
    },
    // the method for order cat
    fetchData(){
        this.$axios
          .get(
            'https://5c92dbfae7b1a00014078e61.mockapi.io/owners'
          )
          .then(res => {   
            var arr = res.data
            var my_malePetsArr =[]
            var my_femalePetsArr =[]
            for( var i = 0;i< arr.length;i++){
               if(arr[i]["gender"] == 'Male' & arr[i]["pets"] !== null){
               my_malePetsArr.push(arr[i]["pets"])
              }else if(arr[i]["gender"] == 'Female' & arr[i]["pets"] !== null){
               my_femalePetsArr.push(arr[i]["pets"])
              }
            }
            var maleCatsArr = []
            for(var i = 0;i< my_malePetsArr.length;i++){
               var malePetsArr = my_malePetsArr[i]
               for(var j = 0;j<malePetsArr.length;j++){
                 if(malePetsArr[j]["type"] == "Cat"){
                   maleCatsArr.push(malePetsArr[j])
                 }
               }
            }

            var femaleCatsArr =[]
            for(var i = 0;i< my_femalePetsArr.length;i++){
              var femalePetsArr = my_femalePetsArr[i]
              for(var j = 0;j<femalePetsArr.length;j++){
                if(femalePetsArr[j]["type"] == "Cat"){
                  femaleCatsArr.push(femalePetsArr[j])
                }
              }
            }
            sortList(femaleCatsArr)
            this.showFemalePetsArr = femaleCatsArr

            sortList(maleCatsArr)
            this.showMalePetsArr = maleCatsArr
          }).catch(function (error) {
              console.log(error);
          });
      },
   }
  
}

</script>

<style>

</style>

