const isColor = function (value) {
  const colorReg = /^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/
  const rgbaReg = /^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/
  const rgbReg = /^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/
  return colorReg.test(value) || rgbaReg.test(value) || rgbReg.test(value)
}

const isLock = (function () {
  const fn = function (e) {
    e.preventDefault()
    e.stopPropagation()
  }
  let islock = false
  return {
    lock (el) {
      if (islock) return
      islock = true;
      (el || document).addEventListener('touchmove', fn)
    },
    unlock (el) {
      islock = false;
      (el || document).removeEventListener('touchmove', fn)
    }
  }
})()

export { isColor, isLock }
