import RotatingText from "./RotatingText";

export default function CenteredRotatingText() {
  return (
    <div className="flex mt-10 justify-center items-center h-[calc(100vh-50%)]">
      <div className="text-4xl sm:text-5xl md:text-6xl font-semibold flex items-center gap-2 sm:gap-3 md:gap-4">
        <span className="text-[#2a2e4e]">Let's</span>
        <RotatingText
          texts={["Innovate", "Learn", "Grow", "Achieve"]}
          mainClassName="px-3 sm:px-4 md:px-5 bg-[#Dcd6f7] text-[#2a2e4e] py-2 sm:py-3 md:py-4 justify-center rounded-lg"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.08}
          splitLevelClassName="overflow-hidden pb-1 sm:pb-1.5 md:pb-2"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={4000} // Smooth rotation timing
        />
      </div>
    </div>
  );
}
