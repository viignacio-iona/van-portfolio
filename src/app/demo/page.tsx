import { FaultyTerminal } from '@/components/Backgrounds';

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-base text-white">
      <div className="relative h-screen">
        {/* Faulty Terminal Background */}
        <FaultyTerminal />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-4 drop-shadow-2xl">
              Faulty Terminal Demo
            </h1>
            <p className="text-xl text-accent drop-shadow-lg">
              Move your mouse around to see the interactive effects!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
