import { range, sum, isArray, intersection } from "lodash/fp"
import combinations from "combinations"

const kakuroSums = () => combinations(range(1, 10))

export const printSums = sums => sums.map(s => s.join(""))

export default ({ length, total, includes = [], excludes = [] } = {}) => {
    let ret = kakuroSums()

    // filter by length
    if (length) {
        ret = ret.filter(s => s.length === length)
    }

    // filter by sum
    if (total) {
        ret = ret.filter(s => sum(s) === total)
    }

    // filter by includes
    if (includes) {
        if (!isArray(includes)) {
            includes = [includes]
        }

        ret = ret.filter(s => intersection(s, includes).length === includes.length)
    }

    // filter by excludes
    if (excludes) {
        if (!isArray(excludes)) {
            excludes = [excludes]
        }

        ret = ret.filter(s => intersection(s, excludes).length === 0)
    }

    return ret
}
