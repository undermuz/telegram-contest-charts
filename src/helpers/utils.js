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