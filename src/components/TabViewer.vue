/* eslint-disable */


<script>
export default {
  name:'TabViewer',
  props:{
    tabNames:Array,
  },
  data(){
    return({
      activeTab:0
    })
  },
  methods:{
    updateTab(tab){
      if(this.activeTab != tab){
        console.log("updating")
              this.activeTab = tab
      }
    }
  },

  render(){
    const TabComponents = this.$slots.default;
    const Tabs = this.tabNames.map((name,index)=>{
      return(
        <div class={this.activeTab == index? "tab-viewer__tab selected":"tab-viewer__tab"} onClick={()=> this.updateTab(index)}>
          {name}
        </div>
      )
    });
    return(
      <div class="tab-viewer">
        <div class="tab-viewer__header">
          {Tabs}
        </div>
        <div class="tab-viewer__content">
           {TabComponents[this.activeTab]} 
        </div>
      </div>)
  }
  
}
</script>


<style lang="scss">
@import '../scss/main';

.tab-viewer{
  min-width: 220px;
  width:fit-content;
  border-top:none;
}
.tab-viewer__header{
  font-size: 2rem;
  display:flex;
}

.selected{
  background-color: $color__pink;
  color: $color__dark__pink;
  border-top-left-radius: 8px; 
  border-top-right-radius: 8px;
}

.tab-viewer__content{

  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin:0 auto;
  min-height: 300px;
  @include border;
  border-top:none;
}
.tab-viewer__tab{
  cursor: pointer;
  flex-grow: 1;
  padding: 10px;
  border-bottom: 4px solid $color__pink;
}
.tab-viewer__tab:not(:last-child){
  border-bottom: 4px solid $color__pink;
}

</style>
