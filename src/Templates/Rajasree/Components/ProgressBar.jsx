import { useEffect ,useState} from "react";
import "./progressbar.css"
const ProgressBar = ({size=100, strokeWidth=10, circleOneStroke="gray", circleTwoStroke="white", progress, text,onChange}) => {
    const [offset,setOffset] = useState(0)
    const center = size / 2;
    const radius = size / 2 - strokeWidth / 2
    const circumference = 2 * Math.PI * radius;
    useEffect(()=>{
        const progressOffset = ((100 - progress)/100)*circumference;
        setOffset(progressOffset);
    },[progress,circumference,setOffset]);
    return (
        <div>
            <svg className="circular_chart"
              width={size}
              height={size}
            
            >
                <circle className="circular_bg"
                    stroke={circleOneStroke}
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={strokeWidth}
                ></circle >
                <circle
                className="circler1"
                stroke={circleTwoStroke}
                cx={center}
                cy={center}
                r={radius}
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={offset}></circle>
                <text className="percentager1"
                    x={center}
                    y={center}
                >
                    {progress}%
                          
                </text>
            </svg>
        </div>
    )
}

export default ProgressBar
