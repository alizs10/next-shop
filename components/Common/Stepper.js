import CheckBadgeIcon from "../ui/icons/CheckBadgeIcon";

function Stepper({steps = []}) {

    let allSteps = steps.length;
    let passedSteps = 0;
    steps.forEach(step => {
        if (step.isPassed) {
            passedSteps++;
        }
    })
    let stepUnit = 100 / (allSteps - 1);
    let progress = passedSteps === allSteps ? 100 : passedSteps * stepUnit;

    return (
        <div className="relative w-full h-2 bg-gray-500">
            <div style={{ width: `${progress}%` }} className="absolute top-0 lef-0 h-full bg-red-500"></div>
            <div className="absolute z-10 inset-0 translate-y-1/2 flex justify-between">
                
                {steps.length > 0 && steps.map((step, index) => (
                    <div key={index} className="relative w-5">
                        <div className={`absolute top-0 left-0 flex justify-center items-center text-white font-bold text-md w-10 -translate-y-1/2 aspect-square ${step.isPassed ? 'bg-red-500' : 'bg-gray-500'} rounded-full`}>
                            {step.isPassed ? (<CheckBadgeIcon />) : (
                                <span>{index + 1}</span>
                            )}
                        </div>
                        <span className="absolute top-7 left-full -translate-x-1/2  text-white whitespace-nowrap">
                            {step.name}
                        </span>
                    </div>

                ))}
            </div>
        </div>
    );
}

export default Stepper;