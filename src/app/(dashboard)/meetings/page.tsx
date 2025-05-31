import { Suspense } from "react";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient, trpc } from "@/trpc/server"
import { ErrorState } from "@/components/error-state";
import { LoadingState } from "@/components/loading-state";
import { MeetingsView } from "@/modules/meetings/ui/views/meetings-view"
import { ErrorBoundary } from "react-error-boundary";
import { MeetingsListHeader } from "@/modules/meetings/ui/components/meetings-list-header";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const Page = async () => {

  const session = await auth.api.getSession({
        headers: await headers(),
      })
      if(!session){
        redirect("/sign-in")
      }

  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(
    trpc.meetings.getMany.queryOptions({})
  )
  return (
    <>
    <MeetingsListHeader/>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<MeetingsViewLoading/>}>
          <ErrorBoundary fallback={<MeetingsViewError/>}>
            <MeetingsView/>
          </ErrorBoundary>
        </Suspense>
      </HydrationBoundary>
    </>
  )
}

export default Page


export const MeetingsViewLoading = () => {
  return (
    <LoadingState
      title="Loading Agents"
      description="This may take a fews econds"
    />
  )
}

export const MeetingsViewError = () => {
  return (
    <ErrorState
      title="Error Loading Agents"
      description="Something went wrong"
    />
  )
}