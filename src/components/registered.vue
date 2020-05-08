<template>
    <div class="container">
        <!--用户头像-->
        <div class="avatar">
            <div class="userImg">MK</div>
        </div>
        <!--用户注册信息-->
        <el-form :model="formData" :rules="rules" label-width="80px" ref="form">
            <el-row :gutter="60">
                <el-col :span="21">
                    <el-form-item label="账号" prop="userAccountNumber">
                        <el-input v-model="formData.userAccountNumber" clearable maxlength="12"
                                  show-word-limit></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="21">
                    <el-form-item label="密码" prop="userPassword">
                        <el-input v-model="formData.userPassword" clearable maxlength="12"
                                  show-word-limit></el-input>
                    </el-form-item>
                </el-col>
                <!--<el-col :span="21">
                    <el-form-item label="性别">
                        <el-radio-group v-model="formData.gender">
                            <el-radio :label="1">男</el-radio>
                            <el-radio :label="0">女</el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-col>-->
                <!--<el-col :span="21">
                    <el-form-item label="生日">
                        <el-input v-model="formData.birthday">
                            <el-button slot="append" icon="el-icon-date" @click="selectDate"></el-button>
                        </el-input>
                        <van-popup v-model="show" position="bottom">
                            <van-datetime-picker
                                    title="请选择出生日期"
                                    @cancel="cancel"
                                    @confirm="confirm"
                                    v-model="formData.birthday"
                                    type="date"
                                    value-format="yyyy-MM-dd"
                                    format="yyyy-MM-dd"
                                    :max-date="maxDate"
                                    :min-date="minDate"
                            ></van-datetime-picker>
                        </van-popup>
                    </el-form-item>
                </el-col>-->
                <!-- <el-col :span="21">
                     <el-form-item label="简介">
                         <el-input v-model="formData.remark" clearable maxlength="200"
                                   show-word-limit type="textarea" resize="none" rows="4"></el-input>
                     </el-form-item>
                 </el-col>-->
            </el-row>
            <div class="btnBar">
                <el-button class="btn" @click="registered" type="info">注册</el-button>
                <el-button class="btn" @click="login" type="primary">已有账号，去登录！</el-button>
            </div>
        </el-form>
    </div>
</template>

<script>
    import Cookie from '../assets/Cookie'

    export default {
        name: "registered",
        mixins: [Cookie],
        data() {
            return {
                formData: {
                    userAccountNumber: "",
                    userPassword: "",
                    /* gender: 1,
                     birthday: '',
                     remark: ""*/
                },
                rules: {
                    'userAccountNumber': [{required: true, whitespace: true, message: '请输入账号', trigger: 'blur'}],
                    'userPassword': [{required: true, whitespace: true, message: '请输入密码', trigger: 'blur'}],
                },
                maxDate: new Date,
                minDate: new Date(1990, 0, 0),
                show: false
            }
        },
        methods: {
            selectDate() {
                this.show = true;
            },
            cancel() {
                this.show = false;
            },
            confirm(date) {
                this.show = false;
                this.formData.birthday = this.formatDate(date);
            },
            /*格式化日期*/
            formatDate(date) {
                return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
            },
            login() {
                this.$router.push('/login');
            },
            registered() {
                this.$refs.form.validate((valid) => {
                    if (valid) {
                        this.setCookie(JSON.stringify(this.formData), []);
                    }
                });
            },
        }
    }
</script>

<style scoped lang="less">
    .container {
        position: fixed;
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        background: #F5F7FA;

        .avatar {
            width: 100%;
            height: 200px;
            position: relative;

            .userImg {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                width: 150px;
                height: 150px;
                background: white;
                margin: auto;
                border-radius: 100%;
                line-height: 150px;
                text-align: center;
                font-size: 50px;
                font-weight: 600;
                color: #3388dd;
            }
        }

        .btnBar {
            width: 100%;

            .btn {
                margin: 10px 10%;
                width: 80%;
            }
        }
    }
</style>