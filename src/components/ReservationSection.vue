<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  phone: '',
  guests: '2 位',
  date: '',
  time: '18:30',
  note: ''
})

const submitted = ref(false)

function submit() {
  if (!form.name || !form.phone || !form.date) {
    alert('请填写姓名、手机号和就餐日期～')
    return
  }
  submitted.value = true
}

const times = ['11:00', '11:30', '12:00', '12:30', '13:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30']
const guests = ['1 位', '2 位', '3 位', '4 位', '5 位', '6 位', '7 位', '8 位以上']
</script>

<template>
  <section id="reservation" class="reservation">
    <div class="container reservation-grid">
      <div class="reservation-copy" v-reveal>
        <p class="section-eyebrow">在线订位 · RESERVATION</p>
        <h2 class="section-title">留一席,给想见的人</h2>
        <p class="reservation-text">
          周末与节假日建议提前一天预订。如需包间、生日布置或团餐,可在备注中说明,
          我们会在 30 分钟内电话确认。
        </p>

        <ul class="contact-list">
          <li>
            <span class="c-icon">📍</span>
            <div><strong>餐厅地址</strong><span>上海市徐汇区衡山路 88 号</span></div>
          </li>
          <li>
            <span class="c-icon">📞</span>
            <div><strong>预订电话</strong><span>021-6666 8888</span></div>
          </li>
          <li>
            <span class="c-icon">🕐</span>
            <div><strong>营业时间</strong><span>11:00 – 14:00 · 17:00 – 22:00(周一休)</span></div>
          </li>
        </ul>
      </div>

      <div class="reservation-card" v-reveal="120">
        <Transition name="fade" mode="out-in">
          <form v-if="!submitted" class="booking-form" @submit.prevent="submit">
            <h3>预订信息</h3>

            <div class="field-row">
              <label class="field">
                <span>您的称呼 *</span>
                <input v-model="form.name" type="text" placeholder="例如:王小姐" />
              </label>
              <label class="field">
                <span>手机号码 *</span>
                <input v-model="form.phone" type="tel" placeholder="用于到店前确认" />
              </label>
            </div>

            <div class="field-row">
              <label class="field">
                <span>就餐日期 *</span>
                <input v-model="form.date" type="date" :min="new Date().toISOString().split('T')[0]" />
              </label>
              <label class="field">
                <span>就餐人数</span>
                <select v-model="form.guests">
                  <option v-for="g in guests" :key="g" :value="g">{{ g }}</option>
                </select>
              </label>
            </div>

            <label class="field">
              <span>到场时间</span>
              <div class="time-grid">
                <button
                  v-for="t in times"
                  :key="t"
                  type="button"
                  :class="{ active: form.time === t }"
                  @click="form.time = t"
                >
                  {{ t }}
                </button>
              </div>
            </label>

            <label class="field">
              <span>备注(选填)</span>
              <textarea v-model="form.note" rows="3" placeholder="包间 / 生日布置 / 忌口等"></textarea>
            </label>

            <button type="submit" class="btn btn-primary submit-btn">确认预订</button>
            <p class="form-tip">提交后将有专员与您电话确认,不收取任何订位费用。</p>
          </form>

          <div v-else class="booking-success">
            <span class="success-icon">✓</span>
            <h3>预订已提交 🎉</h3>
            <p>
              {{ form.name }} 您好,已为您记录 <strong>{{ form.date }}</strong>
              {{ form.time }} · {{ form.guests }} 的订位,我们会在 30 分钟内致电
              {{ form.phone }} 与您确认。
            </p>
            <button class="btn btn-ghost-dark" @click="submitted = false">再订一桌</button>
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>

<style scoped>
.reservation {
  padding: 110px 0;
  background: linear-gradient(180deg, var(--cream), #f4ecdd);
}

.reservation-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 60px;
  align-items: start;
}

.reservation-copy .section-eyebrow {
  margin-bottom: 12px;
}

.reservation-copy .section-title {
  text-align: left;
}

.reservation-text {
  margin-top: 20px;
  color: var(--ink-soft);
  font-size: 15px;
  line-height: 2;
  max-width: 430px;
}

.contact-list {
  list-style: none;
  margin-top: 34px;
  display: grid;
  gap: 18px;
}

.contact-list li {
  display: flex;
  align-items: center;
  gap: 16px;
}

.c-icon {
  width: 48px;
  height: 48px;
  flex: none;
  display: grid;
  place-items: center;
  font-size: 21px;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 14px;
  box-shadow: var(--shadow-sm);
}

.contact-list div {
  display: flex;
  flex-direction: column;
}

.contact-list strong {
  font-family: var(--font-serif);
  font-size: 15.5px;
  letter-spacing: 0.06em;
}

.contact-list div span {
  font-size: 13.5px;
  color: var(--ink-soft);
}

.reservation-card {
  background: #fff;
  border-radius: 22px;
  box-shadow: var(--shadow-md);
  padding: 40px;
  border: 1px solid var(--line);
}

.booking-form h3 {
  font-family: var(--font-serif);
  font-size: 22px;
  letter-spacing: 0.08em;
  margin-bottom: 26px;
}

.field-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 18px;
  font-size: 13.5px;
  color: var(--ink-soft);
  font-weight: 500;
}

.field span {
  letter-spacing: 0.06em;
}

.field input,
.field select,
.field textarea {
  font-family: inherit;
  font-size: 14.5px;
  color: var(--ink);
  padding: 13px 16px;
  border: 1.5px solid var(--line);
  border-radius: 12px;
  background: var(--cream);
  transition: border-color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;
  width: 100%;
}

.field input:focus,
.field select:focus,
.field textarea:focus {
  outline: none;
  border-color: var(--accent);
  background: #fff;
  box-shadow: 0 0 0 4px rgba(201, 111, 58, 0.14);
}

.field textarea {
  resize: vertical;
}

.time-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
}

.time-grid button {
  padding: 9px 0;
  border-radius: 10px;
  border: 1.5px solid var(--line);
  font-size: 13.5px;
  color: var(--ink-soft);
  transition: all 0.22s ease;
}

.time-grid button:hover {
  border-color: var(--accent);
  color: var(--accent-dark);
}

.time-grid button.active {
  background: var(--green);
  border-color: var(--green);
  color: #fff;
}

.submit-btn {
  width: 100%;
  margin-top: 6px;
}

.form-tip {
  margin-top: 14px;
  text-align: center;
  font-size: 12.5px;
  color: var(--ink-soft);
}

.booking-success {
  text-align: center;
  padding: 30px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.success-icon {
  width: 68px;
  height: 68px;
  border-radius: 50%;
  background: var(--green);
  color: #fff;
  font-size: 30px;
  display: grid;
  place-items: center;
  box-shadow: 0 14px 30px rgba(31, 61, 43, 0.35);
}

.booking-success h3 {
  font-family: var(--font-serif);
  font-size: 24px;
  letter-spacing: 0.08em;
}

.booking-success p {
  color: var(--ink-soft);
  font-size: 14.5px;
  line-height: 2;
  max-width: 380px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(12px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

@media (max-width: 900px) {
  .reservation-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  .reservation-card {
    padding: 26px 20px;
  }
  .field-row {
    grid-template-columns: 1fr;
    gap: 0;
  }
  .time-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>