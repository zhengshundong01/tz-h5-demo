<template>
  <div>
    <section id="section01" class="anchor anchor-animation-1">
      <h1>anchorType: 1</h1>
      <a href="#section02"><span></span>Scroll</a>
    </section>
    <section id="section02" class="anchor anchor-animation-2">
      <h1>anchorType: 2</h1>
      <a href="#section03"><span></span>Scroll</a>
    </section>
    <section id="section03" class="anchor anchor-animation-3">
      <h1>anchorType: 3</h1>
      <a href="#section04"><span></span>Scroll</a>
    </section>
    <section id="section04" class="anchor anchor-animation-4">
      <h1>anchorType: 4</h1>
      <a href="#section05"><span></span>Scroll</a>
    </section>
    <section id="section05" class="anchor  anchor-animation-5">
      <h1>anchorType: 5</h1>
      <a href="#section06"><span></span>Scroll</a>
    </section>
    <section id="section06" class="anchor anchor-animation-6">
      <h1>anchorType: 6</h1>
      <a href="#section07"><span></span>Scroll</a>
    </section>
    <section id="section07" class="anchor anchor-animation-7">
      <h1>anchorType: 7</h1>
      <a href="#section08"><span></span><span></span><span></span>Scroll</a>
    </section>
    <section id="section08" class="anchor anchor-animation-8">
      <h1>anchorType: 8</h1>
      <a href="#section09"><span></span>Scroll</a>
    </section>
    <section id="section09" class="anchor anchor-animation-9">
      <h1>anchorType: 9</h1>
      <a href="#section10"><span></span>Scroll</a>
    </section>
    <section id="section10" class="anchor anchor-animation-10">
      <h1>anchorType: 10</h1>
      <a href="#thanks"><span></span>Scroll</a>
    </section>
    <section id="thanks">
      <div>
        <h2>Thanks!</h2>
        <p><a href="https://www.nxworld.net/css-scroll-down-button.html" target="_parent">lt Back To Article</a></p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AnchorItem'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import url(https://fonts.googleapis.com/css?family=Josefin+Sans:300,400);
</style>
<style lang="sass">
section
  position: relative
  width: 100%
  height: 300px
section::after
  position: absolute
  bottom: 0
  left: 0
  content: ''
  width: 100%
  height: 80%
  background: -webkit-linear-gradient(top,rgba(0, 0, 0, 0) 0,rgba(0, 0, 0, 0.8) 80%,rgba(0, 0, 0, 0.8) 100%)
  background: linear-gradient(to bottom,rgba(0, 0, 0, 0) 0,rgba(0, 0, 0, 0.8) 80%,rgba(0, 0, 0, 0.8) 100%)

section h1
  position: absolute
  top: 10%
  left: 50%
  z-index: 2
  -webkit-transform: translate(-50%, -50%)
  transform: translate(-50%, -50%)
  color: #fff
  font: normal 300 64px/1 'Josefin Sans', sans-serif
  text-align: center
  white-space: nowrap

#section01
  background: url(/picture/325105.jpg) center center / cover no-repeat

#section02
  background: url(/picture/1000158.jpg) center center / cover no-repeat

#section03
  background: url(/picture/2004378.jpg) center center / cover no-repeat

#section04
  background: url(/picture/2009005.jpg) center center / cover no-repeat

#section05
  background: url(/picture/2022431.jpg) center center / cover no-repeat

#section06
  background: url(/picture/2029582.jpg) center center / cover no-repeat

#section07
  background: url(/picture/2034045.jpg) center center / cover no-repeat

#section08
  background: url(/picture/2037482.jpg) center center / cover no-repeat

#section09
  background: url(/picture/2039301.jpg) center center / cover no-repeat

#section10
  background: url(/picture/2041075.jpg) center center / cover no-repeat

#thanks
  background-color: #fff

#thanks::after
  content: none

