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
            let timePassed = Date.now() - start

            if (timePassed > duration) timePassed = duration

            const progress = +(timePassed / duration).toFixed(2)

            draw(progress * 100)

            if (timePassed < duration) {
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

export const getClickPosition = e => {
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