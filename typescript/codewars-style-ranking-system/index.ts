// TODO: create the User class/object
// it must support rank, progress and the incProgress(rank) method
class User {
    // private _rank: number
    // private _progress: number
    public allTimePoints: number
    constructor() {
        this.allTimePoints = 0
    }
    get progress() {
        return this.allTimePoints % 100
    }
    get rank() {
        const progress100Divisor = Math.floor(this.allTimePoints / 100)
        if (progress100Divisor <= 7) return -8 + progress100Divisor
        else return Math.min(-7 + progress100Divisor, 8)
    }
    set rank(value: number) {
        this.allTimePoints += 100 * value
        if (this.allTimePoints < 0) {
            throw new Error()
        }
    }


    incProgress(level: number) {
        //Only accepts levels within the range [-8,-1]^[1,8].
        if (level < -8 || level > 8 || level === 0) throw new Error()

        let adjustForZero = 0
        if (level * this.rank < 0) adjustForZero = (this.rank > 0) ? -1 : 1
        let levelRankDifference = level - this.rank + adjustForZero

        //For level 2 or more below current rank, there is no reward.
        if (levelRankDifference <= -2) return

        else if (levelRankDifference === -1) this.allTimePoints += 1
        else if (levelRankDifference === 0) this.allTimePoints += 3
        else this.allTimePoints += 10 * levelRankDifference * levelRankDifference
    }
}
