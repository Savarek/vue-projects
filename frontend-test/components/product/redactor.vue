<template>
  <aside class="redactor">
    <form class="redactor-form">
      <div class="redactor-option">
        <p class="redactor-option__name">
          Наименование товара<span class="redactor-option__span"></span>
        </p>
        <input
          v-model="name"
          :class="{ error: !$v.name.required, error: !$v.name.validFormat }"
          type="text"
          class="redactor-option__input"
          placeholder="Введите наименование товара"
        />
        <p v-if="!$v.name.required" class="error-message">
          Поле является обязательным
        </p>
        <p v-else-if="!$v.name.validFormat" class="error-message">
          В поле должны быть написаны только буквы/пробелы
        </p>
      </div>
      <div class="redactor-option">
        <p class="redactor-option__name__optional">Описание товара</p>
        <textarea
          v-model="description"
          cols="30"
          rows="8"
          class="redactor-option__textarea"
          placeholder="Введите описание товара"
        ></textarea>
      </div>
      <div class="redactor-option">
        <p class="redactor-option__name">
          Ссылка на изображение товара
          <span class="redactor-option__span"></span>
        </p>
        <input
          v-model="img"
          :class="{ error: !$v.img.required, error: !$v.img.validFormat }"
          type="text"
          class="redactor-option__input"
          placeholder="Введите ссылку"
        />
        <p v-if="!$v.img.required" class="error-message">
          Поле является обязательным
        </p>
        <p v-else-if="!$v.img.validFormat" class="error-message">
          В поле должны быть написана ссылка
        </p>
      </div>
      <div class="redactor-option">
        <p class="redactor-option__name">Цена товара</p>
        <span class="redactor-option__span"></span>
        <input
          v-model="price"
          :class="{ error: !$v.price.required, error: !$v.price.validFormat }"
          type="text"
          class="redactor-option__input"
          placeholder="Цена товара"
        />
        <p v-if="!$v.price.required" class="error-message">
          Поле является обязательным
        </p>
        <p v-else-if="!$v.price.validFormat" class="error-message">
          В поле должны быть написаны только цифры
        </p>
      </div>
      <button
        class="redactor-submit"
        :disabled="$v.$invalid"
        @click.prevent="
          addItem({
            price: price,
            img: img,
            name: name,
            description: description,
            id: Date.now(),
          })
        "
      >
        Добавить товар
      </button>
    </form>
  </aside>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { required } from 'vuelidate/lib/validators'
import Vue from 'vue'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)
export default {
  data() {
    return {
      img: '',
      name: '',
      description: '',
      price: '',
    }
  },
  validations: {
    img: {
      required,
      validFormat: (val) => /^(ftp|http|https):\/\/[^ "]+$/.test(val),
    },
    name: {
      required,
      validFormat: (val) => /^([а-яё\s]+|[a-z\s]+)$/iu.test(val),
    },
    price: {
      required,
      validFormat: (val) => /^[0-9]*[.,]?[0-9]+$/.test(val),
    },
  },
  computed: {
    ...mapGetters(['items']),
  },
  methods: {
    ...mapActions(['addItem']),
  },
}
</script>

<style lang="sass" scoped>
.submit
  background: #7BAE73 !important
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, 0.1) !important
  border-radius: .625rem !important
  color: white !important

.error
  border: .0625rem #FF8484 solid !important
  transition: border .5s linear !important


  &-message
    font-size: .5rem
    font-weight: 400
    color: #FF8484
    margin-top: .25rem
    position: absolute

.redactor
  background: #FFFEFB
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02)
  border-radius: 4px
  padding: 1.5rem
  max-height: 27.5rem


  &-form
    display: flex
    flex-direction: column

  &-option
    margin-bottom: 1rem

    &:last-child
      margin-bottom: 0

    &__name
      font-size: .625rem
      color: #49485E
      margin-bottom: .25rem
      position: relative

      &::after
        content: ''
        background: #FF8484
        border-radius: .25rem
        width: .25rem
        height: .25rem
        position: absolute
        top: 0

      &__optional
        font-size: .625rem
        color: #49485E
        margin-bottom: .25rem
        position: relative

    &__input
      background: #FFFEFB
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1)
      border-radius: 4px
      border: none
      padding: .75rem 0 .75rem 1rem
      width: 94%
      outline: none
      color: #B4B4B4
      font-size: .75rem
      transition: border 1s linear

    &__textarea
      background: #FFFEFB
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1)
      border-radius: 4px
      border: none
      padding: .75rem 0 .75rem 1rem
      outline: none
      resize: none
      width: 94%
      color: #B4B4B4
      font-size: .75rem

    &__span
      background: #FF8484
      border-radius: .25rem
      width: .25rem
      height: .25rem

  &-submit
    font-family: Inter, sans-serif
    background: #EEEEEE
    border-radius: 10px
    border: none
    padding: .75rem 6rem
    color: #B4B4B4
    font-size: .75rem
    cursor: pointer
    margin-top: 1.5rem
</style>
