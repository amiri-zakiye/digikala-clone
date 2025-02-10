"use client"
import { Fragment } from "react"
import { formatTime } from "@/utils/formatters"
import { toFarsiNumber } from "@/utils/formatters"
import useCountDown from "@/app/(home)/hooks/countdown"

const IncredibleOfferCountDown = ({timer}: {timer:number}) => {
    const countDown = useCountDown(timer)
    const { hours,minutes,seconds} = formatTime(countDown)
    return (
        <div className="flex gap-[2px] items-center right-0 h-6">
            {
                [seconds,minutes,hours].map((item, index) => {
                    return (
                        <Fragment key={index === 0 ? "hour" : index === 1 ? "minute" : "second"}>
                            <div
                                className="flex flex-col items-center justify-center bg-white w-[26px] h-[26px] rounded-sm">
                                <div
                                    className="flex justify-center items-center text-subtitle-strong text-neutral-800 text-center w-[20px] h-[20px]">{toFarsiNumber(item)}
                                </div>
                            </div>
                            {
                                index < 2 && <div className="text-subtitle-strong text-white w-1">:</div>
                            }
                        </Fragment>
                    )
                })
            }
        </div>
    )
}

export default IncredibleOfferCountDown;