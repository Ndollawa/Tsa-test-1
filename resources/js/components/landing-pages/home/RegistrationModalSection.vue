<template>
    <section
        class="relative h-[60vh] min-[24rem]:h-[50vh] sm:h-[75vh] md:h-[60vh] lg:h-[70vh] xl:h-[85vh] 2xl:h-[100vh] min-[100rem]:h-[80vh] min-[120rem]:h-[70vh]  overflow-hidden bg-[url('/assets/images/hero-bg-face.png')] bg-[size:80%,450px] bg-[position:200px_top] bg-no-repeat px-5 md:bg-[url('/assets/images/hero-bg-face.png'),url('/assets/images/feather.png')] md:bg-[size:32%,460px] md:bg-[position:right_top,0px_280px]"
    >
        <div
            className="sm:hidden absolute inset-0 top-0 bg-gradient-to-r from-transparent via-background/50 to-background/70"
        />
        <div
            class="container mx-auto flex h-full items-center justify-center"
        >
            <!-- LEFT CONTENT -->
            <div class="relative grid w-full grid-cols-1 py-auto md:pl-20">
                <div
                    v-motion
                    v-motion-visible="{ once: false }"
                    :initial="{ opacity: 0, x: -120 }"
                    :visible="{
                        opacity: 1,
                        x: 0,
                        transition: {
                            type: 'spring',
                            stiffness: 80,
                            duration: 0.4,
                            delay: 0,
                        },
                    }"
                    class=""
                >
                    <h1
                        class="mb-5 max-w-xl text-3xl leading-tight font-semibold tracking-widest text-primary md:text-5xl"
                    >
                        COLLAGEN IS <br />
                        THE FOUNTAIN <br />
                        OF YOUTH
                    </h1>
                </div>
                <div
                    v-motion
                    v-motion-visible="{ once: false }"
                    :initial="{ opacity: 0, x: -120 }"
                    :visible="{
                        opacity: 1,
                        x: 0,
                        transition: {
                            type: 'spring',
                            stiffness: 60,
                            duration: 0.6,
                            delay: 0.12,
                        },
                    }"
                >
                    <p
                        class="mb-20 text-base tracking-wide text-muted-foreground md:text-xl"
                    >
                        <VueTyping
                            :sentences="['WHAT’S YOUR INFLUENCE?']"
                            :minTypeSpeed="50"
                            :maxTypeSpeed="100"
                            :eraseSpeed="100"
                            :eraseDelay="1500"
                            :writeDelay="0"
                            caret=" |"
                            :loop="true"
                        />
                    </p>
                </div>
                <!-- CONNECT BUTTON -->
                <div
                    v-motion
                    v-motion-visible="{ once: false }"
                    :initial="{ opacity: 0, x: -120 }"
                    :visible="{
                        opacity: 1,
                        x: 0,
                        transition: {
                            type: 'spring',
                            stiffness: 40,
                            duration: 0.8,
                            delay: 0.24,
                        },
                    }"
                >
                    <ConnectWithBenBtn />
                </div>
            </div>
            <div
                v-if="open"
                class="fixed inset-0 z-40 flex items-center justify-center"
            >
                <!-- overlay -->
                <div
                    v-motion
                    :initial="{ opacity: 0 }"
                    :enter="{ opacity: 1, transition: { duration: 250 } }"
                    class="absolute inset-0 bg-black/90"
                    @click="$emit('close')"
                />

                <!-- modal -->
                <div
                    v-motion
                    v-motion-visible="{ once: false }"
                    :initial="{ opacity: 0, y: 30 }"
                    :enter="{
                        opacity: 1,
                        y: 0,
                        transition: { type: 'spring', stiffness: 70 },
                    }"
                    class="grid-colds-1 relative z-50 m-2 grid w-[760px] max-w-[95%] overflow-hidden rounded-xs bg-white shadow-2xl md:grid-cols-2"
                >
                    <!-- CLOSE -->
                    <button
                        class="absolute top-5 right-5 cursor-pointer text-muted-foreground"
                        @click="close"
                    >
                        <component :is="X" class="size-4" />
                    </button>

                    <!-- IMAGE -->
                    <img
                        src="/assets/images/form-bg.png"
                        class="hidden aspect-auto h-full w-full object-cover md:block"
                    />

                    <!-- FORM -->
                    <div
                        class="grid grid-cols-1 place-items-center space-y-4 px-5 py-7 md:px-10 md:py-14"
                    >
                        <h3
                            class="mb-5 text-2xl font-medium text-primary md:text-[1.68rem] md:font-normal"
                        >
                            REGISTER TO LEARN MORE
                        </h3>
                        {{ token }}
                        <form @submit.prevent="submit" class="">
                            <!-- FIRST NAME -->

                            <FormField
                                name="first_name"
                                v-slot="{ field, errorMessage }"
                            >
                                <FormItem
                                    :class="
                                        cn('relative mb-7', {
                                            'mb-2': errorMessage,
                                        })
                                    "
                                >
                                    <FormControl :class="cn(formControlClass)">
                                        <FormLabel :class="cn(formLabelClass)"
                                            >First Name</FormLabel
                                        >
                                        <Input
                                            :class="cn(formInputClass)"
                                            placeholder="First Name"
                                            v-bind="field"
                                        />
                                    </FormControl>
                                    <FormMessage class="text-xs sm:text-sm" />
                                </FormItem>
                            </FormField>

                            <!-- LAST NAME -->
                            <FormField
                                name="last_name"
                                v-slot="{ field, errorMessage }"
                            >
                                <FormItem
                                    :class="
                                        cn('relative mb-7', {
                                            'mb-2': errorMessage,
                                        })
                                    "
                                >
                                    <FormControl :class="formControlClass"
                                        ><FormLabel :class="formLabelClass"
                                            >Last Name</FormLabel
                                        >
                                        <Input
                                            :class="formInputClass"
                                            placeholder="Last Name"
                                            v-bind="field"
                                        />
                                    </FormControl>
                                    <FormMessage class="text-xs sm:text-sm" />
                                </FormItem>
                            </FormField>

                            <!-- PHONE -->
                            <FormField
                                name="phone"
                                v-slot="{ field, errorMessage }"
                            >
                                <FormItem
                                    :class="
                                        cn('relative mb-7', {
                                            'mb-2': errorMessage,
                                        })
                                    "
                                >
                                    <FormControl :class="formControlClass">
                                        <FormLabel :class="formLabelClass"
                                            >Best Phone Number</FormLabel
                                        >
                                        <Input
                                            :class="formInputClass"
                                            placeholder="Best Phone Number"
                                            v-bind="field"
                                        />
                                    </FormControl>
                                    <FormMessage class="text-xs sm:text-sm" />
                                </FormItem>
                            </FormField>

                            <!-- EMAIL -->
                            <FormField
                                name="email"
                                v-slot="{ field, errorMessage }"
                            >
                                <FormItem
                                    :class="
                                        cn('relative mb-7', {
                                            'mb-7': errorMessage,
                                        })
                                    "
                                >
                                    <FormControl :class="formControlClass">
                                        <FormLabel :class="formLabelClass"
                                            >Email</FormLabel
                                        >
                                        <Input
                                            :class="formInputClass"
                                            placeholder="Email"
                                            v-bind="field"
                                        />
                                    </FormControl>
                                    <FormMessage class="text-xs sm:text-sm" />
                                </FormItem>
                            </FormField>

                            <!-- CAPTCHA -->
                            <FormField name="captcha" v-slot="{ errorMessage }">
                                <!-- <FormLabel>Captcha</FormLabel
                                    > -->
                                <FormItem
                                    :class="
                                        cn('relative mb-7', {
                                            'mb-2': errorMessage,
                                        })
                                    "
                                    class="relative"
                                >
                                    <RecaptchaV2
                                        @widget-id="handleWidgetId"
                                        @load-callback="handleLoadCallback"
                                        size="normal"
                                    />
                                    <FormMessage class="text-xs sm:text-sm">{{
                                        errorMessage
                                    }}</FormMessage>
                                </FormItem>
                            </FormField>

                            <!-- SUBMIT -->
                            <Button
                                variant="default"
                                size="lg"
                                type="submit"
                                class="w-full"
                                :disabled="isPending"
                                :isLoading="isPending"
                            >
                                <span v-if="isPending"
                                    >Submitting </span
                                >
                                <span v-else>Register Now</span>
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { registerSchema } from '@/app/schema-validations';
import { cn } from '@/lib/utils';
import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
import { ref, watch } from 'vue';
// shadcn components
import { Button } from '@/components/ui/button';
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import VueTyping from '@dmncodes/vue-typing';
import { X } from 'lucide-vue-next';
import { RecaptchaV2, useRecaptcha } from 'vue3-recaptcha-v2';
import ConnectWithBenBtn from './ConnectWithBenBtn.vue';
import { toast } from 'vue-sonner';
import { useLeadAPI } from '@/composables/api/leads';

