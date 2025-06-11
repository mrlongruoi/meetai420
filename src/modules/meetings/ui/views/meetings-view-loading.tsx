import { LoadingState } from "@/components/loading-state";
import { ErrorState } from "@/components/error-state";

export const MeetingsViewLoading = () => (
  <LoadingState
    title="Loading Agents"
    description="This may take a few seconds"
  />
);

export const MeetingsViewError = () => (
  <ErrorState
    title="Error Loading Agents"
    description="Something went wrong"
  />
);
