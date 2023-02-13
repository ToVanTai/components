<template>
  <input :class="{
    'mscheckbox' : true,
    [icon] : true,
    [bgColor] : true,
    [size] : true
  }" type="checkbox" :checked="isChecked" ref="checkboxElm" @change="(event)=>{handleToggleChange(event)}"/>
</template>

<script>
export default {
    props:{
        icon: {
            type: String,
            default: "check",//minus, check 
        },
        bgColor: {
            type: String,
            default: "green",//green: #50b83c, red, blue
        },
        size: {
            type: String,
            default: "sm",//sm: 18, md: 20, lg: 24
        },
        isChecked: {
            type: Boolean,
            default: false
        }
    },
    emits: ['onToggleCheckbox'],
    methods: {
        handleToggleChange(event){
            event.preventDefault();
            this.$emit("onToggleCheckbox")
        }
    }
}
</script>

<style scoped>
    .mscheckbox{
        position: relative;
        cursor: pointer;
    }
    .mscheckbox::before{
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        box-sizing: border-box;
        border-radius: 4px;
        border: 2px solid #757575 ;
        background: #fff;
    }
    .mscheckbox.sm::before{
        width: 18px;
        height: 18px;
    }
    .mscheckbox.md::before{
        width: 20px;
        height: 20px;
    }
    .mscheckbox.lg::before{
        width: 24px;
        height: 24px;
    }

    .mscheckbox::after{
        content: "";
        position: absolute;
        color: #fff;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        box-sizing: border-box;
    }
    .mscheckbox.check::after{
        content: "✔";
    }
    .mscheckbox.minus::after{
        content: "ー";
    }

    .mscheckbox.green:checked::before{
        background: #50b83c;
        border-color: #50b83c;
    }
    .mscheckbox.red:checked::before{
        background: red;
        border-color: red;
    }
    .mscheckbox.blue:checked::before{
        background: blue;
        border-color: blue;
    }
</style>