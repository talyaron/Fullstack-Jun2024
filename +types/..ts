// React Router generated types for route:
// ../../../../../../../../

import type * as T from "react-router/route-module"

import type { Info as Parent0 } from "../06-React/02-router/homePuzzle/Eli/.react-router/types/app/+types/root.js"
import type { Info as Parent1 } from "../06-React/02-router/homePuzzle/Eli/.react-router/types/app/routes/+types/chat.js"

type Module = typeof import("../..js")

export type Info = {
  parents: [Parent0, Parent1],
  id: "/"
  file: "../../../../../../../../"
  path: "undefined"
  params: {"chatName": string} & { [key: string]: string | undefined }
  module: Module
  loaderData: T.CreateLoaderData<Module>
  actionData: T.CreateActionData<Module>
}

export namespace Route {
  export type LinkDescriptors = T.LinkDescriptors
  export type LinksFunction = () => LinkDescriptors

  export type MetaArgs = T.CreateMetaArgs<Info>
  export type MetaDescriptors = T.MetaDescriptors
  export type MetaFunction = (args: MetaArgs) => MetaDescriptors

  export type HeadersArgs = T.HeadersArgs
  export type HeadersFunction = (args: HeadersArgs) => Headers | HeadersInit

  export type LoaderArgs = T.CreateServerLoaderArgs<Info>
  export type ClientLoaderArgs = T.CreateClientLoaderArgs<Info>
  export type ActionArgs = T.CreateServerActionArgs<Info>
  export type ClientActionArgs = T.CreateClientActionArgs<Info>

  export type HydrateFallbackProps = T.CreateHydrateFallbackProps<Info>
  export type ComponentProps = T.CreateComponentProps<Info>
  export type ErrorBoundaryProps = T.CreateErrorBoundaryProps<Info>
}