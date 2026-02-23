import { ProCTA } from "./ProCTA";

interface ProGateProps {
  children: React.ReactNode;
  isUserPro: boolean;
}

export function ProGate({ children, isUserPro }: ProGateProps) {
  if (isUserPro) {
    return <>{children}</>;
  }

  return (
    <div className="relative">
      <div className="select-none blur-sm pointer-events-none">{children}</div>
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="max-w-md rounded-lg bg-white p-6 shadow-xl">
          <h3 className="text-lg font-semibold text-primary">Pro feature</h3>
          <p className="mt-2 text-sm text-text-secondary">
            Unlock this and all Pro tools — negotiation coach, progression roadmap, CV reviewer and interview prep.
          </p>
          <ProCTA variant="mid-page" />
        </div>
      </div>
    </div>
  );
}
