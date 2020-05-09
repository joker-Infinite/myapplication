<template>
    <div class="container">
        <!--用户头像-->
        <div class="avatar">
            <div class="userImg">MK</div>
        </div>
        <!--填写登录信息-->
        <el-form :model="formData" label-width="80px" :rules="rules" ref="form">
            <el-row>
                <el-col :span="21">
                    <el-form-item label="账号" prop="userAccountNumber">
                        <el-input v-model="formData.userAccountNumber" clearable maxlength="12"
                                  show-word-limit></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="21">
                    <el-form-item label="密码" prop="userPassword">
                        <el-input v-model="formData.userPassword" clearable maxlength="12" show-word-limit></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <div class="btnBar">
                <el-button class="btn" @click="login" type="primary">登录</el-button>
                <el-button class="btn" @click="registered" type="info">无账号，点我注册！</el-button>
            </div>
        </el-form>
        <!--其他登录方式-->
        <div class="bottom">
            <div style="height: 50px;line-height: 30px;text-align: center;font-size: 12px;color: #6b6b6b">—————— 其他登录方式
                ——————
            </div>
            <ul class="otherLogin">
                <li>
                    <el-button icon="el-icon-eleme" circle></el-button>
                </li>
                <li>
                    <el-button icon="el-icon-apple" circle></el-button>
                </li>
                <li>
                    <el-button icon="el-icon-grape" circle></el-button>
                </li>
                <li>
                    <el-button icon="el-icon-cherry" circle></el-button>
                </li>
                <li>
                    <el-button icon="el-icon-edit" circle></el-button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Cookie from '../assets/Cookie'

    export default {
        name: "login",
        mixins: [Cookie],
        data() {
            return {
                formData: {
                    userAccountNumber: "",
                    userPassword: ""
                },
                rules: {
                    'userAccountNumber': [{required: true, whitespace: true, message: '请输入账号', trigger: 'blur'}],
                    'userPassword': [{required: true, whitespace: true, message: '请输入密码', trigger: 'blur'}],
                }
            }
        },
        methods: {
            login() {
                this.$refs.form.validate((valid) => {
                    if (valid) {
                        let t = this.getCookie(this.formData, [], 'login');
                        if (t) {
                            this.$notify({type: 'success', message: '欢迎' + this.formData.userAccountNumber + '登录！'});
                            this.$store.commit('actionIncrease', this.formData);
                            this.$nextTick(_ => {
                                this.$router.push('/');
                            })
                        } else {
                            this.$notify({type: 'warning', message: '密码或账号错误！'});
                        }
                    }
                });
            },
            registered() {
                this.$router.push('/registered');
            }
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

        .bottom {
            position: absolute;
            bottom: 10px;
            height: 100px;
            width: 100%;
        }

        .otherLogin {
            width: 80%;
            margin-left: 10%;
            height: 50px;
            list-style: none;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-around;
        }
    }
</style>