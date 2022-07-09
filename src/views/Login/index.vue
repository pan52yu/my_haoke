<template>
  <div id="login">
    <van-nav-bar
      class="vt-nav-bar"
      title="账号登录"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-form @submit="onSubmit" class="vt-form" ref="form">
      <van-field
        v-model="user.username"
        name="用户名"
        placeholder="请输入账号"
        :rules="rules.username"
      />
      <van-field
        v-model="user.password"
        type="password"
        name="密码"
        placeholder="请输入密码"
        :rules="rules.password"
      />
      <div style="margin: 16px;">
        <van-button block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>

    <p class="vt-p">
      还没有账号，去
      <a @click="goRegister" href="javascript:;">注册~~~</a>
    </p>
  </div>
</template>

<script>
import { userLogin } from '@/api'
import { Toast } from 'vant'

export default {
  name: 'Login',
  data() {
    return {
      user: {
        username: 'hzhmqd',
        password: '123456'
      },
      rules: {
        username: [
          {
            required: true,
            message: '用户名和密码不能为空'
          },
          {
            pattern: /^[a-zA-Z0-9]{5,8}$/,
            message: '用户名格式5-8位的字母和数字'
          }
        ],
        password: [
          {
            required: true,
            message: '用户名和密码不能为空'
          },
          {
            pattern: /^[a-zA-Z0-9]{5,12}$/,
            message: '密码格式5-12位的字母和数字'
          }
        ]
      }
    }
  },

  methods: {
    onClickLeft() {
      this.$router.back()
    },
    goRegister() {
      this.$router.push('/register')
    },
    async onSubmit() {
      try {
        await this.$refs.form.validate()
      } catch (e) {
        return
      }
      try {
        const res = await userLogin(this.user)
        if (res.data.status !== 200) {
          Toast(res.data.description)
        } else {
          this.$store.commit('setUser', res.data.body.token)
          Toast.success('登录成功')
          this.$router.push('/home/profile')
        }
      } catch (e) {
        Toast('你的账号或者密码异常')
      }
    }
  }
}
</script>

<style lang="less" scoped>
#login {
  background-color: #fff;
  position: relative;
  text-align: center;

  .vt-nav-bar {
    background-color: #21b97a;

    /deep/ .van-ellipsis {
      color: #fff !important;
    }

    /deep/ .van-icon {
      color: #fff !important;
    }
  }

  .ipt {
    margin: 20px 10px;
    padding-left: 5px;
    border-bottom: 1px solid #eee;

    ::placeholder {
      font-size: 20px;
    }
  }

  .btn {
    width: 345px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  .vt-p {
    font-size: 28px;
    position: absolute;
    top: 450px;
    left: 50%;
    transform: translateX(-50%);
  }

  .van-button {
    background-color: #21b97a;;
  }
}
</style>
