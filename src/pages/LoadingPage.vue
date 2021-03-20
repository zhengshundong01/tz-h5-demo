<template>
  <div class="loading-page-component">
    <q-card>
      <q-tabs v-model="tab" dense class="text-grey" active-color="primary" indicator-color="primary" align="justify" narrow-indicator>
        <q-tab name="pink-boll" label="粉红跳球版" />
        <q-tab name="cycle" label="同心圆" />
        <q-tab name="change" label="三角变换" />
        <q-tab name="text" label="文字模糊" />
        <q-tab name="fangkuai" label="方块左右" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="pink-boll">
          <div class='loading-page-1 panel'>
            <div class="loading-wrap">
              <div class="loading-card">
                <div class='ball'></div>
                <div class='loading-board board1'>
                </div>
                <div class='loading-board board2'>
                </div>
                <div class='loading-board board3'>
                </div>
              </div>
              <p class='loading-text'>Loading...</p>
            </div>
          </div>
        </q-tab-panel>

        <q-tab-panel name="cycle">
          <div class="loading-page-2 panel">
            <div class="rings">
              <div class="ring ring1">
                <div class="ring ring2">
                  <div class="ring ring3">
                    <div class="ring ring4"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="choose-theme">
              <div class="theme theme1" @click="chooseTheme('#ffad00')"></div>
              <div class="theme theme2" @click="chooseTheme('#01c5c4')"></div>
              <div class="theme theme3" @click="chooseTheme('#ffa5a5')"></div>
              <div class="theme theme4" @click="chooseTheme('#d789d7')"></div>
              <div class="theme theme5" @click="chooseTheme('#f09ae9')"></div>
              <div class="theme theme6" @click="chooseTheme('#e7305b')"></div>
              <div class="theme theme7" @click="chooseTheme('#303960')"></div>
            </div>
          </div>

        </q-tab-panel>

        <q-tab-panel name="change">
          <div class="loading-page-3 hunter panel">
            <div class="circle c1"></div>
            <div class="circle c2"></div>
            <div class="circle c3"></div>
            <div class="circle c4"></div>
            <div class="shape_group">
              <div class="shape s1"></div>
              <div class="shape s2"></div>
              <div class="shape s3"></div>
              <div class="shape s4"></div>
              <div class="shape s5"></div>
              <div class="shape s6"></div>
            </div>
            <div class="line_group g1">
              <div class="line l1"></div>
              <div class="line l2"></div>
              <div class="line l3"></div>
              <div class="line l4"></div>
            </div>
            <div class="line_group g2">
              <div class="line l1"></div>
              <div class="line l2"></div>
              <div class="line l3"></div>
              <div class="line l4"></div>
            </div>
            <div class="line_group g3">
              <div class="line l1"></div>
              <div class="line l2"></div>
              <div class="line l3"></div>
              <div class="line l4"></div>
            </div>
          </div>
        </q-tab-panel>

        <q-tab-panel name="text">
          <div class="loading-page-4 panel">
            <div class="loading-text">
              <span class="loading-text-words">L</span>
              <span class="loading-text-words">O</span>
              <span class="loading-text-words">A</span>
              <span class="loading-text-words">D</span>
              <span class="loading-text-words">I</span>
              <span class="loading-text-words">N</span>
              <span class="loading-text-words">G</span>
            </div>
          </div>
        </q-tab-panel>

        <q-tab-panel name="fangkuai">
          <div class="loading-page-5 panel">
            <h1>0%</h1>
            <div class="square square--1"></div>
            <div class="square square--2"></div>
            <div class="square square--3"></div>
            <div class="square square--4"></div>
            <div class="square square--5"></div>
            <div class="square square--6"></div>
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tab: 'pink-boll', // page1
      classNames: ['warlock', 'titan', 'hunter', 'default'], // page3
      index: 0 // page3
    }
  },
  methods: {
    // page2
    chooseTheme (color) {
      const root = document.documentElement
      root.style.setProperty('--golden-glow', color)
    },
    // page3
    changeClass () {
      const container = document.querySelector('.loading-page-3')
      if (!container) {
        return
      }
      container.classList.remove(this.classNames[this.index])
      this.index = this.index < this.classNames.length - 1 ? this.index + 1 : 0
      container.classList.add(this.classNames[this.index])
    }
  },
  mounted () {
    this.$nextTick(() => {
      // page3
      setInterval(this.changeClass, 3000)
    })
  }

}
</script>
<style lang="sass">
@import url('../css/LoadingPage/LoadingPage1.sass')
@import url('../css/LoadingPage/LoadingPage2.sass')
@import url('../css/LoadingPage/LoadingPage3.sass')
@import url('../css/LoadingPage/LoadingPage4.sass')
@import url('../css/LoadingPage/LoadingPage5.sass')
.loading-page-component,.panel
  height: 100%
  width: 100%
  min-width: 1280px
  min-height: 860px
</style>
