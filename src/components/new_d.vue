<template>
    <div class="indicator-new">
        <div class="new_white"><a-button type="primary" @click="showModal" size="large">新建空白图</a-button></div>
        <div class="new_white"> <a-button @click="showModal" class="grey" size="large">模板创建</a-button></div>
        <a-modal
                title="新建空白图"
                :visible="visible"
                :width=600
                @ok="handleSubmit"
                :confirmLoading="confirmLoading"
                @cancel="handleCancel"
        >
            <a-form :form="form" @submit="handleSubmit">
                <div>
                    <div class="baseinfo">
                        <div>
                            <a-form-item label="组态图名称" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
                                <a-input
                                        v-decorator="['note', { rules: [{ required: true, message: '请输入组态图名称!' }] }]"
                                        placeholder="请输入组态图名称"
                                />
                            </a-form-item>
                        </div>

                        <div>
                            <a-form-item label="组态图分类" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
                                <a-select
                                        v-decorator="[
												'gender',
												{ rules: [{ required: true, message: '请选择组态图分类！' }] },
											]"
                                        placeholder="请选择组态图分类"
                                >
                                    <a-select-option value="sele1">
                                        遥信
                                    </a-select-option>
                                    <a-select-option value="sele2">
                                        遥测
                                    </a-select-option>
                                    <a-select-option value="sele3">
                                        保护
                                    </a-select-option>
                                    <a-select-option value="sele4">
                                        遥脉
                                    </a-select-option>
                                </a-select>
                            </a-form-item>
                        </div>

                        <div>
                            <a-form-item label="备注" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
                                <a-textarea placeholder=" " :rows="4" />
                            </a-form-item>
                        </div>
                    </div>
                </div>
            </a-form>
        </a-modal>
    </div>
</template>

<script>
    export default {
        name: "new",
        props: {
            // msg: String
        },
        data() {
            return {
                formLayout: 'horizontal',
                form: this.$form.createForm(this, { name: 'coordinated' }),
                ModalText: 'Content of the modal',
                visible: false,
                confirmLoading: false,
            }
        },
        methods: {
            showModal() {
                this.visible = true;
            },
            handleCancel() {
            this.visible = false
            },
            handleSubmit(e) {
                e.preventDefault();
                this.form.validateFields(() => {
            });
            },
            handleSelectChange() {
                this.form.setFieldsValue({
               });
            },
        },

    }
</script>

<style scoped>
    /deep/ .ant-modal-header{
        /*line-height: 10px;*/
        background: black;
    }
    /*/deep/ .ant-modal-content .ant-modal-title{*/
    /*    line-height: 14px;*/
    /*}*/
    /deep/ .ant-btn-lg{
        height:33px;
        padding:0 7px;
    }
    /deep/ .ant-modal-footer{
        text-align: center;
    }
    .new_white{
        float: left;
        margin: 0 25px 15px 0;
    }
    .grey{
        background-color: dimgrey;
        color: white;
    }
    .indicator-new{
        padding-bottom: 15px;
    }
    /deep/ .ant-form-item-label{margin-left: 45px;}
</style>