#thanks div
  position: absolute
  top: 50%
  left: 50%
  z-index: 2
  -webkit-transform: translate(-50%, -50%)
  transform: translate(-50%, -50%)
  text-align: center

#thanks h2
  margin-bottom: 60px
  color: #333
  font: normal 300 64px/1 'Josefin Sans', sans-serif
  text-align: center
  white-space: nowrap

#thanks p
  color: #333
  font: normal 400 20px/1 'Josefin Sans', sans-serif

#thanks p a
  color: #333
  text-decoration: none
  transition: color 0.3s

#thanks p a:hover
  color: #888

.anchor a
  position: absolute
  bottom: 20px
  left: 50%
  z-index: 2
  display: inline-block
  transform: translate(0, -50%)
  color: #fff
  font: normal 400 20px/1 'Josefin Sans', sans-serif
  letter-spacing: 0.1em
  text-decoration: none
  transition: opacity 0.3s
  &:hover
    opacity: 0.5

.anchor-animation-1 a
  padding-top: 60px
  span
    position: absolute
    top: 0
    left: 50%
    width: 24px
    height: 24px
    margin-left: -12px
    border-left: 1px solid #fff
    border-bottom: 1px solid #fff
    transform: rotate(-45deg)
    box-sizing: border-box

.anchor-animation-2 a
  padding-top: 60px
  span
    position: absolute
    top: 0
    left: 50%
    width: 46px
    height: 46px
    margin-left: -23px
    border: 1px solid #fff
    border-radius: 100%
    box-sizing: border-box
    &::after
      position: absolute
      top: 50%
      left: 50%
      content: ''
      width: 16px
      height: 16px
      margin: -12px 0 0 -8px
      border-left: 1px solid #fff
      border-bottom: 1px solid #fff
      transform: rotate(-45deg)
      box-sizing: border-box

.anchor-animation-3 a
  padding-top: 60px
  span
    position: absolute
    top: 0
    left: 50%
    width: 46px
    height: 46px
    margin-left: -23px
    border: 1px solid #fff
    border-radius: 100%
    box-sizing: border-box
    &::after
      position: absolute
      top: 50%
      left: 50%
      content: ''
      width: 16px
      height: 16px
      margin: -12px 0 0 -8px
      border-left: 1px solid #fff
      border-bottom: 1px solid #fff
      transform: rotate(-45deg)
      box-sizing: border-box

    &::before
      position: absolute
      top: 0
      left: 0
      z-index: -1
      content: ''
      width: 44px
      height: 44px
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.1)
      border-radius: 100%
      opacity: 0
      animation: anchor-animation-3 3s infinite
      box-sizing: border-box

#section03 a span::after
  position: absolute
  top: 50%
  left: 50%
  content: ''
  width: 16px
  height: 16px
  margin: -12px 0 0 -8px
  border-left: 1px solid #fff
  border-bottom: 1px solid #fff
  transform: rotate(-45deg)
  box-sizing: border-box

@keyframes anchor-animation-3
  0%
    opacity: 0

  30%
    opacity: 1

  60%
    box-shadow: 0 0 0 60px rgba(255, 255, 255, 0.1)
    opacity: 0

  100%
    opacity: 0

.anchor-animation-4 a
  padding-top: 60px
  span
    position: absolute
    top: 0
    left: 50%
    width: 24px
    height: 24px
    margin-left: -12px
    border-left: 1px solid #fff
    border-bottom: 1px solid #fff
    transform: rotate(-45deg)
    animation: anchor-animation-4 2s infinite
    box-sizing: border-box

@keyframes anchor-animation-4
  0%
    transform: rotate(-45deg) translate(0, 0)

  20%
    transform: rotate(-45deg) translate(-10px, 10px)

  40%
    transform: rotate(-45deg) translate(0, 0)

