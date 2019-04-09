export const arrLimit = (arr, limit = 0) => (limit > 0 ? arr.slice(0, limit - 1) : arr)
export const arrOffset = (arr, offset = 0) => (offset > 0 ? arr.slice(offset) : arr)

export const throttle = (func, ms, firstSkip = false) => {
    let isThrottled = firstSkip
    let savedArgs
    let savedThis
    let firstStart = false

    function wrapper(...args) {
        if (!firstStart) {
            if (firstSkip) {
                setTimeout(() => {
                    isThrottled = false

                    if (savedArgs) {
                        wrapper.apply(savedThis, savedArgs)

                        savedArgs = null
                        savedThis = null
                    }
                }, ms)
            }

            firstStart = true
        }

        if (isThrottled) {
            savedArgs = args
            savedThis = this
            return
        }

        func.apply(this, args)

        isThrottled = true

        setTimeout(() => {
            isThrottled = false

            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs)

                savedArgs = null
                savedThis = null
            }
        }, ms)
    }

    return wrapper
}

export const getAnimProgress = (startAt, duration) => {
    let timePassed = Date.now() - startAt

    if (timePassed > duration) timePassed = duration

    const progress = +(timePassed / duration).toFixed(2)

    return progress
}

export const animateEase = (progress) => -progress * (progress - 2)

export const animate = (draw, duration, endCallback, startCallback) => {
    let stared = false

    const start = Date.now()
    let stopKey = false

    const stop = () => {
        stopKey = true
    }

    const stepAnimate = () => {
        if (!stared) {
            stared = true

            if (startCallback) {
                startCallback()
            }
        }

        if (!stopKey) {
            const progress = getAnimProgress(start, duration)

            draw(progress * 100)

            if (progress < 1) {
                requestAnimationFrame(stepAnimate)
            } else {
                stop()

                if (endCallback) {
                    endCallback()
                }
            }
        }
    }

    requestAnimationFrame(stepAnimate)

    return {
        stop,
    }
}

export const getClickPosition = (e, node = false) => {
    let postion = false

    if (e.touches && e.touches.length > 0) {
        postion = {
            x: e.touches[0].pageX,
            y: e.touches[0].pageY,
        }
    } else {
        postion = {
            x: e.pageX,
            y: e.pageY,
        }
    }

    if (node) {
        postion.x -= node.offsetLeft
        postion.y -= node.offsetTop
    }

    return postion
}

export const debounce = (f, ms) => {

    let timer = null;

    return function (...args) {
        const onComplete = () => {
            f.apply(this, args);
            timer = null;
        }

        if (timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(onComplete, ms);
    };
}

export const abbreviateNumber = (value, from = 1000) => {
    const direction = value >= 0 ? 1 : -1

    value = Math.abs(value)

    let newValue = value

    if (value >= from) {
        const suffixes = ["", "k", "m", "b", "t"]
        const suffixNum = Math.floor(("" + value).length / 3)

        let shortValue = ''

        for (var precision = 2; precision >= 1; precision =-1 ) {
            shortValue = parseFloat(
                (suffixNum != 0 ? (value / Math.pow(1000, suffixNum)) : value).toPrecision(precision)
            )

            var dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g, '')

            if (dotLessShortValue.length <= 2) {
                break
            }
        }

        if (shortValue % 1 != 0) shortValue = shortValue.toFixed(1)

        newValue = shortValue + suffixes[suffixNum]
    }

    if (direction === -1) {
        return `-${newValue}`
    }

    return newValue
}

const formatMoney = (n, c, d, t) => {
    c = isNaN(c = Math.abs(c)) ? 2 : c
    d = d == undefined ? "." : d
    t = t == undefined ? "," : t

    var s = n < 0 ? "-" : "",
        i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
        j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
}

export const numberFormat = value => `${formatMoney(parseFloat(value), 0, '.', ' ')}`.replace('.00', '')

export const componentToHex = (c) => {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

export const rgbToHex = (r, g, b) => {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export const hexToRgb = (hex) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

export const loadFile = (url) => new Promise(ok => {
    // read text from URL location
    var request = new XMLHttpRequest()
    request.open('GET', url, true)
    request.send(null)
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            var type = request.getResponseHeader('Content-Type')
            
            ok(request.responseText, type, request)
        }
    }
})