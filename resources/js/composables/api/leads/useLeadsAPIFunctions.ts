
import type {  AxiosRequestConfig } from "axios";

import { RegisterSchema } from "@/app/schema-validations";
import { unwrapData } from "@/app/helpers";
import { axiosBase } from "@/app/plugins";
import { LeadInterface } from "@/app/types";

/**
 * Composable for all CRUD operations on leads.
 * Each method uses axiosPrivate and unwrapData for consistent API interaction.
 */

export function useLeadAPIFunctions() {

	// ✅ POST /leads
	const createLead = async (
		payload: RegisterSchema,
		requestConfig?: AxiosRequestConfig<RegisterSchema>,
	) => {
		const res = await axiosBase.post('/register-to-learn', payload, {
            ...requestConfig,
            headers: { 'Content-Type': 'multipart/form-data' },
        });
		return unwrapData<LeadInterface>(res.data);
	};


	return {
		createLead,
	};
}