const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
// props & emit
const props = defineProps({ open: Boolean });
const emit = defineEmits(['close']);
// register mutation
// reCAPTCHA
// Form setup

const token = ref('');
const widgetIdRef = ref<number | null>(null);

const { handleGetResponse, handleReset } = useRecaptcha();

// Save widgetID when component initializes captcha widget
const handleWidgetId = (widgetId: number) => {
    widgetIdRef.value = widgetId;
     // read token
};
 const { createLeadMutation } = useLeadAPI()
 const {
  mutate,
  isSuccess,
  isError,
  isPending,
  reset: resetMutation,
} = createLeadMutation;
 const handleLoadCallback = (response: string) => {
    setFieldValue("captcha", response);
};
// Form
const { resetForm, handleSubmit, setFieldValue } = useForm({
    validationSchema: toTypedSchema(registerSchema),
});

const submit = handleSubmit(async (values) => {

    if (!values.captcha) {
        setFieldValue("captcha", "");
        return;
    }
    mutate(values);
});

watch(
  () => isSuccess.value,
  (val) => {
    if (val) {
      resetForm();

      if (widgetIdRef.value !== null) {
        handleReset(widgetIdRef.value);
      }

      close();
      resetMutation(); // safe now
    }
  }
);

watch(
  () => isError.value,
  (err) => {
    if (err) {
      if (widgetIdRef.value !== null) {
        handleReset(widgetIdRef.value);
      }
      resetMutation();
    }
  }
);

function close() {
    emit('close');
}

// form input styles

const formControlClass = 'relative z-0 w-full mb-5 group';
const formLabelClass =
    'absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] hidden  peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto';
const formInputClass =
    'block py-2.5 px-0 w-full text-sm text-heading border-0 border-b-2 border-muted-foreground appearance-none !outline-none !focus:outline-none !focus:ring-0 focus:border-brand peer !bg-transparent rounded-none focus-visible:ring-0 ';
</script>
