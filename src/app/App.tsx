import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { router } from "../shared/config/router";
import Layout from "../widgets/Layout/ui/Layout";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Suspense fallback={<div>Загрузка...</div>}>
          <RouterProvider router={router} />
        </Suspense>
      </Layout>
 
    </QueryClientProvider>
  );
};

export default App;
