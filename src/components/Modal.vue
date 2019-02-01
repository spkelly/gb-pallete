<template>
  <div>
    <div class="modal__overlay">
      <div class="modal_wrapper">
        <transition name="modal">
          <div class="modal__container">
          <div class="modal__message">
            <p class="modal__paragraph">{{message}}</p>
          </div>
          <button class="modal__button" @click="hide" >{{isError?'Dismiss':'Cancel'}}</button>
          <button v-if="!isError" class="modal__button" @click="onConfirm">Confirm</button>
        </div>
      </transition>
      </div>
    </div>
  </div>
</template>


<script>
import {mapState,mapActions} from 'vuex';
import {TOGGLE_MODAL} from '../store/types';

export default {
  name:"Modal",
  props:{
    onConfirm:Function
  },
  computed:mapState({
    message: state => state.modal.modalMsg,
    isError: state => state.modal.isError
  }),
  methods:{
    ...mapActions({
      hide: 'hideModal'
    })
  }
}
</script>

<style lang="scss">
@import '../scss/main.scss';

  .modal__paragraph{
    font-size: 2.4rem;
    margin: 10px 0;
  }


  .modal__overlay{
    transition: opacity .3s ease;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: fixed;
    left:0;
    top:0;
    background-color:rgba(0,0,0,.45);
    z-index: 20;

  }
  .modal__container{
    transition: all 2s ease-in-out;
    border: 4px solid $color__pink;
    padding-top:20px;
    padding-left: 50px;
    padding-right: 50px;
    padding-bottom: 20px;
    max-width: 400px;
    background-color: $color__dark__pink;
    color: $color__pink;
  }

  .modal__button{
    border: 4px solid $color__pink;
    padding: 6px;
    font-size: 2rem;
    margin-right: 2rem;
    background-color: $color__dark__pink;
    color: $color__pink;
  }

  .modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
