import {  useMutation, useQueryClient } from "@tanstack/vue-query";
import { toast } from "vue-sonner";
import { useLeadAPIFunctions } from "./useLeadsAPIFunctions";
import { RegisterSchema } from "@/app/schema-validations";

export const LEAD_TAG = ["leads"];

export function useLeadAPI() {
	const queryClient = useQueryClient();
	const {
		createLead,

	} = useLeadAPIFunctions();

	// CREATE
	const createLeadMutation = useMutation({
		mutationFn: (newLead: RegisterSchema) => createLead(newLead),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: LEAD_TAG });
			toast.success("Success", {
				description: "Registration completed successfully",
			});
		},
		onError: (_error: any) => {
			toast.error("Registration Failed", {
				description: _error?.response?.data?.message,
			});
		},
	});



	return {
		createLeadMutation,
	};
}
