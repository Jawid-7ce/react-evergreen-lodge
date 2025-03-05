import { QueryClient, useMutation } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useEditCabin() {
  const { mutate: editCabin, isLoading: isEditing } = useMutation({
    mutationFn: ({ newCabindata, id }) => createEditCabin(newCabindata, id),
    onSuccess: () => {
      toast("Cabin successfully edited!");
      QueryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => toast.error("Hello", err.message),
  });
  return { isEditing, editCabin };
}
