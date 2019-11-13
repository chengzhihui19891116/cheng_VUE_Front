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
        showFemalePetsArr:[]
     } 
   },
   computed: {

    },
   methods:{
    fetchData(){
        this.$axios
          .get(
            'http://5c92dbfae7b1a00014078e61.mockapi.io/owners'
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
          });;
      },
   }
  
}

</script>

<style>

</style>

