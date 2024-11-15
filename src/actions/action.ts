import pb from "@/lib/pocketbase";
import { User } from "@/types/types";
import { useQuery } from "@tanstack/react-query";

export const useUser = () => {
  return useQuery({
    queryFn: () => {
      const user = pb.authStore.model;
      return user as User;
    },
    staleTime: 0,
    queryKey: ["Users"],
  });
};

export const useApplications = () => {
  return useQuery({
    queryFn: async () => {
      const application = await pb.collection("application_form").getList();
      return application;
    },
    staleTime: 0,
    queryKey: ["AllApplications"],
  });
};

export const useAnouncement = () => {
  return useQuery({
    queryFn: async () => {
      const anouncement = await pb.collection("anouncement").getList(1);
      return anouncement;
    },
    staleTime: 0,
    queryKey: ["AllAnouncement"],
  });
};

export const useContact = () => {
  return useQuery({
    queryFn: async () => {
      const contact = await pb.collection("contacts").getList();
      return contact;
    },
    queryKey: ["AllContact"],
  });
};
