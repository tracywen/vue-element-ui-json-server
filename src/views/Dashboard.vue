<template>
  <div>
    <p>dashboard</p>   
    {{list}}
  </div>
</template>

<script>
export default {
    data(){
        return {
            list: []
        }
    },
    mounted(){
      this.getList();  
    },
    methods:{
        getList(){
            this.$ajax.get('/api/news').then(res=>{
                this.list = res.data;
            }).catch(err=>{
                console.log(err);
            })
        }
    }
}
    
</script>
