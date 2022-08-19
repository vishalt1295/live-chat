<template>
  <div class="container">
    <Navbar />
    <ChatWindow />
    <NewChatForm />
  </div>
</template>

<script>
// get the current user using the getUser composables
// watch the current user for changes
// redirect the user to the welcome page when they are logged out

import Navbar from "@/components/Navbar.vue";
import getUser from "@/composables/getUser";
import NewChatForm from "@/components/NewChatForm.vue";
import ChatWindow from "@/components/ChatWindow.vue";

import { watch } from "vue";
import { useRouter } from "vue-router";
export default {
  components: { Navbar, NewChatForm, ChatWindow },
  setup() {
    const { user } = getUser();
    const router = useRouter();

    watch(user, () => {
      if (!user.value) {
        router.push({ name: "Welcome" });
      }
    });
  },
};
</script>

<style></style>