.anchor-animation-5 a
  padding-top: 70px
  span
    position: absolute
    top: 0
    left: 50%
    width: 24px
    height: 24px
    margin-left: -12px
    border-left: 1px solid #fff
    border-bottom: 1px solid #fff
    transform: rotate(-45deg)
    animation: anchor-animation-5 1.5s infinite
    box-sizing: border-box

@keyframes anchor-animation-5
  0%
    transform: rotate(-45deg) translate(0, 0)
    opacity: 0

  50%
    opacity: 1

  100%
    transform: rotate(-45deg) translate(-20px, 20px)
    opacity: 0

.anchor-animation-6 a
  padding-top: 70px
  span
    position: absolute
    top: 0
    left: 50%
    width: 24px
    height: 24px
    margin-left: -12px
    border-left: 1px solid #fff
    border-bottom: 1px solid #fff
    transform: rotateZ(-45deg)
    animation: anchor-animation-6 1.5s infinite
    box-sizing: border-box

@keyframes anchor-animation-6
  0%
    transform: rotateY(0) rotateZ(-45deg) translate(0, 0)
    opacity: 0

  50%
    opacity: 1

  100%
    transform: rotateY(720deg) rotateZ(-45deg) translate(-20px, 20px)
    opacity: 0

.anchor-animation-7 a
  padding-top: 80px
  span
    position: absolute
    top: 0
    left: 50%
    width: 24px
    height: 24px
    margin-left: -12px
    border-left: 1px solid #fff
    border-bottom: 1px solid #fff
    transform: rotate(-45deg)
    animation: anchor-animation-7 2s infinite
    opacity: 0
    box-sizing: border-box
    &:nth-of-type(1)
      animation-delay: 0s

    &:nth-of-type(2)
      top: 16px
      animation-delay: 0.15s

    &:nth-of-type(3)
      top: 32px
      animation-delay: 0.3s

@keyframes anchor-animation-7
  0%
    opacity: 0

  50%
    opacity: 1

  100%
    opacity: 0

.anchor-animation-8 a
  padding-top: 60px
  span
    position: absolute
    top: 0
    left: 50%
    width: 30px
    height: 50px
    margin-left: -15px
    border: 2px solid #fff
    border-radius: 50px
    box-sizing: border-box
    &::before
      position: absolute
      top: 10px
      left: 50%
      content: ''
      width: 6px
      height: 6px
      margin-left: -3px
      background-color: #fff
      border-radius: 100%
      box-sizing: border-box

.anchor-animation-9 a
  padding-top: 80px
  span
    position: absolute
    top: 0
    left: 50%
    width: 30px
    height: 50px
    margin-left: -15px
    border: 2px solid #fff
    border-radius: 50px
    box-sizing: border-box
    &::before
      position: absolute
      top: 10px
      left: 50%
      content: ''
      width: 6px
      height: 6px
      margin-left: -3px
      background-color: #fff
      border-radius: 100%
      box-sizing: border-box

    &::after
      position: absolute
      bottom: -18px
      left: 50%
      width: 18px
      height: 18px
      content: ''
      margin-left: -9px
      border-left: 1px solid #fff
      border-bottom: 1px solid #fff
      transform: rotate(-45deg)
      box-sizing: border-box

.anchor-animation-10 a
  padding-top: 60px
  span
    position: absolute
    top: 0
    left: 50%
    width: 30px
    height: 50px
    margin-left: -15px
    border: 2px solid #fff
    border-radius: 50px
    box-sizing: border-box

  &::before
    position: absolute
    top: 10px
    left: 50%
    content: ''
    width: 6px
    height: 6px
    margin-left: -3px
    background-color: #fff
    border-radius: 100%
    animation: anchor-animation-10 2s infinite
    box-sizing: border-box

@keyframes anchor-animation-10
  0%
    transform: translate(0, 0)
    opacity: 0

  40%
    opacity: 1

  80%
    transform: translate(0, 20px)
    opacity: 0

  100%
    opacity: 0
</style>
