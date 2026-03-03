import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      toast.success(
        "User successfully created! please verify the new account from the user email address",
      );
    },
    onError: (err) => toast.error(err.message),
  });

  return { signup, isPending };
}
