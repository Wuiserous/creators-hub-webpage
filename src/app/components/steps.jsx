import React from "react";

const steps = [
  {
    number: 1,
    title: "Let's Talk & Make a Plan",
    desc: "We start by having a chat to understand what you want to achieve, what problems you're facing, and what your goals are. Based on that, we come up with a plan that fits your needs and budget."
  },
  {
    number: 2,
    title: "We Get the Team Ready & Build a Strategy",
    desc: "Once you're happy with the plan, our team jumps in. Within a couple of days, we look into your industry, check out your competitors, and figure out what’s working for others. Then, we create a custom strategy to help your brand grow and assign a team to put it into action."
  },
  {
    number: 3,
    title: "Time to Grow!",
    desc: "Now the real work begins! Our team starts making things happen—sharing updates, creating content, and trying new strategies. We stay with you every step of the way to make sure your business or page grows faster and stronger."
  }
];

const ProcessSteps = () => {
  return (
    <div className="min-h-screen mt-20 flex flex-col items-center justify-center px-4 ">
      <div className="mb-20 px-4 text-center">
        <h2 className="text-3xl font-bold lg:w-[700px] lg:text-6xl lg:text-4xl text-black mt-2">Getting your projects done has never been easier</h2>
        <p className="text-gray-600 mt-1">The Easy Way to Get Projects Done!</p>
      </div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-1 bg-gray-300 rounded-full"></div>

        {/* Steps */}
        <div className="flex flex-col gap-6 ml-8.25">
          {steps.map((step, i) => (
            <div key={i} className="relative block flex items-start gap-4">
              {/* Dot */}
              <div className="w-4 h-4 bg-black rounded-full absolute -left-6 top-2"></div>

              {/* Card */}
              <div className="bg-white rounded-2xl shadow-md p-6 max-w-sm">
                <h4 className="font-bold text-gray-800">Step #{step.number}</h4>
                <h5 className="font-semibold text-black mb-2">{step.title}</h5>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessSteps;
